package handler

import (
	"backend/auth"
	"backend/entity"
	"backend/helper"
	"backend/layer/pendanaan"
	"net/http"

	//"strconv"

	"github.com/gin-gonic/gin"
)

type pendanaanHandler struct {
	pendanaanService pendanaan.Service
	authService      auth.Service
}

func NewPendanaanHandler(pendanaanService pendanaan.Service, authService auth.Service) *pendanaanHandler {
	return &pendanaanHandler{pendanaanService, authService}
}

// SHOW ALL PENDANAAN
func (h *pendanaanHandler) ShowAllPendanaanHandler(c *gin.Context) {
	pendanaan, err := h.pendanaanService.SShowAllPendanaan()

	if err != nil {
		responseError := helper.APIResponse("internal server error", 500, "error", gin.H{"errors": err.Error()})

		c.JSON(500, responseError)
		return
	}

	response := helper.APIResponse("success get all Pendanaan", 200, "status OK", pendanaan)
	c.JSON(200, response)
}

// CREATE NEW PENDANAAN
func (h *pendanaanHandler) CreatePendanaanHandler(c *gin.Context) {
	//investorData := int(c.MustGet("currentUser").(int))

	// file, err := c.FormFile("Profile")

	//if investorData == 0 {
	//	responseError := helper.APIResponse("Unauthorize", 401, "error", gin.H{"error": "user Investor not authorize / not login"})
	//
	//	c.JSON(401, responseError)
	//	return
	//}
	// path := fmt.Sprintf("images/profile-%d-%s", investorData, file.Filename)

	// err = c.SaveUploadedFile(file, path)

	var inputpendanaan entity.PendanaanInput

	//investorID := strconv.Itoa(investorData)

	if err := c.ShouldBindJSON(&inputpendanaan); err != nil {

		splitError := helper.SplitErrorInformation(err)
		responseError := helper.APIResponse("input data required", 400, "bad request", gin.H{"errors": splitError})

		c.JSON(400, responseError)
		return
	}

	// pathPengajuanSave := "https://cangkoel.herokuapp.com/" + path

	newPendanaan, err := h.pendanaanService.SCreatePendanaan(inputpendanaan)
	if err != nil {
		responseError := helper.APIResponse("internal server error", 500, "error", gin.H{"errors": err.Error()})

		c.JSON(500, responseError)
		return
	}
	response := helper.APIResponse("success create new Pendanaan", 201, "Status OK", newPendanaan)
	c.JSON(201, response)
}

// FIND PENDANAAN BY KATEGORI ID
func (h *pendanaanHandler) GetPendanaanByKategoriIDHandler(c *gin.Context) {
	id := c.Params.ByName("id")

	pendanaan, err := h.pendanaanService.SFindPendanaanByKategoriID(id)
	if err != nil {
		responseError := helper.APIResponse("input params error", 400, "bad request", gin.H{"errors": err.Error()})

		c.JSON(400, responseError)
		return
	}

	response := helper.APIResponse("success get Pendanaan by kategori ID", 200, "success", pendanaan)
	c.JSON(200, response)
}

// FIND PENDANAAN BY ID
func (h *pendanaanHandler) GetPendanaanByIDHandler(c *gin.Context) {
	id := c.Params.ByName("id")

	pendanaan, err := h.pendanaanService.SFindPendanaanByID(id)
	if err != nil {
		responseError := helper.APIResponse("input params error", 400, "bad request", gin.H{"errors": err.Error()})

		c.JSON(400, responseError)
		return
	}

	response := helper.APIResponse("success get Pendanaan by ID", 200, "success", pendanaan)
	c.JSON(200, response)
}

// DELETE PENDANAAN BY ID
func (h *pendanaanHandler) DeletePendanaanByIDHandler(c *gin.Context) {
	id := c.Params.ByName("id")

	pendanaan, err := h.pendanaanService.SDeletePendanaanByID(id)

	if err != nil {
		responseError := helper.APIResponse("error bad request delete Pendanaan", 400, "error", gin.H{"error": err.Error()})

		c.JSON(400, responseError)
		return
	}

	response := helper.APIResponse("success delete Pendanaan by ID", 200, "success", pendanaan)
	c.JSON(200, response)
}

// UPDATE PENDANAAN BY ID
func (h *pendanaanHandler) UpdatePendanaanByIDHandler(c *gin.Context) {
	id := c.Params.ByName("id")

	var updatePendanaanInput entity.UpdatePendanaanInput

	if err := c.ShouldBindJSON(&updatePendanaanInput); err != nil {
		splitError := helper.SplitErrorInformation(err)
		responseError := helper.APIResponse("input data required", 400, "bad request", gin.H{"errors": splitError})

		c.JSON(400, responseError)
		return
	}

	// idParam, _ := strconv.Atoi(id)

	// adminData := int(c.MustGet("currentUser").(int))

	// if idParam != adminData {
	// 	responseError := helper.APIResponse("Unauthorize", 401, "error", gin.H{"error": "Kategori Pertanian ID not authorize"})

	// 	c.JSON(401, responseError)
	// 	return
	// }

	pendanaan, err := h.pendanaanService.SUpdatePendanaanByID(id, updatePendanaanInput)
	if err != nil {
		responseError := helper.APIResponse("internal server error", 500, "error", gin.H{"error": err.Error()})

		c.JSON(500, responseError)
		return
	}

	response := helper.APIResponse("success update Kategori Pertanian by ID", http.StatusOK, "success", pendanaan)
	c.JSON(http.StatusOK, response)
}
