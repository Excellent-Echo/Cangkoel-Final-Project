package handler

import (
	"Cangkoel-Final-Project/auth"
	"Cangkoel-Final-Project/helper"
	"Cangkoel-Final-Project/layer/petani"

	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
)

func Middleware(petaniService petani.Service, authService auth.Service) gin.HandlerFunc {
	return func(c *gin.Context) {
		authHeader := c.GetHeader("Authorization")

		if authHeader == "" || len(authHeader) == 0 {
			errorResponse := helper.APIResponse("Unauthorize", 401, "error", gin.H{"error": "unauthorize userPetani"})

			c.AbortWithStatusJSON(401, errorResponse)
			return
		}

		// eksekusi code untuk mengecek apakah token itu valid dari server kita atau tidak
		token, err := authService.ValidateToken(authHeader)

		if err != nil {
			errorResponse := helper.APIResponse("Unauthorize", 401, "error", gin.H{"error": err.Error()})

			c.AbortWithStatusJSON(401, errorResponse)
			return
		}

		claim, ok := token.Claims.(jwt.MapClaims)

		if !ok {
			errorResponse := helper.APIResponse("Unauthorize", 401, "error", gin.H{"error": "unauthorize user"})

			c.AbortWithStatusJSON(401, errorResponse)
			return
		}

		userID := int(claim["user_id"].(float64))

		c.Set("currentUser", userID)
	}
}
