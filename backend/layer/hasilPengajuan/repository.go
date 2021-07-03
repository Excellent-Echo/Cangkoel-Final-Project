package hasilPengajuan

import (
	"backend/entity"

	"gorm.io/gorm"
)

type Repository interface {
	RShowAllHasilPengajuan() ([]entity.HasilPengajuan, error)
	RCreateHasilPengajuan(hasilPengajuan entity.HasilPengajuan) (entity.HasilPengajuan, error)
	RFindHasilPengajuanByID(ID string) (entity.HasilPengajuan, error)
	RUpdateHasilPengajuanByID(ID string, dataUpdate map[string]interface{}) (entity.HasilPengajuan, error)
	RDeleteHasilPengajuanByID(ID string) (string, error)
}

type repository struct {
	db *gorm.DB
}

func NewRepository(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) RShowAllHasilPengajuan() ([]entity.HasilPengajuan, error) {
	var hasilPengajuan []entity.HasilPengajuan

	err := r.db.Find(&hasilPengajuan).Error
	if err != nil {
		return hasilPengajuan, err
	}

	return hasilPengajuan, nil
}

func (r *repository) RCreateHasilPengajuan(hasilPengajuan entity.HasilPengajuan) (entity.HasilPengajuan, error) {

	err := r.db.Create(&hasilPengajuan).Error
	if err != nil {
		return hasilPengajuan, err
	}

	return hasilPengajuan, nil
}

func (r *repository) RFindHasilPengajuanByID(ID string) (entity.HasilPengajuan, error) {
	var hasilPengajuan entity.HasilPengajuan

	err := r.db.Where("id = ?", ID).Find(&hasilPengajuan).Error
	if err != nil {
		return hasilPengajuan, err
	}

	return hasilPengajuan, nil
}

func (r *repository) RUpdateHasilPengajuanByID(ID string, dataUpdate map[string]interface{}) (entity.HasilPengajuan, error) {

	var hasilPengajuan entity.HasilPengajuan

	if err := r.db.Model(&hasilPengajuan).Where("id = ?", ID).Updates(dataUpdate).Error; err != nil {
		return hasilPengajuan, err
	}

	if err := r.db.Where("id = ?", ID).Find(&hasilPengajuan).Error; err != nil {
		return hasilPengajuan, err
	}

	return hasilPengajuan, nil
}

func (r *repository) RDeleteHasilPengajuanByID(ID string) (string, error) {
	if err := r.db.Where("id = ?", ID).Delete(&entity.HasilPengajuan{}).Error; err != nil {
		return "error", err
	}

	return "success", nil
}
