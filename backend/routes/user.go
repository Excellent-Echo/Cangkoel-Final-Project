package routes

import (
	"backend/auth"
	"backend/config"
	"backend/handler"
	"backend/layer/investor"
	"backend/layer/petani"
	"backend/layer/user"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

var (
	DB           *gorm.DB = config.Connection()
	authService           = auth.NewService()
	userService           = user.NewService(petaniRepo, investorRepo)
	petaniRepo            = petani.NewRepository(DB)
	investorRepo          = investor.NewRepository(DB)
	userHandler           = handler.NewUserHandler(userService, authService)
	// petaniService    = petani.NewService(petaniRepository)
	// petaniRepository = petani.NewRepository(DB)
	// petaniHandler    = handler.NewPetaniHandler(petaniService, authService)
)

func UserRoute(r *gin.Engine) {
	r.POST("users/petani/register", petaniHandler.RegisterPetaniHandler)
	r.POST("users/investor/register", investorHandler.RegisterInvestorHandler)
	r.POST("users/login", userHandler.LoginUserHandler)
}
