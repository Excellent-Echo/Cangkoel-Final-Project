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
	r.POST("/kategori-pertanian", handler.MiddlewareAdmin(adminService, authService), kategoriHandler.CreateKategoriPertanian) // kasih admin middleware
	r.GET("/kategori-pertanian/:id", kategoriHandler.GetKPetaniByIDHandler)
	r.PUT("/kategori-pertanian/:id", handler.MiddlewareAdmin(adminService, authService), kategoriHandler.UpdateKPetaniByIDHandler)    // kasih admin middleware
	r.DELETE("/kategori-pertanian/:id", handler.MiddlewareAdmin(adminService, authService), kategoriHandler.DeleteKPetaniByIDHandler) // kasih admin middleware
}
