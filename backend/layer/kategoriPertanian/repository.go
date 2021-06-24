package kategoriPertanian

import (
	"backend/entity"

	"gorm.io/gorm"
)

type Repository interface {
	FindAll() ([]entity.KategoriPertanian, error)
	Create(k_petani entity.KategoriPertanian) (entity.KategoriPertanian, error)
	FindByID(ID string) (entity.KategoriPertanian, error)
	DeleteByID(ID string) (string, error)
	UpdateByID(ID string, dataUpdate map[string]interface{}) (entity.KategoriPertanian, error)
}

type repository struct {
	db *gorm.DB
}

func NewRepository(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) FindAll() ([]entity.KategoriPertanian, error) {
	var k_petani []entity.KategoriPertanian
	if err := r.db.Preload("Pendanaan").Find(&k_petani).Error; err != nil {
		return k_petani, err
	}

	return k_petani, nil
}

func (r *repository) Create(k_petani entity.KategoriPertanian) (entity.KategoriPertanian, error) {
	err := r.db.Create(&k_petani).Error
	if err != nil {
		return k_petani, err
	}

	return k_petani, nil
}

func (r *repository) FindByID(ID string) (entity.KategoriPertanian, error) {

	var k_petani entity.KategoriPertanian

	err := r.db.Where("id = ?", ID).Preload("Pendanaan").Find(&k_petani).Error
	if err != nil {
		return k_petani, err
	}

	return k_petani, nil
}

func (r *repository) DeleteByID(ID string) (string, error) {
	if err := r.db.Where("id = ?", ID).Delete(&entity.KategoriPertanian{}).Error; err != nil {
		return "error", err
	}

	return "success", nil
}

func (r *repository) UpdateByID(ID string, dataUpdate map[string]interface{}) (entity.KategoriPertanian, error) {
	var k_petani entity.KategoriPertanian

	if err := r.db.Model(&k_petani).Where("id = ?", ID).Updates(dataUpdate).Error; err != nil {
		return k_petani, err
	}

	if err := r.db.Where("id = ?", ID).Find(&k_petani).Error; err != nil {
		return k_petani, err
	}
	return k_petani, nil
}
