package formPengajuan

import (
	"backend/entity"

	"gorm.io/gorm"
)

type Repository interface {
	RShowAllFormPengajuan() ([]entity.FormPengajuan, error)
	RCreateFormPengajuan(formPengajuan entity.FormPengajuan) (entity.FormPengajuan, error)
	RFindFormPengajuanByID(ID string) (entity.FormPengajuan, error)
}

type repository struct {
	db *gorm.DB
}

func NewRepository(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) RShowAllFormPengajuan() ([]entity.FormPengajuan, error) {
	var formPengajuan []entity.FormPengajuan

	err := r.db.Find(&formPengajuan).Error
	if err != nil {
		return formPengajuan, err
	}

	return formPengajuan, nil
}

func (r *repository) RCreateFormPengajuan(formPengajuan entity.FormPengajuan) (entity.FormPengajuan, error) {

	err := r.db.Create(&formPengajuan).Error
	if err != nil {
		return formPengajuan, err
	}

	return formPengajuan, nil
}

func (r *repository) RFindFormPengajuanByID(ID string) (entity.FormPengajuan, error) {
	var formPengajuan entity.FormPengajuan

	err := r.db.Where("id = ?", ID).Find(&formPengajuan).Error
	if err != nil {
		return formPengajuan, err
	}

	return formPengajuan, nil
}
