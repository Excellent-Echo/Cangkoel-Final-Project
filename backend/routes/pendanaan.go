package routes

import (
	"backend/handler"
	"backend/layer/pendanaan"

	"github.com/gin-gonic/gin"
)

var (
	pendanaanRepository = pendanaan.NewRepository(DB)
	pendanaanService    = pendanaan.NewService(pendanaanRepository)
	pendanaanHandler    = handler.NewPendanaanHandler(pendanaanService, authService)
)

func PendanaanRoute(r *gin.Engine) {
	r.GET("pendanaan", handler.MiddlewareInvestor(investorService, authService), pendanaanHandler.ShowAllPendanaanHandler)
	r.GET("pendanaan/:kategori-pertanian", handler.MiddlewareInvestor(investorService, authService), pendanaanHandler.GetPendanaanByKategoriIDHandler)
	r.POST("pendanaan/add", handler.MiddlewareInvestor(investorService, authService), pendanaanHandler.CreatePendanaanHandler)
}
