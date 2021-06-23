package routes

import (
	"backend/handler"
	"backend/layer/kategoripertanian"
	"github.com/gin-gonic/gin"
)

var (
	kategoriPertanianService = kategoripertanian.NewService(kategoriPertanianRepository)
	kategoriPertanianRepository = kategoripertanian.NewRepository(DB)
	kategoriHandler = handler.NewKPetaniHandler(kategoriPertanianService, authService)
)

func KategoriPertanianRoute(r *gin.Engine)  {
	r.GET("/kategori-pertanian", kategoriHandler.ShowAllKPetaniHandler)
	r.POST("/kategori-pertanian", kategoriHandler.CreateKategoriPertanian)
	r.GET("/kategori-pertanian/:id", kategoriHandler.GetKPetaniByIDHandler)
	r.PUT("/kategori-pertanian/:id", kategoriHandler.UpdateKPetaniByIDHandler)
	r.DELETE("/kategori-pertanian/:id", kategoriHandler.DeleteKPetaniByIDHandler)
}