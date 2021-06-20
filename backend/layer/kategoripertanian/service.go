package kategoripertanian

import (
	"backend/entity"
	"backend/helper"
	"errors"
	"fmt"
)

type Service interface {
	SFindAllKpetani() ([]entity.KategoriPertanian, error)
	SCreateKpetani(kpetani entity.KategoriPertanian) (KPetaniFormat, error)
	SFindByIDKpetani(ID string) (entity.KategoriPertanian, error)
	SDeleteByIDKpetani(ID string) (string, error)
	SUpdateByIDKpetani(ID string, dataUpdate map[string]interface{}) (entity.KategoriPertanian, error)
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

func (s *service) SCreateKpetani(kpetani entity.KategoriPertanian) (KPetaniFormat, error) {

	var newKPetani = entity.KategoriPertanian{
		NamaKategori: kpetani.NamaKategori,
		FotoKategori: kpetani.FotoKategori,
		Pendanaan:    kpetani.Pendanaan,
		PendanaanID:  kpetani.PendanaanID,
	}

	createKPetani, err := s.repository.Create(newKPetani)
	KPetaniFormat := Format(createKPetani)

	if err != nil {
		return KPetaniFormat, err
	}

	return KPetaniFormat, nil

}

func (s *service) SFindByIDKpetani(ID string) (KPetaniFormat, error) {
	KPetani, err := s.repository.FindByID(ID)

	if err != nil {
		return KPetaniFormat{}, err
	}

	if KPetani.ID == 0 {
		newError := fmt.Sprintf("Kategori Pertanian id %s not found", ID)
		return KPetaniFormat{}, errors.New(newError)
	}

	KPetaniFormat := Format(KPetani)

	return KPetaniFormat, nil
}

func (s *service) SDeleteByIDKpetani(ID string) (string, error) {
	if err := helper.ValidateIDNumber(ID); err != nil {
		return nil, err
	}

	KPetani, err := s.repository.FindByID(ID)

	if err != nil {
		return nil, err
	}

	if KPetani.ID == 0 {
		newError := fmt.Sprintf("Kategori Pertanian id %s not found", ID)
		return nil, errors.New(newError)
	}

	status, err := s.repository.DeleteByID(ID)

	if err != nil {
		return nil, err
	}

	if status == "error" {
		return nil, errors.New("error delete in internal server")
	}
	var formatDelete = FormatDelete(msg)

	return formatDelete, nil
}
