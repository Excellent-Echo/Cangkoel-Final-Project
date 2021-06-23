package pendanaan

import (
	"backend/entity"
	"errors"
	"fmt"
	"strconv"
	"time"
)

type Service interface {
	SShowAllPendanaan() ([]entity.Pendanaan, error)
	SCreatePendanaan(pendanaan entity.PendanaanInput, investorID string) (entity.Pendanaan, error)
	SFindPendanaanByKategoriID(kategoriID string) (entity.Pendanaan, error)
}

type service struct {
	repository Repository
}

func NewService(repository Repository) *service {
	return &service{repository}
}

func (s *service) SShowAllPendanaan() ([]entity.Pendanaan, error) {
	pendanaan, err := s.repository.RShowAllPendanaan()

	if err != nil {
		return pendanaan, err
	}

	return pendanaan, nil
}

func (s *service) SCreatePendanaan(pendanaan entity.PendanaanInput, investorID string) (entity.Pendanaan, error) {
	IDInvestor, _ := strconv.Atoi(investorID)

	checkStatus, err := s.repository.RFindPendanaanByID(investorID)

	if err != nil {
		return checkStatus, err
	}

	if checkStatus.InvestorID == IDInvestor {
		errorStatus := fmt.Sprintf("Form Pendanaan for Investor id : %s has been created", investorID)
		return checkStatus, errors.New(errorStatus)
	}

	var newPendanaan = entity.Pendanaan{
		// FotoProfil: pathFileProfil,
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
		InvestorID:             IDInvestor,
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
		newError := fmt.Sprintf("Form Pendanaan by Kategori id %s not found", kategoriID)
		return pendanaan, errors.New(newError)
	}

	return pendanaan, nil
}
