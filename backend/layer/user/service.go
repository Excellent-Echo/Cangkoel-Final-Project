package user

import (
	"backend/entity"
	"backend/layer/admin"
	"backend/layer/petani"
	"errors"
	"fmt"

	"golang.org/x/crypto/bcrypt"
)

type Service interface {
	SLoginUser(input entity.LoginUserInput) (UserFormat, error)
}

type service struct {
	petaniRepo petani.Repository
	adminRepo  admin.Repository
}

func NewService(petaniRepo petani.Repository, adminRepo admin.Repository) *service {
	return &service{petaniRepo, adminRepo}
}

func (s *service) SLoginUser(input entity.LoginUserInput) (UserFormat, error) {
	userPetani, err := s.petaniRepo.RFindPetaniByEmail(input.Email)
	admin, err := s.adminRepo.RFindAdminByEmail(input.Email)

	if err != nil {
		return UserFormat{}, err
	}

	if len(userPetani.ID) == 0 { // perlu diperhatikan
		if err := bcrypt.CompareHashAndPassword([]byte(userPetani.Password), []byte(input.Password)); err != nil {
			return UserFormat{}, errors.New("password invalid")
		}

		formatter := FormatPetani(userPetani)

		return formatter, nil
	}

	if len(admin.ID) == 0 { // perlu diperhatikan
		if err := bcrypt.CompareHashAndPassword([]byte(admin.Password), []byte(input.Password)); err != nil {
			return UserFormat{}, errors.New("password invalid")
		}

		formatter := FormatAdmin(admin)

		return formatter, nil
	}

	newError := fmt.Sprintf("user id %v not found", userPetani.ID)
	return UserFormat{}, errors.New(newError)

}
