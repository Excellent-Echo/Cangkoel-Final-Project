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
	r.GET("hasil-pengajuan", hasilPengajuanHandler.ShowAllHasilPengajuanHandler)
	r.GET("hasil-pengajuan/:id", hasilPengajuanHandler.GetHasilPengajuanByIDHandler)
	r.POST("hasil-pengajuan", hasilPengajuanHandler.CreateHasilPengajuanHandler)
	r.PUT("hasil-pengajuan/:id", hasilPengajuanHandler.UpdateHasilPengajuanByIDHandler)
}
