package kategoripertanian

import (
	"backend/entity"
	"backend/helper"
	"errors"
	"fmt"
)

type Service interface {
	SFindAllKpetani() ([]entity.KategoriPertanian, error)
	SCreateKpetani(kpetani entity.KategoriPertanianInput) (KPetaniFormat, error)
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

func (s *service) SDeleteByIDKpetani(ID string) (interface{}, error) {
	msg, err := s.repository.DeleteByID(ID)

	if err != nil || msg == "error" {
		return msg, err
	}

	message := fmt.Sprintf("book id %s success deleted", ID)

	return message, nil

}

func (s *service) 	SUpdateByIDKpetani(KategoriID string, input entity.UpdateKategoriPertanianInput) (entity.KategoriPertanian, error){
	var dataUpdate = map[string]interface{}{}

	if err := helper.ValidateIDNumber(KategoriID); err != nil {
		return KPetaniFormat{}, err
	}

	Kpetani, err := s.repository.SFindByIDKpetani(KategoriID)

	if err != nil {
		return KPetaniFormat{}, err
	}

	if Kpetani.ID == 0 {
		newError := fmt.Sprintf("id Kategori Pertanian %s not found", KategoriID)
		return KPetaniFormat{}, errors.New(newError)
	}

	if input.NamaKategori != "" || len(input.NamaKategori) != 0 {
		dataUpdate["NamaKategori"] = input.NamaKategori
	}

	if input.FotoKategori != "" || len(input.FotoKategori) != 0 {
		dataUpdate["FotoKategori"] = input.FotoKategori
	}

	KategoriUpdate, err := s.repository.UpdateByID(KategoriID, dataUpdate)

	if err != nil {
		return KPetaniFormat{}, err
	}

	formatKPetani := Format(KategoriUpdate)

	return formatKPetani, nil
}
