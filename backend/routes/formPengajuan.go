package routes

import (
	"backend/handler"
	"backend/layer/formPengajuan"

	"github.com/gin-gonic/gin"
)

var (
	formPengajuanRepository = formPengajuan.NewRepository(DB)
	formPengajuanService    = formPengajuan.NewService(formPengajuanRepository)
	formPengajuanHandler    = handler.NewFormPengajuanHandler(formPengajuanService, authService)
)

func FormPengajuanRoute(r *gin.Engine) {
	r.GET("formulir-pengajuan", handler.Middleware(petaniService, adminService, authService), formPengajuanHandler.ShowAllFormPengajuanHandler)     // admin dan petani
	r.GET("formulir-pengajuan/:id", handler.Middleware(petaniService, adminService, authService), formPengajuanHandler.GetFormPengajuanByIDHandler) // admin dan petani
	r.POST("formulir-pengajuan", handler.Middleware(petaniService, adminService, authService), formPengajuanHandler.CreateFormPengajuanHandler)     // admin
}
