package user

import "backend/entity"

type UserFormat struct {
	ID       int    `json:"id"`
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

func FormatInvestor(investor entity.Investor) UserFormat {
	var formatInvestor = UserFormat{
		ID:       investor.ID,
		FullName: investor.FullName,
		Email:    investor.Email,
		Role:     investor.Role,
	}

	return formatInvestor
}
