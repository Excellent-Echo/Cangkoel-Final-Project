package entity

type KategoriPertanian struct {
	ID           int         `gorm:"PrimaryKey" json:"id"`
	NamaKategori string      `json:"nama_kategori"`
	FotoKategori string      `json:"foto_kategori"`
	Pendanaan    []Pendanaan `gorm:"ForeignKey:KategoriID"`
	PendanaanID  int         `json:"pendanaan_id"`
}
