package handler

import (
	"backend/auth"
	"backend/helper"
	"backend/layer/admin"
	"backend/layer/petani"

	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
)

func Middleware(petaniService petani.Service, adminService admin.Service, authService auth.Service) gin.HandlerFunc {
	return func(c *gin.Context) {
		authHeader := c.GetHeader("Authorization")

		if authHeader == "" || len(authHeader) == 0 {
			errorResponse := helper.APIResponse("Unauthorize", 401, "error", gin.H{"error": "unauthorize"})

			c.AbortWithStatusJSON(401, errorResponse)
			return
		}

		// mengecek apakah token itu valid atau tidak
		token, err := authService.ValidateToken(authHeader)

		if err != nil {
			errorResponse := helper.APIResponse("Unauthorize", 401, "error", gin.H{"error": err.Error()})

			c.AbortWithStatusJSON(401, errorResponse)
			return
		}

		claim, ok := token.Claims.(jwt.MapClaims)

		if !ok {
			errorResponse := helper.APIResponse("Unauthorize", 401, "error", gin.H{"error": "unauthorize"})

			c.AbortWithStatusJSON(401, errorResponse)
			return
		}

		petaniID := ""
		adminID := ""

		if claim["petani_id"] != nil {
			petaniID = claim["petani_id"].(string)
		}

		if claim["admin_id"] != nil {
			adminID = claim["admin_id"].(string)
		}

		// Admin, err := adminService.SFindAdminByID(adminID)
		// if Admin.Role != "admin" {
		// 	errorResponse := helper.APIResponse("Unauthorize", 401, "error", gin.H{"error": "unauthorize Admin"})

		// 	c.AbortWithStatusJSON(401, errorResponse)
		// 	return
		// }

		c.Set("currentUser", gin.H{
			"petani_id": petaniID,
			"admin_id":  adminID,
		})
	}
}

// func MiddlewareAdmin(adminService admin.Service, authService auth.Service) gin.HandlerFunc {
// 	return func(c *gin.Context) {
// 		authHeader := c.GetHeader("Authorization")

// 		if authHeader == "" || len(authHeader) == 0 {
// 			errorResponse := helper.APIResponse("Unauthorize", 401, "error", gin.H{"error": "unauthorize Admin"})

// 			c.AbortWithStatusJSON(401, errorResponse)
// 			return
// 		}

// 		token, err := authService.ValidateToken(authHeader)

// 		if err != nil {
// 			errorResponse := helper.APIResponse("Unauthorize", 401, "error", gin.H{"error": err.Error()})

// 			c.AbortWithStatusJSON(401, errorResponse)
// 			return
// 		}

// 		claim, ok := token.Claims.(jwt.MapClaims)

// 		if !ok {
// 			errorResponse := helper.APIResponse("Unauthorize", 401, "error", gin.H{"error": "unauthorize Admin"})

// 			c.AbortWithStatusJSON(401, errorResponse)
// 			return
// 		}

// 		// adminID := int(claim["admin_id"].(int))
// 		// IDAdmin := strconv.Itoa(adminID)

// 		adminID := claim["admin_id"].(string)
// 		fmt.Println(adminID)

// 		Admin, err := adminService.SFindAdminByID(adminID)
// 		if Admin.Role != "admin" {
// 			errorResponse := helper.APIResponse("Unauthorize", 401, "error", gin.H{"error": "unauthorize Admin"})

// 			c.AbortWithStatusJSON(401, errorResponse)
// 			return
// 		}

// 		c.Set("currentAdmin", adminID)
// 	}
// }

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
