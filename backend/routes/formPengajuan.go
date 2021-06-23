package routes

import (
	"backend/handler"
	"backend/layer/formPengajuan"

	"github.com/gin-gonic/gin"
)

var (
	formPengajuanRepository = formPengajuan.NewRepository(DB)
	formPengajuanService    = formPengajuan.NewService(formPengajuanRepository, pendanaanRepository)
	formPengajuanHandler    = handler.NewFormPengajuanHandler(formPengajuanService, authService)
)

func FormPengajuanRoute(r *gin.Engine) {
	r.GET("formulir-pengajuan", handler.Middleware(petaniService, authService), formPengajuanHandler.ShowAllFormPengajuanHandler)
	r.GET("formulir-pengajuan/:id", handler.Middleware(petaniService, authService), formPengajuanHandler.GetFormPengajuanByIDHandler)
	r.POST("formulir-pengajuan", handler.Middleware(petaniService, authService), formPengajuanHandler.CreateFormPengajuanHandler)
}
