package routes

import (
	"backend/handler"
	"backend/layer/petani"

	"github.com/gin-gonic/gin"
)

var (
	petaniService    = petani.NewService(petaniRepository)
	petaniRepository = petani.NewRepository(DB)
	petaniHandler    = handler.NewPetaniHandler(petaniService, authService)
)

func PetaniRoute(r *gin.Engine) {
	r.GET("users/petani", handler.Middleware(petaniService, authService), petaniHandler.ShowAllPetaniHandler)
	// r.POST("users/petani/register", petaniHandler.RegisterPetaniHandler)
	// r.POST("users/petani/login", petaniHandler.LoginPetaniHandler)
	r.GET("users/petani/:id", handler.Middleware(petaniService, authService), petaniHandler.GetPetaniByIDHandler)
	r.PUT("users/petani/:id", handler.Middleware(petaniService, authService), petaniHandler.UpdatePetaniByIDHandler)
	r.DELETE("users/petani/:id", handler.Middleware(petaniService, authService), petaniHandler.DeletePetaniByIDHandler)
}
