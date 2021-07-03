package handler

import (
	"net/http"

	"backend/auth"
	"backend/entity"
	"backend/helper"
	"backend/layer/petani"

	"github.com/gin-gonic/gin"
)

type petaniHandler struct {
	petaniService petani.Service
	authService   auth.Service
}

func NewPetaniHandler(petaniService petani.Service, authService auth.Service) *petaniHandler {
	return &petaniHandler{petaniService, authService}
}

// CREATE NEW PETANI OR REGISTER
func (h *petaniHandler) RegisterPetaniHandler(c *gin.Context) {
	var inputPetani entity.PetaniInput

	if err := c.ShouldBindJSON(&inputPetani); err != nil {

		splitError := helper.SplitErrorInformation(err)
		responseError := helper.APIResponse("input data required", 400, "bad request", gin.H{"errors": splitError})

		c.JSON(400, responseError)
		return
	}

	// max len password 6
	if err := helper.ValidatePassword(inputPetani.Password); err != nil {

		responseError := helper.APIResponse("input data required", 400, "bad request", gin.H{"error": "error validate password length < 6"})

		c.JSON(400, responseError)
		return
	}

	newPetani, err := h.petaniService.SRegisterPetani(inputPetani)
	if err != nil {
		responseError := helper.APIResponse("internal server error", 500, "error", gin.H{"errors": err.Error()})

		c.JSON(500, responseError)
		return
	}
	response := helper.APIResponse("success create new user Petani", 201, "Status OK", newPetani)
	c.JSON(201, response)
}

//LOGIN PETANI
func (h *petaniHandler) LoginPetaniHandler(c *gin.Context) {
	var inputLoginPetani entity.LoginPetaniInput

	if err := c.ShouldBindJSON(&inputLoginPetani); err != nil {
		responseError := helper.APIResponse("input data required", 400, "bad request", gin.H{"errors": err.Error()})

		c.JSON(400, responseError)
		return
	}

	petaniData, err := h.petaniService.SLoginPetani(inputLoginPetani)

	if err != nil {
		responseError := helper.APIResponse("input data required", 401, "bad request", gin.H{"errors": err.Error()})

		c.JSON(401, responseError)
		return
	}

	token, err := h.authService.GenerateTokenUser(petaniData.ID)

	if err != nil {
		responseError := helper.APIResponse("input data required", 500, "bad request", gin.H{"errors": err.Error()})

		c.JSON(500, responseError)
		return
	}
	response := helper.APIResponse("success login petani", 200, "success", gin.H{"token": token, "role": petaniData.Role, "id": petaniData.ID})
	c.JSON(200, response)
}

// SHOW ALL PETANI
func (h *petaniHandler) ShowAllPetaniHandler(c *gin.Context) {
	userPetani, err := h.petaniService.SShowAllPetani()

	if err != nil {
		responseError := helper.APIResponse("internal server error", 500, "error", gin.H{"errors": err.Error()})

		c.JSON(500, responseError)
		return
	}

	response := helper.APIResponse("success get all user Petani", 200, "status OK", userPetani)
	c.JSON(200, response)
}

// FIND PETANI BY ID
func (h *petaniHandler) GetPetaniByIDHandler(c *gin.Context) {
	id := c.Params.ByName("id")

	userPetani, err := h.petaniService.SFindPetaniByID(id)
	if err != nil {
		responseError := helper.APIResponse("input params error", 400, "bad request", gin.H{"errors": err.Error()})

		c.JSON(400, responseError)
		return
	}

	response := helper.APIResponse("success get user Petani by ID", 200, "success", userPetani)
	c.JSON(200, response)
}

// DELETE PETANI BY ID
func (h *petaniHandler) DeletePetaniByIDHandler(c *gin.Context) {
	id := c.Params.ByName("id")

	adminData := c.MustGet("currentUser").(gin.H)
	adminID := adminData["admin_id"]

	if adminID != "" {
		responseError := helper.APIResponse("Unauthorize", 401, "error", gin.H{"error": "you are not user petani, not authorize"})

		c.JSON(401, responseError)
		return
	}

	userPetani, err := h.petaniService.SDeletePetaniByID(id)

	if err != nil {
		responseError := helper.APIResponse("error bad request delete user Petani", 400, "error", gin.H{"error": err.Error()})

		c.JSON(400, responseError)
		return
	}

	response := helper.APIResponse("success delete user Petani by ID", 200, "success", userPetani)
	c.JSON(200, response)
}

// UPDATE PETANI BY ID
func (h *petaniHandler) UpdatePetaniByIDHandler(c *gin.Context) {
	id := c.Params.ByName("id")

	adminData := c.MustGet("currentUser").(gin.H)
	adminID := adminData["admin_id"]

	if adminID != "" {
		responseError := helper.APIResponse("Unauthorize", 401, "error", gin.H{"error": "you are not user petani, not authorize"})

		c.JSON(401, responseError)
		return
	}

	var updatePetaniInput entity.UpdatePetaniInput

	if err := c.ShouldBindJSON(&updatePetaniInput); err != nil {
		splitError := helper.SplitErrorInformation(err)
		responseError := helper.APIResponse("input data required", 400, "bad request", gin.H{"errors": splitError})

		c.JSON(400, responseError)
		return
	}

	// idParam, _ := strconv.Atoi(id)

	// ngecek id sama apa engga sama yang di inputin

	// petaniData := int(c.MustGet("currentUser").(int))
	petaniData := c.MustGet("currentUser").(gin.H)
	petaniID := petaniData["petani_id"]

	if id != petaniID {
		responseError := helper.APIResponse("Unauthorize", 401, "error", gin.H{"error": "user Petani ID not authorize"})

		c.JSON(401, responseError)
		return
	}

	userPetani, err := h.petaniService.SUpdatePetaniByID(id, updatePetaniInput)
	if err != nil {
		responseError := helper.APIResponse("internal server error", 500, "error", gin.H{"error": err.Error()})

		c.JSON(500, responseError)
		return
	}

	response := helper.APIResponse("success update user Petani by ID", http.StatusOK, "success", userPetani)
	c.JSON(http.StatusOK, response)
}
