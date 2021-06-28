package petani

import (
	"backend/entity"
	"time"
)

type PetaniFormat struct {
	ID       string `json:"id"`
	FullName string `json:"full_name"`
	Email    string `json:"email"`
	Role     string `json:"role"`
	// FormPengajuan  FormPengajuan
	// HasilPengajuan HasilPengajuan
}

type PetaniDeleteFormat struct {
	Message    string    `json:"message"`
	TimeDelete time.Time `json:"time_delete"`
}

func Format(petani entity.Petani) PetaniFormat {
	var formatPetani = PetaniFormat{
		ID:       petani.ID,
		FullName: petani.FullName,
		Email:    petani.Email,
		Role:     petani.Role,
		// FormPengajuan:  petani.FormPengajuan,
		// HasilPengajuan: petani.HasilPengajuan,
	}

	return formatPetani
}

// func FormatAdmin(petani entity.Admin) PetaniFormat {
// 	var formatPetani = PetaniFormat{
// 		ID:       petani.ID,
// 		FullName: petani.FullName,
// 		Email:    petani.Email,
// 		Role:     petani.Role,
// 	}
// 	return formatPetani
// }

func FormatDelete(msg string) PetaniDeleteFormat {
	var deleteFormat = PetaniDeleteFormat{
		Message:    msg,
		TimeDelete: time.Now(),
	}

	return deleteFormat
}
