package handler

import (
	"backend/auth"
	"backend/entity"
	"backend/helper"
	"backend/layer/pendanaan"

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

	response := helper.APIResponse("success get all Form Pendanaan", 200, "status OK", pendanaan)
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
	kategoriID := c.Params.ByName("kategori_id")

	var inputpendanaan entity.PendanaanInput

	//investorID := strconv.Itoa(investorData)

	if err := c.ShouldBindJSON(&inputpendanaan); err != nil {

		splitError := helper.SplitErrorInformation(err)
		responseError := helper.APIResponse("input data required", 400, "bad request", gin.H{"errors": splitError})

		c.JSON(400, responseError)
		return
	}

	// pathPengajuanSave := "https://cangkoel.herokuapp.com/" + path

	newPendanaan, err := h.pendanaanService.SCreatePendanaan(inputpendanaan, kategoriID)
	if err != nil {
		responseError := helper.APIResponse("internal server error", 500, "error", gin.H{"errors": err.Error()})

		c.JSON(500, responseError)
		return
	}
	response := helper.APIResponse("success create new Form Pengajuan", 201, "Status OK", newPendanaan)
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

	response := helper.APIResponse("success get user Form Pengajuan by ID", 200, "success", pendanaan)
	c.JSON(200, response)
}
