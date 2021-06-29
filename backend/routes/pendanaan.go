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
	r.POST("pendanaan", handler.Middleware(petaniService, adminService, authService), pendanaanHandler.CreatePendanaanHandler) // admin
	r.GET("pendanaan/:id", pendanaanHandler.GetPendanaanByIDHandler)
	r.PUT("pendanaan/:id", handler.Middleware(petaniService, adminService, authService), pendanaanHandler.UpdatePendanaanByIDHandler)    // admin
	r.DELETE("pendanaan/:id", handler.Middleware(petaniService, adminService, authService), pendanaanHandler.DeletePendanaanByIDHandler) // admin
}
