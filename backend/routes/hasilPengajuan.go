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
	r.GET("hasil-pengajuan", handler.MiddlewareAdmin(adminService, authService), hasilPengajuanHandler.ShowAllHasilPengajuanHandler)
	r.GET("hasil-pengajuan/:id", handler.MiddlewareAdmin(adminService, authService), hasilPengajuanHandler.GetHasilPengajuanByIDHandler)
	r.POST("hasil-pengajuan", handler.MiddlewareAdmin(adminService, authService), hasilPengajuanHandler.CreateHasilPengajuanHandler)
	r.PUT("hasil-pengajuan/:id", handler.MiddlewareAdmin(adminService, authService), hasilPengajuanHandler.UpdateHasilPengajuanByIDHandler)
}
