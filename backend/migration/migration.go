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
	FormPengajuan  FormPengajuan
	HasilPengajuan HasilPengajuan `gorm:"ForeignKey:PetaniID"`
}

type Investor struct {
	ID             int `gorm:"PrimaryKey"`
	FullName       string
	Email          string `gorm:"unique"`
	Password       string
	Role           string
	CreatedAt      time.Time
	UpdatedAt      time.Time
	Pendanaan      Pendanaan      `gorm:"Foreignkey:InvestorID"`
	HasilPengajuan HasilPengajuan `gorm:"ForeignKey:InvestorID"`
}

type KategoriPertanian struct {
	ID           int `gorm:"PrimaryKey"`
	NamaKategori string
	FotoKategori string
	Pendanaan    []Pendanaan
	PendanaanID  int
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
	PendanaanID      int
}

type HasilPengajuan struct {
	ID          int `gorm:"PrimaryKey"`
	Status      string
	Keterangan  string
	CreatedAt   time.Time
	UpdatedAt   time.Time
	PetaniID    int
	InvestorID  int
	PengajuanID int
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
	KategoriPertanian      KategoriPertanian `gorm:"ForeignKey:PendanaanID"`
	FormPengajuan          []FormPengajuan   `gorm:"ForeignKey:PendanaanID"`
	InvestorID             uint
	KategoriID             uint
}
