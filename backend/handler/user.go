package handler

import (
	"backend/auth"
	"backend/entity"
	"backend/helper"
	"backend/layer/user"

	"github.com/gin-gonic/gin"
)

type userHandler struct {
	userService user.Service
	authService auth.Service
}

func NewUserHandler(userService user.Service, authService auth.Service) *userHandler {
	return &userHandler{userService, authService}
}

// USER PETANI LOGIN
func (h *userHandler) LoginUserHandler(c *gin.Context) {
	var inputLoginUser entity.LoginUserInput

	if err := c.ShouldBindJSON(&inputLoginUser); err != nil {
		responseError := helper.APIResponse("input data required", 400, "bad request", gin.H{"errors": err.Error()})

		c.JSON(400, responseError)
		return
	}

	userData, err := h.userService.SLoginUser(inputLoginUser)

	if err != nil {
		responseError := helper.APIResponse("input data required", 401, "bad request", gin.H{"errors": err.Error()})

		c.JSON(401, responseError)
		return
	}

	token, err := h.authService.GenerateToken(userData.ID)

	if err != nil {
		responseError := helper.APIResponse("input data required", 500, "bad request", gin.H{"errors": err.Error()})

		c.JSON(500, responseError)
		return
	}
	response := helper.APIResponse("success login user", 200, "success", gin.H{"token": token, "role": userData.Role})
	c.JSON(200, response)
}
