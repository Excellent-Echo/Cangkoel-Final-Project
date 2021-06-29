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
	r.POST("/kategori-pertanian", handler.Middleware(petaniService, adminService, authService), kategoriHandler.CreateKategoriPertanian) // admin
	r.GET("/kategori-pertanian/:id", kategoriHandler.GetKPetaniByIDHandler)
	r.PUT("/kategori-pertanian/:id", handler.Middleware(petaniService, adminService, authService), kategoriHandler.UpdateKPetaniByIDHandler)    // admin
	r.DELETE("/kategori-pertanian/:id", handler.Middleware(petaniService, adminService, authService), kategoriHandler.DeleteKPetaniByIDHandler) // admin
}
