package handler

import (
	"net/http"
	"strconv"

	"backend/auth"
	"backend/entity"
	"backend/helper"
	"backend/layer/investor"

	"github.com/gin-gonic/gin"
)

type investorHandler struct {
	investorService investor.Service
	authService     auth.Service
}

func NewInvestorHandler(investorService investor.Service, authService auth.Service) *investorHandler {
	return &investorHandler{investorService, authService}
}

// SHOW ALL INVESTOR
func (h *investorHandler) ShowAllInvestorHandler(c *gin.Context) {
	userInvestor, err := h.investorService.SShowAllInvestor()

	if err != nil {
		responseError := helper.APIResponse("internal server error", 500, "error", gin.H{"errors": err.Error()})

		c.JSON(500, responseError)
		return
	}

	response := helper.APIResponse("success get all user Investor", 200, "status OK", userInvestor)
	c.JSON(200, response)
}

// CREATE NEW INVESTOR OR REGISTER
func (h *investorHandler) RegisterInvestorHandler(c *gin.Context) {
	var inputInvestor entity.InvestorInput

	if err := c.ShouldBindJSON(&inputInvestor); err != nil {

		splitError := helper.SplitErrorInformation(err)
		responseError := helper.APIResponse("input data required", 400, "bad request", gin.H{"errors": splitError})

		c.JSON(400, responseError)
		return
	}

	// max len password 6
	if err := helper.ValidatePassword(inputInvestor.Password); err != nil {

		responseError := helper.APIResponse("input data required", 400, "bad request", gin.H{"error": "error validate password length < 6"})

		c.JSON(400, responseError)
		return
	}

	newInvestor, err := h.investorService.SRegisterInvestor(inputInvestor)
	if err != nil {
		responseError := helper.APIResponse("internal server error", 500, "error", gin.H{"errors": err.Error()})

		c.JSON(500, responseError)
		return
	}
	response := helper.APIResponse("success create new user Investor", 201, "Status OK", newInvestor)
	c.JSON(201, response)
}

// FIND INVESTOR BY ID
func (h *investorHandler) GetInvestorByIDHandler(c *gin.Context) {
	id := c.Params.ByName("id")

	userInvestor, err := h.investorService.SFindInvestorByID(id)
	if err != nil {
		responseError := helper.APIResponse("input params error", 400, "bad request", gin.H{"errors": err.Error()})

		c.JSON(400, responseError)
		return
	}

	response := helper.APIResponse("success get user Investor by ID", 200, "success", userInvestor)
	c.JSON(200, response)
}

// DELETE INVESTOR BY ID
func (h *investorHandler) DeleteInvestorByIDHandler(c *gin.Context) {
	id := c.Params.ByName("id")

	userInvestor, err := h.investorService.SDeleteInvestorByID(id)

	if err != nil {
		responseError := helper.APIResponse("error bad request delete user Investor", 400, "error", gin.H{"error": err.Error()})

		c.JSON(400, responseError)
		return
	}

	response := helper.APIResponse("success delete user Investor by ID", 200, "success", userInvestor)
	c.JSON(200, response)
}

// UPDATE INVESTOR BY ID
func (h *investorHandler) UpdateInvestorByIDHandler(c *gin.Context) {
	id := c.Params.ByName("id")

	var updateInvestorInput entity.UpdateInvestorInput

	if err := c.ShouldBindJSON(&updateInvestorInput); err != nil {
		splitError := helper.SplitErrorInformation(err)
		responseError := helper.APIResponse("input data required", 400, "bad request", gin.H{"errors": splitError})

		c.JSON(400, responseError)
		return
	}

	idParam, _ := strconv.Atoi(id)

	// ngecek id sama apa engga sama yang di inputin
	investorData := int(c.MustGet("currentUser").(int))

	if idParam != investorData {
		responseError := helper.APIResponse("Unauthorize", 401, "error", gin.H{"error": "user Investor ID not authorize"})

		c.JSON(401, responseError)
		return
	}

	userInvestor, err := h.investorService.SUpdateInvestorByID(id, updateInvestorInput)
	if err != nil {
		responseError := helper.APIResponse("internal server error", 500, "error", gin.H{"error": err.Error()})

		c.JSON(500, responseError)
		return
	}

	response := helper.APIResponse("success update user Investor by ID", http.StatusOK, "success", userInvestor)
	c.JSON(http.StatusOK, response)
}

// USER INVESTOR LOGIN
func (h *investorHandler) LoginInvestorHandler(c *gin.Context) {
	var inputLoginInvestor entity.LoginInvestorInput

	if err := c.ShouldBindJSON(&inputLoginInvestor); err != nil {
		//splitError := helper.SplitErrorInformation(err)
		responseError := helper.APIResponse("input data required", 400, "bad request", gin.H{"errors": err.Error()})

		c.JSON(400, responseError)
		return
	}

	investorData, err := h.investorService.SLoginInvestor(inputLoginInvestor)

	if err != nil {
		//splitError := helper.SplitErrorInformation(err)
		responseError := helper.APIResponse("input data required", 401, "bad request", gin.H{"errors": err.Error()})

		c.JSON(401, responseError)
		return
	}

	token, err := h.authService.GenerateToken(investorData.ID)

	if err != nil {
		//splitError := helper.SplitErrorInformation(err)
		responseError := helper.APIResponse("input data required", 500, "bad request", gin.H{"errors": err.Error()})

		c.JSON(500, responseError)
		return
	}
	response := helper.APIResponse("success login user Investor", 200, "success", gin.H{"token": token})
	c.JSON(200, response)
}
