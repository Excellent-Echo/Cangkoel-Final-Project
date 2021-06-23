package entity

type KategoriPertanian struct {
	ID           int    `gorm:"PrimaryKey" json:"id"`
	NamaKategori string `json:"nama_kategori"`
	FotoKategori string `json:"foto_kategori"`
}

type KategoriPertanianInput struct {
	NamaKategori string `json:"nama_kategori" binding:"required"`
	FotoKategori string `json:"foto_kategori" binding:"required"`
}

type UpdateKategoriPertanianInput struct {
	NamaKategori string `json:"nama_kategori"`
	FotoKategori string `json:"foto_kategori"`
}
