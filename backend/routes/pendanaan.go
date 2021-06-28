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
	r.POST("pendanaan", handler.MiddlewareAdmin(adminService, authService), pendanaanHandler.CreatePendanaanHandler)
	r.GET("pendanaan/:id", pendanaanHandler.GetPendanaanByIDHandler)
	r.PUT("pendanaan/:id", handler.MiddlewareAdmin(adminService, authService), pendanaanHandler.UpdatePendanaanByIDHandler) // kasih admin middleware
	r.DELETE("pendanaan/:id", handler.MiddlewareAdmin(adminService, authService), pendanaanHandler.DeletePendanaanByIDHandler)
}
