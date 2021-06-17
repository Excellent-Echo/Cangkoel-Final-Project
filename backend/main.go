package main

import (
	"backend/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	routes.PetaniRoute(r)

	r.Run()
}
