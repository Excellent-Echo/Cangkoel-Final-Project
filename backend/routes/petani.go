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
	r.GET("users/petani", handler.MiddlewareUser(petaniService, authService), handler.MiddlewareAdmin(adminService, authService), petaniHandler.ShowAllPetaniHandler)
	r.GET("users/petani/:id", handler.MiddlewareUser(petaniService, authService), handler.MiddlewareAdmin(adminService, authService), petaniHandler.GetPetaniByIDHandler)
	r.PUT("users/petani/:id", handler.MiddlewareUser(petaniService, authService), petaniHandler.UpdatePetaniByIDHandler)
	r.DELETE("users/petani/:id", handler.MiddlewareUser(petaniService, authService), petaniHandler.DeletePetaniByIDHandler)
}
