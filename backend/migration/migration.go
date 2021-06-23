package migration

import "time"

type Petani struct {
	ID             int `gorm:"PrimaryKey"`
	FullName       string
	Email          string `gorm:"unique"`
	Password       string
	Role           string
	CreatedAt      time.Time
	UpdatedAt      time.Time
	FormPengajuan  FormPengajuan  `gorm:"ForeignKey:PetaniID"`
	HasilPengajuan HasilPengajuan `gorm:"ForeignKey:PetaniID"`
}

type Admin struct {
	ID        int `gorm:"PrimaryKey"`
	FullName  string
	Email     string `gorm:"unique"`
	Password  string
	Role      string
	CreatedAt time.Time
	UpdatedAt time.Time
}

type KategoriPertanian struct {
	ID           int `gorm:"PrimaryKey"`
	NamaKategori string
	FotoKategori string
}

type FormPengajuan struct {
	ID               int `gorm:"PrimaryKey"`
	NamaLengkap      string
	NomorHP          int
	JenisKelamin     string
	DokumenPerizinan string
	NomorNPWP        int
	Ktp              string
	JenisUsaha       string
	TenagaKerja      int
	OmzetPerbulan    int
	AlamatUsaha      string
	CreatedAt        time.Time
	UpdatedAt        time.Time
	HasilPengajuan   HasilPengajuan `gorm:"ForeignKey:PengajuanID"`
	PetaniID         uint
	PendanaanID      uint
}

type HasilPengajuan struct {
	ID          int `gorm:"PrimaryKey"`
	Status      string
	Keterangan  string
	CreatedAt   time.Time
	UpdatedAt   time.Time
	PetaniID    uint
	PengajuanID uint
}

type Pendanaan struct {
	ID                     int `gorm:"PrimaryKey"`
	FotoProfil             string
	NamaInvestor           string
	JudulPendanaan         string
	NominalPendanaan       int
	PerusahaanPengirim     string
	BagiHasilInvestor      int
	BagiHasilPetani        int
	KebutuhanKomoditas     string
	JangkaWaktu            string
	KeuntunganBersih       int
	Deskripsi              string
	BiayaOperasional       string
	BiayaEkspor            string
	PerhitunganPenghasilan string
	PerhitunganKeuntungan  string
	CreatedAt              time.Time
	UpdatedAt              time.Time
	// KategoriPertanian      KategoriPertanian `gorm:"ForeignKey:PendanaanID"`
	FormPengajuan []FormPengajuan `gorm:"ForeignKey:PendanaanID"`
	KategoriID    int
}
