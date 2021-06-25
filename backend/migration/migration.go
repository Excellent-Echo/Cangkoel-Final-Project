package migration

import "time"

type Petani struct {
	ID             string `gorm:"PrimaryKey"`
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
	ID        string `gorm:"PrimaryKey"`
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
	Pendanaan    []Pendanaan `gorm:"ForeignKey:KategoriID"`
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
	HasilPengajuan   HasilPengajuan `gorm:"ForeignKey:FormPengajuanID"`
	PetaniID         int            //petani ID tidak bisa string, kalo int bisa kebikin migrationnya?
	PendanaanID      int
}

type HasilPengajuan struct {
	ID              int `gorm:"PrimaryKey"`
	Status          string
	Keterangan      string
	CreatedAt       time.Time
	UpdatedAt       time.Time
	PetaniID        int //petani ID tidak bisa string, kalo int bisa kebikin migrationnya?
	FormPengajuanID int
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
	FormPengajuan          []FormPengajuan `gorm:"ForeignKey:PendanaanID"`
	KategoriID             int
	// KategoriPertanian      KategoriPertanian `gorm:"ForeignKey:PendanaanID"`
}
