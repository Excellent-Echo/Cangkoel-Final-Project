package admin

import (
	"backend/entity"

	"gorm.io/gorm"
)

type Repository interface {
	RShowAllAdmin() ([]entity.Admin, error)
	RRegisterAdmin(admin entity.Admin) (entity.Admin, error)
	RFindAdminByID(ID string) (entity.Admin, error)
	RDeleteAdminByID(ID string) (string, error)
	RUpdateAdminByID(ID string, dataUpdate map[string]interface{}) (entity.Admin, error)
	RFindAdminByEmail(email string) (entity.Admin, error)
}

type repository struct {
	db *gorm.DB
}

func NewRepository(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) RShowAllAdmin() ([]entity.Admin, error) {
	var admin []entity.Admin

	err := r.db.Find(&admin).Error
	if err != nil {
		return admin, err
	}

	return admin, nil
}

func (r *repository) RRegisterAdmin(admin entity.Admin) (entity.Admin, error) {

	err := r.db.Create(&admin).Error
	if err != nil {
		return admin, err
	}

	return admin, nil
}

func (r *repository) RFindAdminByID(ID string) (entity.Admin, error) {
	var admin entity.Admin

	err := r.db.Where("id = ?", ID).Find(&admin).Error
	if err != nil {
		return admin, err
	}

	return admin, nil
}

func (r *repository) RFindAdminByEmail(email string) (entity.Admin, error) {
	var admin entity.Admin

	err := r.db.Where("email = ?", email).Find(&admin).Error
	if err != nil {
		return admin, err
	}

	return admin, nil
}

func (r *repository) RDeleteAdminByID(ID string) (string, error) {
	if err := r.db.Where("id = ?", ID).Delete(&entity.Admin{}).Error; err != nil {
		return "error", err
	}

	return "success", nil
}

func (r *repository) RUpdateAdminByID(ID string, dataUpdate map[string]interface{}) (entity.Admin, error) {

	var admin entity.Admin

	if err := r.db.Model(&admin).Where("id = ?", ID).Updates(dataUpdate).Error; err != nil {
		return admin, err
	}

	if err := r.db.Where("id = ?", ID).Find(&admin).Error; err != nil {
		return admin, err
	}

	return admin, nil
}
