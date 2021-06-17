package migration

import "time"

type Petani struct {
	ID             int `gorm:"PrimaryKey"`
	FullName       string
	Email          string `gorm:"unique"`
	Password       string
	CreatedAt      time.Time
	UpdatedAt      time.Time
	FormPengajuan  FormPengajuan  `gorm:"ForeignKey:PetaniID"`
	HasilPengajuan HasilPengajuan `gorm:"ForeignKey:PetaniID"`
}

type Investor struct {
	ID        int `gorm:"PrimaryKey"`
	FullName  string
	Email     string `gorm:"unique"`
	Password  string
	CreatedAt time.Time
	UpdatedAt time.Time
	Pendanaan Pendanaan `gorm:"Foreignkey:InvestorID"`
}

type KategoriPertanian struct {
	ID           int `gorm:"PrimaryKey"`
	PendanaanID  int
	NamaKategori string
	FotoKategori string
}

type FormPengajuan struct {
	ID               int `gorm:"PrimaryKey"`
	PetaniID         int
	NamaLengkap      string
	NomorHP          int
	JenisKelamin     string
	DokumenPerizinan string
	NomorNPWP        string
	Ktp              string
	JenisUsaha       string
	TenagaKerja      string
	OmzetPerbulan    string
	AlamatUsaha      string
	CreatedAt        time.Time
	UpdatedAt        time.Time
}

type HasilPengajuan struct {
	ID         int `gorm:"PrimaryKey"`
	PetaniID   int
	Status     string
	Keterangan string
	CreatedAt  time.Time
	UpdatedAt  time.Time
}

type Pendanaan struct {
	ID                     int `gorm:"PrimaryKey"`
	InvestorID             int
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
}
