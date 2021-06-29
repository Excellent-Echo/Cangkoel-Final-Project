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
	r.POST("users/petani/register", petaniHandler.RegisterPetaniHandler)
	r.POST("users/petani/login", petaniHandler.LoginPetaniHandler)
	r.GET("users/petani", handler.Middleware(petaniService, adminService, authService), petaniHandler.ShowAllPetaniHandler)           // admin dan petani
	r.GET("users/petani/:id", handler.Middleware(petaniService, adminService, authService), petaniHandler.GetPetaniByIDHandler)       // admin dan petani
	r.PUT("users/petani/:id", handler.Middleware(petaniService, adminService, authService), petaniHandler.UpdatePetaniByIDHandler)    // petani
	r.DELETE("users/petani/:id", handler.Middleware(petaniService, adminService, authService), petaniHandler.DeletePetaniByIDHandler) // petani
}
