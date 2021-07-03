package routes

import (
	"backend/handler"
	"backend/layer/hasilPengajuan"

	"github.com/gin-gonic/gin"
)

var (
	hasilPengajuanRepository = hasilPengajuan.NewRepository(DB)
	hasilPengajuanService    = hasilPengajuan.NewService(hasilPengajuanRepository)
	hasilPengajuanHandler    = handler.NewHasilPengajuanHandler(hasilPengajuanService, authService)
)

func HasilPengajuanRoute(r *gin.Engine) {
	r.GET("hasil-pengajuan", handler.Middleware(petaniService, adminService, authService), hasilPengajuanHandler.ShowAllHasilPengajuanHandler)           // admin dan petani
	r.GET("hasil-pengajuan/:id", handler.Middleware(petaniService, adminService, authService), hasilPengajuanHandler.GetHasilPengajuanByIDHandler)       // admin dan petani
	r.POST("hasil-pengajuan", handler.Middleware(petaniService, adminService, authService), hasilPengajuanHandler.CreateHasilPengajuanHandler)           // admin
	r.PUT("hasil-pengajuan/:id", handler.Middleware(petaniService, adminService, authService), hasilPengajuanHandler.UpdateHasilPengajuanByIDHandler)    // admin
	r.DELETE("hasil-pengajuan/:id", handler.Middleware(petaniService, adminService, authService), hasilPengajuanHandler.DeleteHasilPengajuanByIDHandler) // admin
}
