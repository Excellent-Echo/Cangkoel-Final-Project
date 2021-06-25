package handler

import (
	"net/http"

	"backend/auth"
	"backend/entity"
	"backend/helper"
	"backend/layer/admin"

	"github.com/gin-gonic/gin"
)

type adminHandler struct {
	adminService admin.Service
	authService  auth.Service
}

func NewAdminHandler(adminService admin.Service, authService auth.Service) *adminHandler {
	return &adminHandler{adminService, authService}
}

// SHOW ALL ADMIN
func (h *adminHandler) ShowAllAdminHandler(c *gin.Context) {
	admin, err := h.adminService.SShowAllAdmin()

	if err != nil {
		responseError := helper.APIResponse("internal server error", 500, "error", gin.H{"errors": err.Error()})

		c.JSON(500, responseError)
		return
	}

	response := helper.APIResponse("success get all admin", 200, "status OK", admin)
	c.JSON(200, response)
}

// CREATE NEW ADMIN OR REGISTER
func (h *adminHandler) RegisterAdminHandler(c *gin.Context) {
	var inputAdmin entity.AdminInput

	if err := c.ShouldBindJSON(&inputAdmin); err != nil {

		splitError := helper.SplitErrorInformation(err)
		responseError := helper.APIResponse("input data required", 400, "bad request", gin.H{"errors": splitError})

		c.JSON(400, responseError)
		return
	}

	// max len password 6
	if err := helper.ValidatePassword(inputAdmin.Password); err != nil {

		responseError := helper.APIResponse("input data required", 400, "bad request", gin.H{"error": "error validate password length < 6"})

		c.JSON(400, responseError)
		return
	}

	newAdmin, err := h.adminService.SRegisterAdmin(inputAdmin)
	if err != nil {
		responseError := helper.APIResponse("internal server error", 500, "error", gin.H{"errors": err.Error()})

		c.JSON(500, responseError)
		return
	}
	response := helper.APIResponse("success create new admin", 201, "Status OK", newAdmin)
	c.JSON(201, response)
}

// FIND ADMIN BY ID
func (h *adminHandler) GetAdminByIDHandler(c *gin.Context) {
	id := c.Params.ByName("id")

	admin, err := h.adminService.SFindAdminByID(id)
	if err != nil {
		responseError := helper.APIResponse("input params error", 400, "bad request", gin.H{"errors": err.Error()})

		c.JSON(400, responseError)
		return
	}

	response := helper.APIResponse("success get admin by ID", 200, "success", admin)
	c.JSON(200, response)
}

// DELETE ADMIN BY ID
func (h *adminHandler) DeleteAdminByIDHandler(c *gin.Context) {
	id := c.Params.ByName("id")

	admin, err := h.adminService.SDeleteAdminByID(id)

	if err != nil {
		responseError := helper.APIResponse("error bad request delete admin", 400, "error", gin.H{"error": err.Error()})

		c.JSON(400, responseError)
		return
	}

	response := helper.APIResponse("success delete admin by ID", 200, "success", admin)
	c.JSON(200, response)
}

// UPDATE ADMIN BY ID
func (h *adminHandler) UpdateAdminByIDHandler(c *gin.Context) {
	id := c.Params.ByName("id")

	var updateAdminInput entity.UpdateAdminInput

	if err := c.ShouldBindJSON(&updateAdminInput); err != nil {
		splitError := helper.SplitErrorInformation(err)
		responseError := helper.APIResponse("input data required", 400, "bad request", gin.H{"errors": splitError})

		c.JSON(400, responseError)
		return
	}

	adminData := c.MustGet("currentAdmin")

	//ini perlu di investigasi?????
	if id == adminData {
		responseError := helper.APIResponse("Unauthorize", 401, "error", gin.H{"error": "admin ID not authorize"})

		c.JSON(401, responseError)
		return
	}

	admin, err := h.adminService.SUpdateAdminByID(id, updateAdminInput)
	if err != nil {
		responseError := helper.APIResponse("internal server error", 500, "error", gin.H{"error": err.Error()})

		c.JSON(500, responseError)
		return
	}

	response := helper.APIResponse("success update user Investor by ID", http.StatusOK, "success", admin)
	c.JSON(http.StatusOK, response)
}
