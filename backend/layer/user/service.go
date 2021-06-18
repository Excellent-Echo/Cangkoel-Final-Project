package user

import (
	"backend/entity"
	"backend/layer/investor"
	"backend/layer/petani"
	"errors"
	"fmt"

	"golang.org/x/crypto/bcrypt"
)

type Service interface {
	SLoginUser(input entity.LoginUserInput) (UserFormat, error)
}

type service struct {
	petaniRepo   petani.Repository
	investorRepo investor.Repository
}

func NewService(petaniRepo petani.Repository, investorRepo investor.Repository) *service {
	return &service{petaniRepo, investorRepo}
}

func (s *service) SLoginUser(input entity.LoginUserInput) (UserFormat, error) {
	userPetani, err := s.petaniRepo.RFindPetaniByEmail(input.Email)
	userInvestor, err := s.investorRepo.RFindInvestorByEmail(input.Email)

	if err != nil {
		return UserFormat{}, err
	}

	if userPetani.ID > 0 {
		if err := bcrypt.CompareHashAndPassword([]byte(userPetani.Password), []byte(input.Password)); err != nil {
			return UserFormat{}, errors.New("password invalid")
		}

		formatter := FormatPetani(userPetani)

		return formatter, nil
	}

	if userInvestor.ID > 0 {
		if err := bcrypt.CompareHashAndPassword([]byte(userInvestor.Password), []byte(input.Password)); err != nil {
			return UserFormat{}, errors.New("password invalid")
		}

		formatter := FormatInvestor(userInvestor)

		return formatter, nil
	}

	newError := fmt.Sprintf("user id %v not found", userPetani.ID)
	return UserFormat{}, errors.New(newError)

}
