package petani

import (
	"backend/entity"

	"gorm.io/gorm"
)

type Repository interface {
	RShowAllPetani() ([]entity.Petani, error)
	RRegisterPetani(petani entity.Petani) (entity.Petani, error)
	RFindPetaniByID(ID string) (entity.Petani, error)
	RDeletePetaniByID(ID string) (string, error)
	RUpdatePetaniByID(ID string, dataUpdate map[string]interface{}) (entity.Petani, error)
	RFindPetaniByEmail(email string) (entity.Petani, error)
}

type repository struct {
	db *gorm.DB
}

func NewRepository(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) RShowAllPetani() ([]entity.Petani, error) {
	var userPetani []entity.Petani

	err := r.db.Find(&userPetani).Error
	if err != nil {
		return userPetani, err
	}

	return userPetani, nil
}

func (r *repository) RRegisterPetani(userPetani entity.Petani) (entity.Petani, error) {

	err := r.db.Create(&userPetani).Error
	if err != nil {
		return userPetani, err
	}

	return userPetani, nil
}

func (r *repository) RFindPetaniByID(ID string) (entity.Petani, error) {
	var userPetani entity.Petani

	err := r.db.Where("id = ?", ID).Find(&userPetani).Error
	if err != nil {
		return userPetani, err
	}

	return userPetani, nil
}

func (r *repository) RFindPetaniByEmail(email string) (entity.Petani, error) {
	var userPetani entity.Petani

	err := r.db.Where("email = ?", email).Find(&userPetani).Error
	if err != nil {
		return userPetani, err
	}

	return userPetani, nil
}

func (r *repository) RDeletePetaniByID(ID string) (string, error) {
	if err := r.db.Where("id = ?", ID).Delete(&entity.Petani{}).Error; err != nil {
		return "error", err
	}

	return "success", nil
}

func (r *repository) RUpdatePetaniByID(ID string, dataUpdate map[string]interface{}) (entity.Petani, error) {

	var userPetani entity.Petani

	if err := r.db.Model(&userPetani).Where("id = ?", ID).Updates(dataUpdate).Error; err != nil {
		return userPetani, err
	}

	if err := r.db.Where("id = ?", ID).Find(&userPetani).Error; err != nil {
		return userPetani, err
	}

	return userPetani, nil
}
