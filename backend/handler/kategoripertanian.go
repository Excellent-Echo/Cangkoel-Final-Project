package handler

import (
	"backend/auth"
	"net/http"

	"backend/entity"
	"backend/helper"
	"backend/layer/kategoriPertanian"

	"github.com/gin-gonic/gin"
)

type KpetaniHandler struct {
	KpetaniService kategoriPertanian.Service
	authService    auth.Service
}

func NewKPetaniHandler(KpetaniService kategoriPertanian.Service, authService auth.Service) *KpetaniHandler {
	return &KpetaniHandler{KpetaniService, authService}
}

// ShowAllKPetaniHandler GET all kategori pertanian
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

// GetKPetaniByIDHandler GET kategori petani by ID
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

// CreateKategoriPertanian POST kategori pertanian
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

// DeleteKPetaniByIDHandler DELETE kategori pertanian by id
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

// UpdateKPetaniByIDHandler UPDATE kategori pertanian by id
func (h *KpetaniHandler) UpdateKPetaniByIDHandler(c *gin.Context) {
	id := c.Params.ByName("id")

	var updatePetaniInput entity.UpdateKategoriPertanianInput

	if err := c.ShouldBindJSON(&updatePetaniInput); err != nil {
		splitError := helper.SplitErrorInformation(err)
		responseError := helper.APIResponse("input data required", 400, "bad request", gin.H{"errors": splitError})

		c.JSON(400, responseError)
		return
	}

	// idParam, _ := strconv.Atoi(id)

	// KpetaniData := int(c.MustGet("currentUser").(int))

	// if idParam != KpetaniData {
	// 	responseError := helper.APIResponse("Unauthorize", 401, "error", gin.H{"error": "Kategori Pertanian ID not authorize"})

	// 	c.JSON(401, responseError)
	// 	return
	// }

	Kpetani, err := h.KpetaniService.SUpdateByIDKpetani(id, updatePetaniInput)
	if err != nil {
		responseError := helper.APIResponse("internal server error", 500, "error", gin.H{"error": err.Error()})

		c.JSON(500, responseError)
		return
	}

	response := helper.APIResponse("success update Kategori Pertanian by ID", http.StatusOK, "success", Kpetani)
	c.JSON(http.StatusOK, response)
}
