package entity

import "time"

type HasilPengajuan struct {
	ID          int       `gorm:"PrimaryKey" json:"id"`
	Status      string    `json:"status"`
	Keterangan  string    `json:"keterangan"`
	CreatedAt   time.Time `json:"created_at"`
	UpdatedAt   time.Time `json:"updated_at"`
	PetaniID    int       `json:"petani_id"`
	InvestorID  int       `json:"investor_id"`
	PengajuanID int       `json:"pengajuan_id"`
}

type HasilPengajuanInput struct {
	Status      string `json:"status" binding:"required"`
	Keterangan  string `json:"keterangan" binding:"required"`
	PetaniID    int    `json:"petani_id" binding:"required"`
	InvestorID  int    `json:"investor_id" binding:"required"`
	PengajuanID int    `json:"pengajuan_id" binding:"required"`
}

type UpdateHasilPengajuanInput struct {
	Status      string `json:"status"`
	Keterangan  string `json:"keterangan"`
	PetaniID    int    `json:"petani_id"`
	InvestorID  int    `json:"investor_id"`
	PengajuanID int    `json:"pengajuan_id"`
}
