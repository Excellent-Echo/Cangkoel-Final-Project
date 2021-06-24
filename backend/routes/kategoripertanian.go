package routes

import (
	"backend/handler"
	"backend/layer/kategoriPertanian"

	"github.com/gin-gonic/gin"
)

var (
	kategoriPertanianService    = kategoriPertanian.NewService(kategoriPertanianRepository)
	kategoriPertanianRepository = kategoriPertanian.NewRepository(DB)
	kategoriHandler             = handler.NewKPetaniHandler(kategoriPertanianService, authService)
)

func KategoriPertanianRoute(r *gin.Engine) {
	r.GET("/kategori-pertanian", kategoriHandler.ShowAllKPetaniHandler)
	r.POST("/kategori-pertanian", kategoriHandler.CreateKategoriPertanian) // kasih admin middleware
	r.GET("/kategori-pertanian/:id", kategoriHandler.GetKPetaniByIDHandler)
	r.PUT("/kategori-pertanian/:id", kategoriHandler.UpdateKPetaniByIDHandler)    // kasih admin middleware
	r.DELETE("/kategori-pertanian/:id", kategoriHandler.DeleteKPetaniByIDHandler) // kasih admin middleware
}
