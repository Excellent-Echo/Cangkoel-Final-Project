package routes

import (
	"backend/handler"
	"backend/layer/pendanaan"

	"github.com/gin-gonic/gin"
)

var (
	pendanaanRepository = pendanaan.NewRepository(DB)
	pendanaanService    = pendanaan.NewService(pendanaanRepository, kategoriPertanianRepository)
	pendanaanHandler    = handler.NewPendanaanHandler(pendanaanService, authService)
)

func PendanaanRoute(r *gin.Engine) {
	r.GET("pendanaan", pendanaanHandler.ShowAllPendanaanHandler)
	// r.GET("pendanaan/:kategori-pertanian", pendanaanHandler.GetPendanaanByKategoriIDHandler)
	r.POST("pendanaan/add", pendanaanHandler.CreatePendanaanHandler) // kasih middleware admin
	r.GET("pendanaan/:id", pendanaanHandler.GetPendanaanByIDHandler)
}
