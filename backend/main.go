package main

import (
	"backend/handler"
	"backend/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	r.Use(handler.CORSMiddleware())

	routes.PetaniRoute(r)
	routes.AdminRoute(r)
	routes.FormPengajuanRoute(r)
	routes.PendanaanRoute(r)
	routes.KategoriPertanianRoute(r)
	routes.HasilPengajuanRoute(r)

	r.Run()
}
