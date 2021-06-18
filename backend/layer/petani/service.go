package petani

import (
	"backend/entity"
	"backend/helper"
	"errors"
	"fmt"
	"time"

	"golang.org/x/crypto/bcrypt"
)

type Service interface {
	SShowAllPetani() ([]PetaniFormat, error)
	SRegisterPetani(userPetani entity.PetaniInput) (PetaniFormat, error)
	SFindPetaniByID(petaniID string) (PetaniFormat, error)
	SDeletePetaniByID(petaniID string) (interface{}, error)
	SUpdatePetaniByID(petaniID string, input entity.UpdatePetaniInput) (PetaniFormat, error)
	SLoginPetani(input entity.LoginPetaniInput) (entity.Petani, error)
}

type service struct {
	repository Repository
}

func NewService(repository Repository) *service {
	return &service{repository}
}

func (s *service) SLoginPetani(input entity.LoginPetaniInput) (entity.Petani, error) {
	userPetani, err := s.repository.RFindPetaniByEmail(input.Email)

	if err != nil {
		return userPetani, err
	}

	if userPetani.ID == 0 {
		newError := fmt.Sprintf("userPetani id %v not found", userPetani.ID)
		return userPetani, errors.New(newError)
	}

	//ngecek password sama atau tidak
	if err := bcrypt.CompareHashAndPassword([]byte(userPetani.Password), []byte(input.Password)); err != nil {
		return userPetani, errors.New("password invalid")
	}

	return userPetani, nil
}

func (s *service) SShowAllPetani() ([]PetaniFormat, error) {
	userPetani, err := s.repository.RShowAllPetani()
	var formatuserPetani []PetaniFormat

	for _, petani := range userPetani {
		formatPetani := Format(petani)
		formatuserPetani = append(formatuserPetani, formatPetani)

	}
	if err != nil {
		return formatuserPetani, err
	}

	return formatuserPetani, nil
}

func (s *service) SRegisterPetani(userPetani entity.PetaniInput) (PetaniFormat, error) {
	genPassword, err := bcrypt.GenerateFromPassword([]byte(userPetani.Password), bcrypt.MinCost)

	if err != nil {
		return PetaniFormat{}, err
	}
	role := "petani"

	var newPetani = entity.Petani{
		FullName:  userPetani.FullName,
		Email:     userPetani.Email,
		Password:  string(genPassword),
		Role:      role,
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
	}

	createPetani, err := s.repository.RRegisterPetani(newPetani)
	formatPetani := Format(createPetani)

	if err != nil {
		return formatPetani, err
	}

	return formatPetani, nil
}

func (s *service) SFindPetaniByID(petaniID string) (PetaniFormat, error) {
	userPetani, err := s.repository.RFindPetaniByID(petaniID)

	if err != nil {
		return PetaniFormat{}, err
	}

	if userPetani.ID == 0 {
		newError := fmt.Sprintf("userPetani id %s not found", petaniID)
		return PetaniFormat{}, errors.New(newError)
	}

	formatPetani := Format(userPetani)

	return formatPetani, nil
}

func (s *service) SDeletePetaniByID(petaniID string) (interface{}, error) {
	if err := helper.ValidateIDNumber(petaniID); err != nil {
		return nil, err
	}

	userPetani, err := s.repository.RFindPetaniByID(petaniID)

	if err != nil {
		return nil, err
	}

	if userPetani.ID == 0 {
		newError := fmt.Sprintf("userPetani id %s not found", petaniID)
		return nil, errors.New(newError)
	}

	status, err := s.repository.RDeletePetaniByID(petaniID)

	if err != nil {
		return nil, err
	}

	if status == "error" {
		return nil, errors.New("error delete in internal server")
	}

	msg := fmt.Sprintf("success delete userPetani ID : %s", petaniID)

	formatDelete := FormatDelete(msg)

	return formatDelete, nil
}

func (s *service) SUpdatePetaniByID(petaniID string, input entity.UpdatePetaniInput) (PetaniFormat, error) {
	var dataUpdate = map[string]interface{}{}

	if err := helper.ValidateIDNumber(petaniID); err != nil {
		return PetaniFormat{}, err
	}

	userPetani, err := s.repository.RFindPetaniByID(petaniID)

	if err != nil {
		return PetaniFormat{}, err
	}

	if userPetani.ID == 0 {
		newError := fmt.Sprintf("userPetani id %s not found", petaniID)
		return PetaniFormat{}, errors.New(newError)
	}

	if input.FullName != "" || len(input.FullName) != 0 {
		dataUpdate["FullName"] = input.FullName
	}
	if input.Email != "" || len(input.Email) != 0 {
		dataUpdate["Email"] = input.Email
	}
	if input.Password != "" || len(input.Password) != 0 {
		dataUpdate["Passowrd"] = input.Password
	}
	dataUpdate["updated_at"] = time.Now()

	petaniUpdated, err := s.repository.RUpdatePetaniByID(petaniID, dataUpdate)

	if err != nil {
		return PetaniFormat{}, err
	}

	formatPetani := Format(petaniUpdated)

	return formatPetani, nil
}
