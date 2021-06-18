package investor

import (
	"backend/entity"
	"backend/helper"
	"errors"
	"fmt"
	"time"

	"golang.org/x/crypto/bcrypt"
)

type Service interface {
	SShowAllInvestor() ([]InvestorFormat, error)
	SRegisterInvestor(userInvestor entity.InvestorInput) (InvestorFormat, error)
	SFindInvestorByID(investorID string) (InvestorFormat, error)
	SDeleteInvestorByID(investorID string) (interface{}, error)
	SUpdateInvestorByID(investorID string, input entity.UpdateInvestorInput) (InvestorFormat, error)
}

type service struct {
	repository Repository
}

func NewService(repository Repository) *service {
	return &service{repository}
}

func (s *service) SShowAllInvestor() ([]InvestorFormat, error) {
	userInvestor, err := s.repository.RShowAllInvestor()
	var formatuserInvestor []InvestorFormat

	for _, investor := range userInvestor {
		formatInvestor := Format(investor)
		formatuserInvestor = append(formatuserInvestor, formatInvestor)

	}
	if err != nil {
		return formatuserInvestor, err
	}

	return formatuserInvestor, nil
}

func (s *service) SRegisterInvestor(userInvestor entity.InvestorInput) (InvestorFormat, error) {
	genPassword, err := bcrypt.GenerateFromPassword([]byte(userInvestor.Password), bcrypt.MinCost)

	if err != nil {
		return InvestorFormat{}, err
	}

	var newInvestor = entity.Investor{
		FullName:  userInvestor.FullName,
		Email:     userInvestor.Email,
		Password:  string(genPassword),
		Role:      string("investor"),
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
	}

	createInvestor, err := s.repository.RRegisterInvestor(newInvestor)
	formatInvestor := Format(createInvestor)

	if err != nil {
		return formatInvestor, err
	}

	return formatInvestor, nil
}

func (s *service) SFindInvestorByID(investorID string) (InvestorFormat, error) {
	userInvestor, err := s.repository.RFindInvestorByID(investorID)

	if err != nil {
		return InvestorFormat{}, err
	}

	if userInvestor.ID == 0 {
		newError := fmt.Sprintf("userInvestor id %s not found", investorID)
		return InvestorFormat{}, errors.New(newError)
	}

	formatInvestor := Format(userInvestor)

	return formatInvestor, nil
}

func (s *service) SDeleteInvestorByID(investorID string) (interface{}, error) {
	if err := helper.ValidateIDNumber(investorID); err != nil {
		return nil, err
	}

	userInvestor, err := s.repository.RFindInvestorByID(investorID)

	if err != nil {
		return nil, err
	}

	if userInvestor.ID == 0 {
		newError := fmt.Sprintf("userInvestor id %s not found", investorID)
		return nil, errors.New(newError)
	}

	status, err := s.repository.RDeleteInvestorByID(investorID)

	if err != nil {
		return nil, err
	}

	if status == "error" {
		return nil, errors.New("error delete in internal server")
	}

	msg := fmt.Sprintf("success delete userInvestor ID : %s", investorID)

	formatDelete := FormatDelete(msg)

	return formatDelete, nil
}

func (s *service) SUpdateInvestorByID(investorID string, input entity.UpdateInvestorInput) (InvestorFormat, error) {
	var dataUpdate = map[string]interface{}{}

	if err := helper.ValidateIDNumber(investorID); err != nil {
		return InvestorFormat{}, err
	}

	userInvestor, err := s.repository.RFindInvestorByID(investorID)

	if err != nil {
		return InvestorFormat{}, err
	}

	if userInvestor.ID == 0 {
		newError := fmt.Sprintf("userInvestor id %s not found", investorID)
		return InvestorFormat{}, errors.New(newError)
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

	investorUpdated, err := s.repository.RUpdateInvestorByID(investorID, dataUpdate)

	if err != nil {
		return InvestorFormat{}, err
	}

	formatInvestor := Format(investorUpdated)

	return formatInvestor, nil
}
