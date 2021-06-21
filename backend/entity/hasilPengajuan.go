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
