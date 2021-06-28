package handler

import (
	"backend/auth"
	"backend/entity"
	"backend/helper"
	"backend/layer/hasilPengajuan"
	"net/http"

	"github.com/gin-gonic/gin"
)

type hasilPengajuanHandler struct {
	hasilPengajuanService hasilPengajuan.Service
	authService           auth.Service
}

func NewHasilPengajuanHandler(hasilPengajuanService hasilPengajuan.Service, authService auth.Service) *hasilPengajuanHandler {
	return &hasilPengajuanHandler{hasilPengajuanService, authService}
}

// SHOW ALL HASIL PENGAJUAN
func (h *hasilPengajuanHandler) ShowAllHasilPengajuanHandler(c *gin.Context) {
	hasilPengajuan, err := h.hasilPengajuanService.SShowAllHasilPengajuan()

	if err != nil {
		responseError := helper.APIResponse("internal server error", 500, "error", gin.H{"errors": err.Error()})

		c.JSON(500, responseError)
		return
	}

	response := helper.APIResponse("success get all Hasil Pengajuan", 200, "status OK", hasilPengajuan)
	c.JSON(200, response)
}

// CREATE NEW HASIL PENGAJUAN
func (h *hasilPengajuanHandler) CreateHasilPengajuanHandler(c *gin.Context) {

	var inputHasilPengajuan entity.HasilPengajuanInput

	if err := c.ShouldBindJSON(&inputHasilPengajuan); err != nil {

		splitError := helper.SplitErrorInformation(err)
		responseError := helper.APIResponse("input data required", 400, "bad request", gin.H{"errors": splitError})

		c.JSON(400, responseError)
		return
	}

	newHasilPengajuan, err := h.hasilPengajuanService.SCreateHasilPengajuan(inputHasilPengajuan)
	if err != nil {
		responseError := helper.APIResponse("internal server error", 500, "error", gin.H{"errors": err.Error()})

		c.JSON(500, responseError)
		return
	}
	response := helper.APIResponse("success create new Hasil Pengajuan", 201, "Status OK", newHasilPengajuan)
	c.JSON(201, response)
}

// FIND HASIL PENGAJUAN BY ID
func (h *hasilPengajuanHandler) GetHasilPengajuanByIDHandler(c *gin.Context) {
	id := c.Params.ByName("id")

	hasilPengajuan, err := h.hasilPengajuanService.SFindHasilPengajuanByID(id)
	if err != nil {
		responseError := helper.APIResponse("input params error", 400, "bad request", gin.H{"errors": err.Error()})

		c.JSON(400, responseError)
		return
	}

	response := helper.APIResponse("success get Hasil Pengajuan by ID", 200, "success", hasilPengajuan)
	c.JSON(200, response)
}

// UPDATE HASIL PENGAJUAN BY ID
func (h *hasilPengajuanHandler) UpdateHasilPengajuanByIDHandler(c *gin.Context) {
	id := c.Params.ByName("id")

	var updateHasilPengajuanInput entity.UpdateHasilPengajuanInput

	if err := c.ShouldBindJSON(&updateHasilPengajuanInput); err != nil {
		splitError := helper.SplitErrorInformation(err)
		responseError := helper.APIResponse("input data required", 400, "bad request", gin.H{"errors": splitError})

		c.JSON(400, responseError)
		return
	}

	hasilPengajuan, err := h.hasilPengajuanService.SUpdateHasilPengajuanByID(id, updateHasilPengajuanInput)
	if err != nil {
		responseError := helper.APIResponse("internal server error", 500, "error", gin.H{"error": err.Error()})

		c.JSON(500, responseError)
		return
	}

	response := helper.APIResponse("success update HasilPengajuan by ID", http.StatusOK, "success", hasilPengajuan)
	c.JSON(http.StatusOK, response)
}

// DELETE HASIL PENGAJUAN BY ID
func (h *hasilPengajuanHandler) DeleteHasilPengajuanByIDHandler(c *gin.Context) {
	id := c.Params.ByName("id")

	hasilPengajuan, err := h.hasilPengajuanService.SDeleteHasilPengajuanByID(id)

	if err != nil {
		responseError := helper.APIResponse("error bad request delete Hasil Pengajuan", 400, "error", gin.H{"error": err.Error()})

		c.JSON(400, responseError)
		return
	}

	response := helper.APIResponse("success delete Hasil Pengajuan by ID", 200, "success", hasilPengajuan)
	c.JSON(200, response)
}
