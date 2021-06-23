package kategoriPertanian

import (
	"backend/entity"
	"backend/helper"
	"errors"
	"fmt"
)

type Service interface {
	SFindAllKpetani() ([]entity.KategoriPertanian, error)
	SCreateKpetani(kpetani entity.KategoriPertanianInput) (entity.KategoriPertanian, error)
	SFindByIDKpetani(ID string) (entity.KategoriPertanian, error)
	SDeleteByIDKpetani(ID string) (interface{}, error)
	SUpdateByIDKpetani(KategoriID string, input entity.UpdateKategoriPertanianInput) (entity.KategoriPertanian, error)
}

type service struct {
	repository Repository
}

func NewService(repository Repository) *service {
	return &service{repository}
}

func (s *service) SFindAllKpetani() ([]entity.KategoriPertanian, error) {
	sKPetani, err := s.repository.FindAll()

	if err != nil {
		return sKPetani, err
	}

	return sKPetani, nil
}

func (s *service) SCreateKpetani(kpetani entity.KategoriPertanianInput) (entity.KategoriPertanian, error) {

	var newKPetani = entity.KategoriPertanian{
		NamaKategori: kpetani.NamaKategori,
		FotoKategori: kpetani.FotoKategori,
	}

	createKPetani, err := s.repository.Create(newKPetani)

	if err != nil {
		return createKPetani, err
	}

	return createKPetani, nil

}

func (s *service) SFindByIDKpetani(ID string) (entity.KategoriPertanian, error) {
	KPetani, err := s.repository.FindByID(ID)

	if err != nil {
		return entity.KategoriPertanian{}, err
	}

	if KPetani.ID == 0 {
		newError := fmt.Sprintf("Kategori Pertanian id %s not found", ID)
		return entity.KategoriPertanian{}, errors.New(newError)
	}

	return KPetani, nil
}

func (s *service) SDeleteByIDKpetani(ID string) (interface{}, error) {
	if err := helper.ValidateIDNumber(ID); err != nil {
		return nil, err
	}

	kategoriPertanian, err := s.repository.FindByID(ID)

	if err != nil {
		return nil, err
	}

	if kategoriPertanian.ID == 0 {
		newError := fmt.Sprintf("kategori pertanian id %s not found", ID)
		return nil, errors.New(newError)
	}

	status, err := s.repository.DeleteByID(ID)

	if err != nil {
		return nil, err
	}

	if status == "error" {
		return nil, errors.New("error delete in internal server")
	}

	msg := fmt.Sprintf("success delete kategori pertanian ID : %s", ID)

	formatDelete := FormatDelete(msg)

	return formatDelete, nil
}

func (s *service) SUpdateByIDKpetani(KategoriID string, input entity.UpdateKategoriPertanianInput) (entity.KategoriPertanian, error) {
	var dataUpdate = map[string]interface{}{}

	if err := helper.ValidateIDNumber(KategoriID); err != nil {
		return entity.KategoriPertanian{}, err
	}

	Kpetani, err := s.repository.FindByID(KategoriID)

	if err != nil {
		return entity.KategoriPertanian{}, err
	}

	if Kpetani.ID == 0 {
		newError := fmt.Sprintf("id Kategori Pertanian %s not found", KategoriID)
		return entity.KategoriPertanian{}, errors.New(newError)
	}

	if input.NamaKategori != "" || len(input.NamaKategori) != 0 {
		dataUpdate["NamaKategori"] = input.NamaKategori
	}

	if input.FotoKategori != "" || len(input.FotoKategori) != 0 {
		dataUpdate["FotoKategori"] = input.FotoKategori
	}

	KategoriUpdate, err := s.repository.UpdateByID(KategoriID, dataUpdate)

	if err != nil {
		return entity.KategoriPertanian{}, err
	}

	return KategoriUpdate, nil
}
