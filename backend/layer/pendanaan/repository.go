package pendanaan

import (
	"backend/entity"

	"gorm.io/gorm"
)

type Repository interface {
	RShowAllPendanaan() ([]entity.Pendanaan, error)
	RCreatePendanaan(pendanaan entity.Pendanaan) (entity.Pendanaan, error)
	RFindPendanaanByID(ID string) (entity.Pendanaan, error)
	RFindPendanaanByKategoriID(KategoriID string) (entity.Pendanaan, error)
}

type repository struct {
	db *gorm.DB
}

func NewRepository(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) RShowAllPendanaan() ([]entity.Pendanaan, error) {
	var pendanaan []entity.Pendanaan

	err := r.db.Preload("FormPengajuan").Find(&pendanaan).Error
	if err != nil {
		return pendanaan, err
	}

	return pendanaan, nil
}

func (r *repository) RCreatePendanaan(pendanaan entity.Pendanaan) (entity.Pendanaan, error) {

	err := r.db.Create(&pendanaan).Error
	if err != nil {
		return pendanaan, err
	}

	return pendanaan, nil
}
func (r *repository) RFindPendanaanByID(ID string) (entity.Pendanaan, error) {
	var pendanaan entity.Pendanaan

	err := r.db.Where("id = ?", ID).Preload("FormPengajuan").Find(&pendanaan).Error
	if err != nil {
		return pendanaan, err
	}

	return pendanaan, nil
}
func (r *repository) RFindPendanaanByKategoriID(KategoriID string) (entity.Pendanaan, error) {
	var pendanaan entity.Pendanaan

	err := r.db.Where("kategori_id = ?", KategoriID).Find(&pendanaan).Error
	if err != nil {
		return pendanaan, err
	}

	return pendanaan, nil
}
