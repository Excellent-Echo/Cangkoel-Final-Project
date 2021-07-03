package pendanaan

import (
	"backend/entity"
	"backend/layer/kategoriPertanian"
	"errors"
	"fmt"

	//"strconv"
	"time"
)

type Service interface {
	SShowAllPendanaan() ([]entity.Pendanaan, error)
	SCreatePendanaan(pendanaan entity.PendanaanInput) (entity.Pendanaan, error)
	SFindPendanaanByKategoriID(kategoriID string) (entity.Pendanaan, error)
	SFindPendanaanByID(pendanaanID string) (entity.Pendanaan, error)
	SDeletePendanaanByID(pendanaanID string) (interface{}, error)
	SUpdatePendanaanByID(pendanaanID string, input entity.UpdatePendanaanInput) (entity.Pendanaan, error)
}

type service struct {
	repository  Repository
	repository2 kategoriPertanian.Repository
}

func NewService(repository Repository, repository2 kategoriPertanian.Repository) *service {
	return &service{repository, repository2}
}

func (s *service) SShowAllPendanaan() ([]entity.Pendanaan, error) {
	pendanaan, err := s.repository.RShowAllPendanaan()

	if err != nil {
		return pendanaan, err
	}

	return pendanaan, nil
}

func (s *service) SCreatePendanaan(pendanaan entity.PendanaanInput) (entity.Pendanaan, error) {
	//IDInvestor, _ := strconv.Atoi(investorID)

	//checkStatus, err := s.repository.RFindPendanaanByID(investorID)

	//if err != nil {
	//	return checkStatus, err
	//}
	//
	//if checkStatus.InvestorID == IDInvestor {
	//	errorStatus := fmt.Sprintf("Form Pendanaan for Investor id : %s has been created", investorID)
	//	return checkStatus, errors.New(errorStatus)
	//}

	var newPendanaan = entity.Pendanaan{
		FotoProfil:             pendanaan.FotoProfil,
		NamaInvestor:           pendanaan.NamaInvestor,
		JudulPendanaan:         pendanaan.JudulPendanaan,
		NominalPendanaan:       pendanaan.NominalPendanaan,
		PerusahaanPengirim:     pendanaan.PerusahaanPengirim,
		BagiHasilInvestor:      pendanaan.BagiHasilInvestor,
		BagiHasilPetani:        pendanaan.BagiHasilPetani,
		KebutuhanKomoditas:     pendanaan.KebutuhanKomoditas,
		JangkaWaktu:            pendanaan.JangkaWaktu,
		KeuntunganBersih:       pendanaan.KeuntunganBersih,
		Deskripsi:              pendanaan.Deskripsi,
		BiayaOperasional:       pendanaan.BiayaOperasional,
		BiayaEkspor:            pendanaan.BiayaEkspor,
		PerhitunganPenghasilan: pendanaan.PerhitunganPenghasilan,
		PerhitunganKeuntungan:  pendanaan.PerhitunganKeuntungan,
		KategoriID:             pendanaan.KategoriID,
		CreatedAt:              time.Now(),
		UpdatedAt:              time.Now(),
	}

	createPendanaan, err := s.repository.RCreatePendanaan(newPendanaan)

	if err != nil {
		return createPendanaan, err
	}

	return createPendanaan, nil
}

func (s *service) SFindPendanaanByKategoriID(kategoriID string) (entity.Pendanaan, error) {
	pendanaan, err := s.repository.RFindPendanaanByKategoriID(kategoriID)

	if err != nil {
		return pendanaan, err
	}

	if pendanaan.ID == 0 {
		newError := fmt.Sprintf("Pendanaan by Kategori id %s not found", kategoriID)
		return pendanaan, errors.New(newError)
	}

	return pendanaan, nil
}

func (s *service) SFindPendanaanByID(pendanaanID string) (entity.Pendanaan, error) {
	pendanaan, err := s.repository.RFindPendanaanByID(pendanaanID)

	if err != nil {
		return pendanaan, err
	}

	if pendanaan.ID == 0 {
		newError := fmt.Sprintf("Pendanaan id %s not found", pendanaanID)
		return pendanaan, errors.New(newError)
	}

	return pendanaan, nil
}

func (s *service) SDeletePendanaanByID(pendanaanID string) (interface{}, error) {

	pendanaan, err := s.repository.RFindPendanaanByID(pendanaanID)

	if err != nil {
		return nil, err
	}

	if pendanaan.ID == 0 {
		newError := fmt.Sprintf("pendanaan id %s not found", pendanaanID)
		return nil, errors.New(newError)
	}

	status, err := s.repository.RDeletePendanaanByID(pendanaanID)

	if err != nil {
		return nil, err
	}

	if status == "error" {
		return nil, errors.New("error delete in internal server")
	}

	msg := fmt.Sprintf("success delete pendanaan ID : %s", pendanaanID)

	formatDelete := FormatDelete(msg)

	return formatDelete, nil
}

func (s *service) SUpdatePendanaanByID(pendanaanID string, input entity.UpdatePendanaanInput) (entity.Pendanaan, error) {
	var dataUpdate = map[string]interface{}{}

	pendanaan, err := s.repository.RFindPendanaanByID(pendanaanID)

	if err != nil {
		return entity.Pendanaan{}, err
	}

	if pendanaan.ID == 0 {
		newError := fmt.Sprintf("id Pendanaan %s not found", pendanaanID)
		return entity.Pendanaan{}, errors.New(newError)
	}

	if input.FotoProfil != "" || len(input.FotoProfil) != 0 {
		dataUpdate["FotoProfil"] = input.FotoProfil
	}

	if input.NamaInvestor != "" || len(input.NamaInvestor) != 0 {
		dataUpdate["NamaInvestor"] = input.NamaInvestor
	}

	if input.JudulPendanaan != "" || len(input.JudulPendanaan) != 0 {
		dataUpdate["JudulPendanaan"] = input.JudulPendanaan
	}

	if input.NominalPendanaan != 0 {
		dataUpdate["NominalPendanaan"] = input.NominalPendanaan
	}

	if input.PerusahaanPengirim != "" || len(input.PerusahaanPengirim) != 0 {
		dataUpdate["PerusahaanPengirim"] = input.PerusahaanPengirim
	}

	if input.BagiHasilInvestor != 0 {
		dataUpdate["BagiHasilInvestor"] = input.BagiHasilInvestor
	}

	if input.BagiHasilPetani != 0 {
		dataUpdate["BagiHasilPetani"] = input.BagiHasilPetani
	}

	if input.KebutuhanKomoditas != "" || len(input.KebutuhanKomoditas) != 0 {
		dataUpdate["KebutuhanKomoditas"] = input.KebutuhanKomoditas
	}

	if input.JangkaWaktu != "" || len(input.JangkaWaktu) != 0 {
		dataUpdate["JangkaWaktu"] = input.JangkaWaktu
	}

	if input.KeuntunganBersih != 0 {
		dataUpdate["KeuntunganBersih"] = input.KeuntunganBersih
	}

	if input.Deskripsi != "" || len(input.Deskripsi) != 0 {
		dataUpdate["Deskripsi"] = input.Deskripsi
	}

	if input.BiayaOperasional != "" || len(input.BiayaOperasional) != 0 {
		dataUpdate["BiayaOperasional"] = input.BiayaOperasional
	}

	if input.BiayaEkspor != "" || len(input.BiayaEkspor) != 0 {
		dataUpdate["BiayaEkspor"] = input.BiayaEkspor
	}

	if input.PerhitunganPenghasilan != "" || len(input.PerhitunganPenghasilan) != 0 {
		dataUpdate["PerhitunganPenghasilan"] = input.PerhitunganPenghasilan
	}

	if input.PerhitunganKeuntungan != "" || len(input.PerhitunganKeuntungan) != 0 {
		dataUpdate["PerhitunganKeuntungan"] = input.PerhitunganKeuntungan
	}

	if input.KategoriID != 0 {
		dataUpdate["KategoriID"] = input.KategoriID
	}

	pendanaanUpdate, err := s.repository.RUpdatePendanaanByID(pendanaanID, dataUpdate)

	if err != nil {
		return entity.Pendanaan{}, err
	}

	return pendanaanUpdate, nil
}
