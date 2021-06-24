package formPengajuan

import (
	"backend/entity"
	"errors"
	"fmt"
	"time"
)

type Service interface {
	SShowAllFormPengajuan() ([]entity.FormPengajuan, error)
	SCreateFormPengajuan(formPengajuan entity.FormPengajuanInput, petaniID string) (entity.FormPengajuan, error)
	SFindFormPengajuanByID(formPengajuanID string) (entity.FormPengajuan, error)
}

type service struct {
	repository Repository
}

func NewService(repository Repository) *service {
	return &service{repository}
}

func (s *service) SShowAllFormPengajuan() ([]entity.FormPengajuan, error) {
	formPengajuan, err := s.repository.RShowAllFormPengajuan()

	if err != nil {
		return formPengajuan, err
	}

	return formPengajuan, nil
}

func (s *service) SCreateFormPengajuan(formPengajuan entity.FormPengajuanInput, petaniID string) (entity.FormPengajuan, error) {
	// IDPetani, _ := strconv.Atoi(petaniID)

	checkStatus, err := s.repository.RFindFormPengajuanByID(petaniID)
	// checkPendanaan, err := s.repository2.RFindPendanaanByID(pendanaanID)

	if err != nil {
		return checkStatus, err
	}

	if checkStatus.PetaniID == petaniID {
		errorStatus := fmt.Sprintf("Form Pengajuan for Petani id : %s has been created", petaniID)
		return checkStatus, errors.New(errorStatus)
	}

	var newFormPengajuan = entity.FormPengajuan{
		NamaLengkap:      formPengajuan.NamaLengkap,
		NomorHP:          formPengajuan.NomorHP,
		JenisKelamin:     formPengajuan.JenisKelamin,
		DokumenPerizinan: formPengajuan.DokumenPerizinan,
		NomorNPWP:        formPengajuan.NomorNPWP,
		Ktp:              formPengajuan.Ktp,
		JenisUsaha:       formPengajuan.JenisUsaha,
		TenagaKerja:      formPengajuan.TenagaKerja,
		OmzetPerbulan:    formPengajuan.OmzetPerbulan,
		AlamatUsaha:      formPengajuan.AlamatUsaha,
		PetaniID:         petaniID,
		PendanaanID:      formPengajuan.PendanaanID,
		CreatedAt:        time.Now(),
		UpdatedAt:        time.Now(),
	}

	createFormPengajuan, err := s.repository.RCreateFormPengajuan(newFormPengajuan)

	if err != nil {
		return createFormPengajuan, err
	}

	return createFormPengajuan, nil
}

func (s *service) SFindFormPengajuanByID(formPengajuanID string) (entity.FormPengajuan, error) {
	formPengajuan, err := s.repository.RFindFormPengajuanByID(formPengajuanID)

	if err != nil {
		return formPengajuan, err
	}

	if formPengajuan.ID == 0 {
		newError := fmt.Sprintf("Form Pengajuan id %s not found", formPengajuanID)
		return formPengajuan, errors.New(newError)
	}

	return formPengajuan, nil
}
