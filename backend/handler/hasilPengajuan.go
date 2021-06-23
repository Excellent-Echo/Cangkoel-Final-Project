package handler

// import (
// 	"backend/auth"
// 	"backend/entity"
// 	"backend/helper"
// 	"backend/layer/formPengajuan"
// 	"strconv"

// 	"github.com/gin-gonic/gin"
// )

// type hasilPengajuanHandler struct {
// 	formPengajuanService formPengajuan.Service
// 	authService          auth.Service
// }

// func NewFormPengajuanHandler(formPengajuanService formPengajuan.Service, authService auth.Service) *formPengajuanHandler {
// 	return &formPengajuanHandler{formPengajuanService, authService}
// }

// // SHOW ALL FORM PENGAJUAN
// func (h *formPengajuanHandler) ShowAllFormPengajuanHandler(c *gin.Context) {
// 	formPengajuan, err := h.formPengajuanService.SShowAllFormPengajuan()

// 	if err != nil {
// 		responseError := helper.APIResponse("internal server error", 500, "error", gin.H{"errors": err.Error()})

// 		c.JSON(500, responseError)
// 		return
// 	}

// 	response := helper.APIResponse("success get all Form Pengajuan", 200, "status OK", formPengajuan)
// 	c.JSON(200, response)
// }

// // CREATE NEW FORM PENGAJUAN
// func (h *formPengajuanHandler) CreateFormPengajuanHandler(c *gin.Context) {
// 	petaniData := int(c.MustGet("currentUser").(int))

// 	// file, err := c.FormFile("Document")
// 	// file2, err := c.FormFile("Ktp")

// 	if petaniData == 0 {
// 		responseError := helper.APIResponse("Unauthorize", 401, "error", gin.H{"error": "user Petani not authorize / not login"})

// 		c.JSON(401, responseError)
// 		return
// 	}
// 	// path := fmt.Sprintf("images/document-%d-%s", petaniData, file.Filename)
// 	// path2 := fmt.Sprintf("images/ktp-%d-%s", petaniData, file2.Filename)

// 	// err = c.SaveUploadedFile(file, path)
// 	// err = c.SaveUploadedFile(file2, path2)

// 	petaniID := strconv.Itoa(petaniData)

// 	var inputFormPengajuan entity.FormPengajuanInput

// 	if err := c.ShouldBindJSON(&inputFormPengajuan); err != nil {

// 		splitError := helper.SplitErrorInformation(err)
// 		responseError := helper.APIResponse("input data required", 400, "bad request", gin.H{"errors": splitError})

// 		c.JSON(400, responseError)
// 		return
// 	}

// 	// pathPengajuanSave := "https://cangkoel.herokuapp.com/" + path
// 	// pathPengajuanSave2 := "https://cangkoel.herokuapp.com/" + path2

// 	newFormPengajuan, err := h.formPengajuanService.SCreateFormPengajuan(inputFormPengajuan, petaniID)
// 	if err != nil {
// 		responseError := helper.APIResponse("internal server error", 500, "error", gin.H{"errors": err.Error()})

// 		c.JSON(500, responseError)
// 		return
// 	}
// 	response := helper.APIResponse("success create new Form Pengajuan", 201, "Status OK", newFormPengajuan)
// 	c.JSON(201, response)
// }

// // FIND FORM PENGAJUAN BY ID
// func (h *formPengajuanHandler) GetFormPengajuanByIDHandler(c *gin.Context) {
// 	id := c.Params.ByName("id")

// 	formPengajuan, err := h.formPengajuanService.SFindFormPengajuanByID(id)
// 	if err != nil {
// 		responseError := helper.APIResponse("input params error", 400, "bad request", gin.H{"errors": err.Error()})

// 		c.JSON(400, responseError)
// 		return
// 	}

// 	response := helper.APIResponse("success get user Form Pengajuan by ID", 200, "success", formPengajuan)
// 	c.JSON(200, response)
// }
