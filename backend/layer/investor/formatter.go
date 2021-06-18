package investor

import (
	"backend/entity"
	"time"
)

type InvestorFormat struct {
	ID       int    `json:"id"`
	FullName string `json:"full_name"`
	Email    string `json:"email"`
	Role     string `json:"role"`
}

type InvestorDeleteFormat struct {
	Message    string    `json:"message"`
	TimeDelete time.Time `json:"time_delete"`
}

func Format(investor entity.Investor) InvestorFormat {
	var formatInvestor = InvestorFormat{
		ID:       investor.ID,
		FullName: investor.FullName,
		Email:    investor.Email,
		Role:     investor.Role,
	}

	return formatInvestor
}

func FormatDelete(msg string) InvestorDeleteFormat {
	var deleteFormat = InvestorDeleteFormat{
		Message:    msg,
		TimeDelete: time.Now(),
	}

	return deleteFormat
}
