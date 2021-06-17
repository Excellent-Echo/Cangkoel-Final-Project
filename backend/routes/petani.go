package routes

import (
	"backend/auth"
	"backend/config"
	"backend/handler"
	"backend/layer/petani"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

var (
	DB               *gorm.DB = config.Connection()
	authService               = auth.NewService()
	petaniService             = petani.NewService(petaniRepository)
	petaniRepository          = petani.NewRepository(DB)
	petaniHandler             = handler.NewPetaniHandler(petaniService, authService)
)

func PetaniRoute(r *gin.Engine) {
	r.GET("/petani", handler.Middleware(petaniService, authService), petaniHandler.ShowAllPetaniHandler)
	r.POST("/petani/register", petaniHandler.RegisterPetaniHandler)
	r.POST("/petani/login", petaniHandler.LoginPetaniHandler)
	r.GET("/petani/:petani_id", handler.Middleware(petaniService, authService), petaniHandler.GetPetaniByIDHandler)
	r.PUT("/petani/:petani_id", handler.Middleware(petaniService, authService), petaniHandler.UpdatePetaniByIDHandler)
	r.DELETE("/petani/:petani_id", handler.Middleware(petaniService, authService), petaniHandler.DeletePetaniByIDHandler)
}
