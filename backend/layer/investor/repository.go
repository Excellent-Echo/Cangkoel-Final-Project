package investor

import (
	"backend/entity"

	"gorm.io/gorm"
)

type Repository interface {
	RShowAllInvestor() ([]entity.Investor, error)
	RRegisterInvestor(investor entity.Investor) (entity.Investor, error)
	RFindInvestorByID(ID string) (entity.Investor, error)
	RDeleteInvestorByID(ID string) (string, error)
	RUpdateInvestorByID(ID string, dataUpdate map[string]interface{}) (entity.Investor, error)
	RFindInvestorByEmail(email string) (entity.Investor, error)
}

type repository struct {
	db *gorm.DB
}

func NewRepository(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) RShowAllInvestor() ([]entity.Investor, error) {
	var userInvestor []entity.Investor

	err := r.db.Find(&userInvestor).Error
	if err != nil {
		return userInvestor, err
	}

	return userInvestor, nil
}

func (r *repository) RRegisterInvestor(userInvestor entity.Investor) (entity.Investor, error) {

	err := r.db.Create(&userInvestor).Error
	if err != nil {
		return userInvestor, err
	}

	return userInvestor, nil
}

func (r *repository) RFindInvestorByID(ID string) (entity.Investor, error) {
	var userInvestor entity.Investor

	err := r.db.Where("id = ?", ID).Find(&userInvestor).Error
	if err != nil {
		return userInvestor, err
	}

	return userInvestor, nil
}

func (r *repository) RFindInvestorByEmail(email string) (entity.Investor, error) {
	var userInvestor entity.Investor

	err := r.db.Where("email = ?", email).Find(&userInvestor).Error
	if err != nil {
		return userInvestor, err
	}

	return userInvestor, nil
}

func (r *repository) RDeleteInvestorByID(ID string) (string, error) {
	if err := r.db.Where("id = ?", ID).Delete(&entity.Investor{}).Error; err != nil {
		return "error", err
	}

	return "success", nil
}

func (r *repository) RUpdateInvestorByID(ID string, dataUpdate map[string]interface{}) (entity.Investor, error) {

	var userInvestor entity.Investor

	if err := r.db.Model(&userInvestor).Where("id = ?", ID).Updates(dataUpdate).Error; err != nil {
		return userInvestor, err
	}

	if err := r.db.Where("id = ?", ID).Find(&userInvestor).Error; err != nil {
		return userInvestor, err
	}

	return userInvestor, nil
}
