package routes

import (
	"backend/auth"
	"backend/config"
	"backend/handler"
	"backend/layer/admin"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

var (
	DB              *gorm.DB = config.Connection()
	authService              = auth.NewService()
	adminService             = admin.NewService(adminRepository)
	adminRepository          = admin.NewRepository(DB)
	adminHandler             = handler.NewAdminHandler(adminService, authService)
)

func AdminRoute(r *gin.Engine) {
	r.POST("admin/register", adminHandler.RegisterAdminHandler)
	r.POST("admin/login", adminHandler.LoginAdminHandler)
	r.GET("admin", handler.MiddlewareAdmin(adminService, authService), adminHandler.ShowAllAdminHandler)
	r.GET("admin/:id", handler.MiddlewareAdmin(adminService, authService), adminHandler.GetAdminByIDHandler)
	r.PUT("admin/:id", handler.MiddlewareAdmin(adminService, authService), adminHandler.UpdateAdminByIDHandler)
	r.DELETE("uadmin/:id", handler.MiddlewareAdmin(adminService, authService), adminHandler.DeleteAdminByIDHandler)
}
