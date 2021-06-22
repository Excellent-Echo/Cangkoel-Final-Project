package handler

import (
	"net/http"
	"strconv"

	"backend/auth"
	"backend/entity"
	"backend/helper"
	"backend/layer/kategoripertanian"

	"github.com/gin-gonic/gin"
)

type KpetaniHandler struct {
	KpetaniService kategoripertanian.Service
	authService    auth.Service
}

func NewKPetaniHandler(KpetaniService kategoripertanian.Service, authService auth.Service) *KpetaniHandler {
	return &KpetaniHandler{KpetaniService, authService}
}

func (h *KpetaniHandler) ShowAllKPetaniHandler(c *gin.Context) {
	Kpetani, err := h.KpetaniService.SFindAllKpetani()

	if err != nil {
		responseError := helper.APIResponse("internal server error", 500, "error", gin.H{"errors": err.Error()})

		c.JSON(500, responseError)
		return
	}

	response := helper.APIResponse("success get all Kategori Pertanian", 200, "status OK", Kpetani)
	c.JSON(200, response)
}

func (h *KpetaniHandler) GetKPetaniByIDHandler(c *gin.Context) {
	id := c.Params.ByName("id")

	Kpetani, err := h.KpetaniService.SFindByIDKpetani(id)
	if err != nil {
		responseError := helper.APIResponse("input params error", 400, "bad request", gin.H{"errors": err.Error()})

		c.JSON(400, responseError)
		return
	}

	response := helper.APIResponse("success get Kategori Pertanian by ID", 200, "success", Kpetani)
	c.JSON(200, response)
}

func (h *KpetaniHandler) CreateKategoriPertanian(c *gin.Context) {
	var InputKPetani entity.KategoriPertanianInput

	if err := c.ShouldBindJSON(&InputKPetani); err != nil {

		splitError := helper.SplitErrorInformation(err)
		responseError := helper.APIResponse("input data required", 400, "bad request", gin.H{"errors": splitError})

		c.JSON(400, responseError)
		return
	}
	newKPetani, err := h.KpetaniService.SCreateKpetani(InputKPetani)
	if err != nil {
		responseError := helper.APIResponse("internal server error", 500, "error", gin.H{"errors": err.Error()})

		c.JSON(500, responseError)
		return
	}
	response := helper.APIResponse("success create new Kategori Pertanian", 201, "Status OK", newKPetani)
	c.JSON(201, response)
}

func (h *KpetaniHandler) DeleteKPetaniByIDHandler(c *gin.Context) {
	id := c.Params.ByName("id")

	Kpetani, err := h.KpetaniService.SDeleteByIDKpetani(id)

	if err != nil {
		responseError := helper.APIResponse("error bad request delete Kategori Pertanian", 400, "error", gin.H{"error": err.Error()})

		c.JSON(400, responseError)
		return
	}

	response := helper.APIResponse("success delete Kategori Pertanian by ID", 200, "success", Kpetani)
	c.JSON(200, response)
}

func (h *KpetaniHandler) UpdateKPetaniByIDHandler(c *gin.Context) {
	id := c.Params.ByName("id")

	var updatePetaniInput entity.UpdatePetaniInput

	if err := c.ShouldBindJSON(&updatePetaniInput); err != nil {
		splitError := helper.SplitErrorInformation(err)
		responseError := helper.APIResponse("input data required", 400, "bad request", gin.H{"errors": splitError})

		c.JSON(400, responseError)
		return
	}

	idParam, _ := strconv.Atoi(id)

	KpetaniData := int(c.MustGet("currentUser").(int))

	if idParam != KpetaniData {
		responseError := helper.APIResponse("Unauthorize", 401, "error", gin.H{"error": "Kategori Pertanian ID not authorize"})

		c.JSON(401, responseError)
		return
	}

	Kpetani, err := h.KpetaniService.SUpdateByIDKpetani(id, entity.UpdateKategoriPertanianInput{})
	if err != nil {
		responseError := helper.APIResponse("internal server error", 500, "error", gin.H{"error": err.Error()})

		c.JSON(500, responseError)
		return
	}

	response := helper.APIResponse("success update Kategori Pertanian by ID", http.StatusOK, "success", Kpetani)
	c.JSON(http.StatusOK, response)
}
