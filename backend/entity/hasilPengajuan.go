package entity

import "time"

type HasilPengajuan struct {
	ID              int       `gorm:"PrimaryKey" json:"id"`
	Status          string    `json:"status"`
	Keterangan      string    `json:"keterangan"`
	CreatedAt       time.Time `json:"created_at"`
	UpdatedAt       time.Time `json:"updated_at"`
	PetaniID        string    `json:"petani_id"`
	FormPengajuanID int       `json:"form_pengajuan_id"`
}

type HasilPengajuanInput struct {
	Status          string `json:"status" binding:"required"`
	Keterangan      string `json:"keterangan" binding:"required"`
	PetaniID        string `json:"petani_id" binding:"required"`
	FormPengajuanID int    `json:"form_pengajuan_id" binding:"required"`
}

type UpdateHasilPengajuanInput struct {
	Status          string `json:"status"`
	Keterangan      string `json:"keterangan"`
	PetaniID        string `json:"petani_id"`
	FormPengajuanID int    `json:"form_pengajuan_id"`
}
