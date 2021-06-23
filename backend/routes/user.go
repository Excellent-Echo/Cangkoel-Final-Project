package routes

import (
	"backend/auth"
	"backend/config"
	"backend/handler"
	"backend/layer/admin"
	"backend/layer/petani"
	"backend/layer/user"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

var (
	DB          *gorm.DB = config.Connection()
	authService          = auth.NewService()
	userService          = user.NewService(petaniRepo, adminRepo)
	petaniRepo           = petani.NewRepository(DB)
	adminRepo            = admin.NewRepository(DB)
	userHandler          = handler.NewUserHandler(userService, authService)
	// petaniService    = petani.NewService(petaniRepository)
	// petaniRepository = petani.NewRepository(DB)
	// petaniHandler    = handler.NewPetaniHandler(petaniService, authService)
)

func UserRoute(r *gin.Engine) {
	r.POST("users/petani/register", petaniHandler.RegisterPetaniHandler)
	r.POST("users/admin/register", adminHandler.RegisterAdminHandler)
	r.POST("users/login", userHandler.LoginUserHandler)
}
