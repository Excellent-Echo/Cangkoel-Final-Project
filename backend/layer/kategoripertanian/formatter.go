package kategoripertanian

import (
	"backend/entity"
	"time"
)

type KPetaniFormat struct {
	ID           int                `gorm:"PrimaryKey" json:"id"`
	NamaKategori string             `json:"nama_kategori"`
	FotoKategori string             `json:"foto_kategori"`
	Pendanaan    []entity.Pendanaan `gorm:"ForeignKey:KategoriID"`
}

type KPetaniDeleteFormat struct {
	Message    string    `json:"message"`
	TimeDelete time.Time `json:"time_delete"`
}

func Format(Kpetani entity.KategoriPertanian) KPetaniFormat {
	var formatKPetani = KPetaniFormat{
		ID:           Kpetani.ID,
		NamaKategori: Kpetani.NamaKategori,
		FotoKategori: Kpetani.FotoKategori,
		Pendanaan:    Kpetani.Pendanaan,
	}

	return formatKPetani
}

func FormatDelete(msg string) KPetaniDeleteFormat {
	var deleteFormat = KPetaniDeleteFormat{
		Message:    msg,
		TimeDelete: time.Now(),
	}

	return deleteFormat
}
