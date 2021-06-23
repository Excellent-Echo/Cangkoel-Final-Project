package entity

import "time"

type Pendanaan struct {
	ID                     int               `gorm:"PrimaryKey" json:"id"`
	FotoProfil             string            `json:"foto_profil"`
	NamaInvestor           string            `json:"nama_investor"`
	JudulPendanaan         string            `json:"judul_pendanaan"`
	NominalPendanaan       int               `json:"nominal_pendanaan"`
	PerusahaanPengirim     string            `json:"perusahaan_pengirim"`
	BagiHasilInvestor      int               `json:"bagihasil_investor"`
	BagiHasilPetani        int               `json:"bagihasil_petani"`
	KebutuhanKomoditas     string            `json:"kebutuhan_komoditas"`
	JangkaWaktu            string            `json:"jangka_waktu"`
	KeuntunganBersih       int               `json:"keuntungan_bersih"`
	Deskripsi              string            `json:"deskripsi"`
	BiayaOperasional       string            `json:"biaya_operasional"`
	BiayaEkspor            string            `json:"biaya_ekspor"`
	PerhitunganPenghasilan string            `json:"perhitungan_penghasilan"`
	PerhitunganKeuntungan  string            `json:"perhitungan keuntungan"`
	CreatedAt              time.Time         `json:"created_at"`
	UpdatedAt              time.Time         `json:"updated_at"`
	//KategoriPertanian      KategoriPertanian `gorm:"ForeignKey:PendanaanID"`
	FormPengajuan          []FormPengajuan   `gorm:"ForeignKey:PendanaanID"`
	InvestorID             int               `json:"investor_id"`
	KategoriID             int               `json:"kategori_id"`
}

type PendanaanInput struct {
	// FotoProfil             string            `json:"foto_profil"`
	NamaInvestor           string `json:"nama_investor" binding:"required"`
	JudulPendanaan         string `json:"judul_pendanaan" binding:"required"`
	NominalPendanaan       int    `json:"nominal_pendanaan" binding:"required"`
	PerusahaanPengirim     string `json:"perusahaan_pengirim" binding:"required"`
	BagiHasilInvestor      int    `json:"bagihasil_investor" binding:"required"`
	BagiHasilPetani        int    `json:"bagihasil_petani" binding:"required"`
	KebutuhanKomoditas     string `json:"kebutuhan_komoditas" binding:"required"`
	JangkaWaktu            string `json:"jangka_waktu" binding:"required"`
	KeuntunganBersih       int    `json:"keuntungan_bersih" binding:"required"`
	Deskripsi              string `json:"deskripsi" binding:"required"`
	BiayaOperasional       string `json:"biaya_operasional" binding:"required"`
	BiayaEkspor            string `json:"biaya_ekspor" binding:"required"`
	PerhitunganPenghasilan string `json:"perhitungan_penghasilan" binding:"required"`
	PerhitunganKeuntungan  string `json:"perhitungan keuntungan" binding:"required"`
}
