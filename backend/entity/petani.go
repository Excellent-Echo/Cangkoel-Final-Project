package entity

import "time"

type Petani struct {
	ID            int           `gorm:"primaryKey" json:"id"`
	FullName      string        `json:"full_name"`
	Email         string        `json:"email"`
	Password      string        `json:"-"`
	Role          string        `json:"role"`
	CreatedAt     time.Time     `json:"created_at"`
	UpdatedAt     time.Time     `json:"updated_at"`
	FormPengajuan FormPengajuan `gorm:"ForeignKey:PetaniID"`
}

type PetaniInput struct {
	FullName string `json:"full_name" binding:"required"`
	Email    string `json:"email" binding:"required"`
	Password string `json:"password" binding:"required"`
}

type UpdatePetaniInput struct {
	FullName string `json:"full_name"`
	Email    string `json:"email"`
	Password string `json:"password"`
}
