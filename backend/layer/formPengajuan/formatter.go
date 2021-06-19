package formPengajuan

// import (
// 	"backend/entity"
// 	"time"
// )

// type FormPengajuanFormat struct {
// 	ID               int    `json:"id"`
// 	NamaLengkap      string `json:"nama_lengkap"`
// 	NomorHP          int    `json:"nomor_hp"`
// 	JenisKelamin     string `json:"jenis_kelamin"`
// 	DokumenPerizinan string `json:"dokumen_perizinan"`
// 	NomorNPWP        int    `json:"nomor_npwp"`
// 	Ktp              string `json:"ktp"`
// 	JenisUsaha       string `json:"jenis_usaha"`
// 	TenagaKerja      string `json:"tenaga_kerja"`
// 	OmzetPerbulan    string `json:"omzet_perbulan"`
// 	AlamatUsaha      string `json:"alamat_usaha"`
// 	PetaniID         int    `json:"petani_id"`
// }

// type FormPengajuanDeleteFormat struct {
// 	Message    string    `json:"message"`
// 	TimeDelete time.Time `json:"time_delete"`
// }

// func Format(formpengajuan entity.FormPengajuan) FormPengajuanFormat {
// 	var formatFormPengajuan = FormPengajuanFormat{
// 		ID:               formpengajuan.ID,
// 		NamaLengkap:      formpengajuan.NamaLengkap,
// 		NomorHP:          formpengajuan.NomorHP,
// 		JenisKelamin:     formpengajuan.JenisKelamin,
// 		DokumenPerizinan: formpengajuan.DokumenPerizinan,
// 		NomorNPWP:        formpengajuan.NomorNPWP,
// 		Ktp:              formpengajuan.Ktp,
// 		JenisUsaha:       formpengajuan.JenisUsaha,
// 		TenagaKerja:      formpengajuan.TenagaKerja,
// 		OmzetPerbulan:    formpengajuan.OmzetPerbulan,
// 		AlamatUsaha:      formpengajuan.AlamatUsaha,
// 		PetaniID:         formpengajuan.PetaniID,
// 	}

// 	return formatFormPengajuan
// }

// func FormatDelete(msg string) FormPengajuanDeleteFormat {
// 	var deleteFormat = FormPengajuanDeleteFormat{
// 		Message:    msg,
// 		TimeDelete: time.Now(),
// 	}

// 	return deleteFormat
// }
