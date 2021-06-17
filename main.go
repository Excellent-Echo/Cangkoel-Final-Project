package main

import (
	"Cangkoel-Final-Project/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	routes.PetaniRoute(r)

	r.Run()
}
