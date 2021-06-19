package entity

import "time"

type Pendanaan struct {
	ID                     int       `gorm:"PrimaryKey" json:"id"`
	FotoProfil             string    `json:"foto_profil"`
	NamaInvestor           string    `json:"nama_investor"`
	JudulPendanaan         string    `json:"judul_pendanaan"`
	NominalPendanaan       string    `json:"nominal_pendanaan"`
	PerusahaanPengirim     string    `json:"perusahaan_pengirim"`
	BagiHasilInvestor      string    `json:"bagihasil_investor"`
	BagiHasilPetani        string    `json:"bagihasil_petani"`
	KebutuhanKomoditas     string    `json:"kebutuhan_komoditas"`
	JangkaWaktu            string    `json:"jangka_waktu"`
	KeuntunganBersih       string    `json:"keuntungan_bersih"`
	Deskripsi              string    `json:"deskripsi"`
	BiayaOperasional       string    `json:"biaya_operasional"`
	BiayaEkspor            string    `json:"biaya_ekspor"`
	PerhitunganPenghasilan string    `json:"perhitungan_penghasilan"`
	PerhitunganKeuntungan  string    `json:"perhitungan keuntungan"`
	CreatedAt              time.Time `json:"created_at"`
	UpdatedAt              time.Time `json:"updated_at"`
	InvestorID             int       `json:"investor_id"`
}
