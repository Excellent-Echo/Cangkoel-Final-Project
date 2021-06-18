package kategoripertanian

import (
	"Cangkoel-Final-Project/entity"
	"backend/entity"

	"gorm.io/gorm"
)

type Repository interface {
	FindAll() ([]entity.KategoriPertanian, error)
	Create(k_petani entity.KategoriPertanian) (entity.k_petani, error)
	FindByID(ID string) (entity.KategoriPertanian, error)
	DeleteByID(ID string) (string, error)
	UpdateByID(ID string, dataUpdate map[string]interface{}) (entity.KategoriPertanian, error)
	FindByEmail(email string) (entity.KategoriPertanian, error)
}

type repository struct {
	db *gorm.DB
}

func NewRepository(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) FindAll() ([]entity.KategoriPertanian, error) {
	var k_petani []entity.users
	if err := r.db.Find(&user).Error; err != nil {
		return k_petani, err
	}

	return k_petani, nil
}

func (r *repository) Create(k_petani entity.KategoriPertanian) (entity.k_petani, error) {
	var k_petani []entity.KategoriPertanian

	if err := r.db.Find(&k_petani).Error; err != nil {
		return k_petani, err
	}

	return k_petani, nil
}
