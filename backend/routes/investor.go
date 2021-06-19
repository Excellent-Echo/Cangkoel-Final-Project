package routes

import (
	"backend/handler"
	"backend/layer/investor"

	"github.com/gin-gonic/gin"
)

var (
	investorService    = investor.NewService(investorRepository)
	investorRepository = investor.NewRepository(DB)
	investorHandler    = handler.NewInvestorHandler(investorService, authService)
)

func InvestorRoute(r *gin.Engine) {
	r.GET("users/investor", handler.MiddlewareInvestor(investorService, authService), investorHandler.ShowAllInvestorHandler)
	// r.POST("users/investor/register", investorHandler.RegisterInvestorHandler)
	// r.POST("users/investor/login", investorHandler.LoginInvestorHandler)
	r.GET("users/investor/:id", handler.MiddlewareInvestor(investorService, authService), investorHandler.GetInvestorByIDHandler)
	r.PUT("users/investor/:id", handler.MiddlewareInvestor(investorService, authService), investorHandler.UpdateInvestorByIDHandler)
	r.DELETE("users/investor/:id", handler.MiddlewareInvestor(investorService, authService), investorHandler.DeleteInvestorByIDHandler)
}
