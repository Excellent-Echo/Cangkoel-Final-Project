package hasilpengajuan

import (
	"backend/entity"
	"backend/helper"
	"errors"
	"fmt"
	"strconv"
	"time"
)

type Service interface {
	SShowAllHasilPengajuan() ([]entity.HasilPengajuan, error)
	SCreateHasilPengajuan(hasilPengajuan entity.HasilPengajuanInput) (entity.HasilPengajuan, error)
	SFindHasilPengajuanByID(hasilPengajuanID string) (entity.HasilPengajuan, error)
	SUpdateHasilPengajuanByID(hasilPengajuanID string, input entity.UpdateHasilPengajuanInput) (entity.HasilPengajuan, error)
}

type service struct {
	repository Repository
}

func NewService(repository Repository) *service {
	return &service{repository}
}

func (s *service) SShowAllHasilPengajuan() ([]entity.HasilPengajuan, error) {
	hasilPengajuan, err := s.repository.RShowAllHasilPengajuan()

	if err != nil {
		return hasilPengajuan, err
	}

	return hasilPengajuan, nil
}

func (s *service) SCreateHasilPengajuan(hasilPengajuan entity.HasilPengajuanInput) (entity.HasilPengajuan, error) {

	var newHasilPengajuan = entity.HasilPengajuan{
		Status:      hasilPengajuan.Status,
		Keterangan:  hasilPengajuan.Keterangan,
		PetaniID:    hasilPengajuan.PetaniID,
		PengajuanID: hasilPengajuan.PengajuanID,
		CreatedAt:   time.Now(),
		UpdatedAt:   time.Now(),
	}

	createHasilPengajuan, err := s.repository.RCreateHasilPengajuan(newHasilPengajuan)

	if err != nil {
		return createHasilPengajuan, err
	}

	return createHasilPengajuan, nil
}

func (s *service) SFindHasilPengajuanByID(hasilPengajuanID string) (entity.HasilPengajuan, error) {
	hasilPengajuan, err := s.repository.RFindHasilPengajuanByID(hasilPengajuanID)

	if err != nil {
		return hasilPengajuan, err
	}

	if hasilPengajuan.ID == 0 {
		newError := fmt.Sprintf("hasilPengajuan id %s not found", hasilPengajuanID)
		return hasilPengajuan, errors.New(newError)
	}

	return hasilPengajuan, nil
}

func (s *service) SUpdateHasilPengajuanByID(hasilPengajuanID string, input entity.UpdateHasilPengajuanInput) (entity.HasilPengajuan, error) {
	var dataUpdate = map[string]interface{}{}

	if err := helper.ValidateIDNumber(hasilPengajuanID); err != nil {
		return entity.HasilPengajuan{}, err
	}

	hasilPengajuan, err := s.repository.RFindHasilPengajuanByID(hasilPengajuanID)

	if err != nil {
		return entity.HasilPengajuan{}, err
	}

	if hasilPengajuan.ID == 0 {
		newError := fmt.Sprintf("hasilPengajuan id %s not found", hasilPengajuanID)
		return entity.HasilPengajuan{}, errors.New(newError)
	}

	if input.Status != "" || len(input.Status) != 0 {
		dataUpdate["Status"] = input.Status
	}
	if input.Keterangan != "" || len(input.Keterangan) != 0 {
		dataUpdate["Keterangan"] = input.Keterangan
	}
	if strconv.Itoa(input.PetaniID) != "" || len(strconv.Itoa(input.PetaniID)) != 0 {
		dataUpdate["PetaniID"] = input.PetaniID
	}
	if strconv.Itoa(input.PengajuanID) != "" || len(strconv.Itoa(input.PengajuanID)) != 0 {
		dataUpdate["PengajuanID"] = input.PengajuanID
	}
	dataUpdate["updated_at"] = time.Now()

	hasilPengajuanUpdated, err := s.repository.RUpdateHasilPengajuanByID(hasilPengajuanID, dataUpdate)

	if err != nil {
		return hasilPengajuanUpdated, err
	}

	return hasilPengajuanUpdated, nil
}
