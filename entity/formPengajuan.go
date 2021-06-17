package entity

import "time"

type FormPengajuan struct {
	ID               int       `gorm:"PrimaryKey" json:"id"`
	NamaLengkap      string    `json:"nama_lengkap"`
	NomorHP          int       `json:"nomor_hp"`
	JenisKelamin     string    `json:"jenis_kelamin"`
	DokumenPerizinan string    `json:"dokumen_perizinan"`
	NomorNPWP        string    `json:"nomor_npwp"`
	Ktp              string    `json:"ktp"`
	JenisUsaha       string    `json:"jenis_usaha"`
	TenagaKerja      string    `json:"tenaga_kerja"`
	OmzetPerbulan    string    `json:"omzet_perbulan"`
	AlamatUsaha      string    `json:"alamat_usaha"`
	CreatedAt        time.Time `json:"created_at"`
	UpdatedAt        time.Time `json:"updated_at"`
}
