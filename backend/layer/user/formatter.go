package user

import "backend/entity"

type UserFormat struct {
	ID       string `json:"id"`
	FullName string `json:"full_name"`
	Email    string `json:"email"`
	Role     string `json:"role"`
}

func FormatPetani(petani entity.Petani) UserFormat {
	var formatPetani = UserFormat{
		ID:       petani.ID,
		FullName: petani.FullName,
		Email:    petani.Email,
		Role:     petani.Role,
	}

	return formatPetani
}

func FormatAdmin(admin entity.Admin) UserFormat {
	var formatAdmin = UserFormat{
		ID:       admin.ID,
		FullName: admin.FullName,
		Email:    admin.Email,
		Role:     admin.Role,
	}

	return formatAdmin
}
