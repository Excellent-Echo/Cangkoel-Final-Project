package entity

import "time"

type FormPengajuan struct {
	ID               int            `gorm:"PrimaryKey" json:"id"`
	NamaLengkap      string         `json:"nama_lengkap"`
	NomorHP          int            `json:"nomor_hp"`
	JenisKelamin     string         `json:"jenis_kelamin"`
	DokumenPerizinan string         `json:"dokumen_perizinan"`
	NomorNPWP        int            `json:"nomor_npwp"`
	Ktp              string         `json:"ktp"`
	JenisUsaha       string         `json:"jenis_usaha"`
	TenagaKerja      string         `json:"tenaga_kerja"`
	OmzetPerbulan    int            `json:"omzet_perbulan"`
	AlamatUsaha      string         `json:"alamat_usaha"`
	CreatedAt        time.Time      `json:"created_at"`
	UpdatedAt        time.Time      `json:"updated_at"`
	HasilPengajuan   HasilPengajuan `gorm:"ForeignKey:PengajuanID"`
	PetaniID         int            `json:"petani_id"`
	PendanaanID      int            `json:"pendanaan_id"`
}

type FormPengajuanInput struct {
	NamaLengkap      string `json:"nama_lengkap" binding:"required"`
	NomorHP          int    `json:"nomor_hp" binding:"required"`
	JenisKelamin     string `json:"jenis_kelamin" binding:"required"`
	DokumenPerizinan string `json:"dokumen_perizinan" binding:"required"`
	NomorNPWP        int    `json:"nomor_npwp" binding:"required"`
	Ktp              string `json:"ktp" binding:"required"`
	JenisUsaha       string `json:"jenis_usaha" binding:"required"`
	TenagaKerja      string `json:"tenaga_kerja" binding:"required"`
	OmzetPerbulan    int    `json:"omzet_perbulan" binding:"required"`
	AlamatUsaha      string `json:"alamat_usaha" binding:"required"`
}
