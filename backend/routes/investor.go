package routes

import (
	"backend/handler"
	"backend/layer/admin"

	"github.com/gin-gonic/gin"
)

var (
	adminService    = admin.NewService(adminRepository)
	adminRepository = admin.NewRepository(DB)
	adminHandler    = handler.NewAdminHandler(adminService, authService)
)

func AdminRoute(r *gin.Engine) {
	r.GET("users/admin", handler.MiddlewareAdmin(adminService, authService), adminHandler.ShowAllAdminHandler)
	// r.POST("users/investor/register", investorHandler.RegisterInvestorHandler)
	// r.POST("users/investor/login", investorHandler.LoginInvestorHandler)
	r.GET("users/admin/:id", handler.MiddlewareAdmin(adminService, authService), adminHandler.GetAdminByIDHandler)
	r.PUT("users/admin/:id", handler.MiddlewareAdmin(adminService, authService), adminHandler.UpdateAdminByIDHandler)
	r.DELETE("users/admin/:id", handler.MiddlewareAdmin(adminService, authService), adminHandler.DeleteAdminByIDHandler)
}
