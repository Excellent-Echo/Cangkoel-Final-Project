package handler

import (
	"backend/auth"
	"backend/helper"
	"backend/layer/admin"
	"backend/layer/petani"

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
			errorResponse := helper.APIResponse("Unauthorize", 401, "error", gin.H{"error": "unauthorize userPetani"})

			c.AbortWithStatusJSON(401, errorResponse)
			return
		}

		petaniID := claim["petani_id"].(string)

		c.Set("currentUser", petaniID)
	}
}

func MiddlewareAdmin(adminService admin.Service, authService auth.Service) gin.HandlerFunc {
	return func(c *gin.Context) {
		authHeader := c.GetHeader("Authorization")

		if authHeader == "" || len(authHeader) == 0 {
			errorResponse := helper.APIResponse("Unauthorize", 401, "error", gin.H{"error": "unauthorize Admin"})

			c.AbortWithStatusJSON(401, errorResponse)
			return
		}

		token, err := authService.ValidateToken(authHeader)

		if err != nil {
			errorResponse := helper.APIResponse("Unauthorize", 401, "error", gin.H{"error": err.Error()})

			c.AbortWithStatusJSON(401, errorResponse)
			return
		}

		claim, ok := token.Claims.(jwt.MapClaims)

		if !ok {
			errorResponse := helper.APIResponse("Unauthorize", 401, "error", gin.H{"error": "unauthorize Admin"})

			c.AbortWithStatusJSON(401, errorResponse)
			return
		}

		// adminID := int(claim["admin_id"].(int))
		// IDAdmin := strconv.Itoa(adminID)

		adminID := claim["admin_id"].(string)

		Admin, err := adminService.SFindAdminByID(adminID)
		if Admin.Role != "admin" {
			errorResponse := helper.APIResponse("Unauthorize", 401, "error", gin.H{"error": "unauthorize Admin"})

			c.AbortWithStatusJSON(401, errorResponse)
			return
		}

		c.Set("currentAdmin", adminID)
	}
}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, PATCH, DELETE")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}
