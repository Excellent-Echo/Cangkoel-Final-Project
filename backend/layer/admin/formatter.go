package admin

import (
	"backend/entity"
	"time"
)

type AdminFormat struct {
	ID       string `json:"id"`
	FullName string `json:"full_name"`
	Email    string `json:"email"`
	Role     string `json:"role"`
}

type AdminDeleteFormat struct {
	Message    string    `json:"message"`
	TimeDelete time.Time `json:"time_delete"`
}

func Format(admin entity.Admin) AdminFormat {
	var formatAdmin = AdminFormat{
		ID:       admin.ID,
		FullName: admin.FullName,
		Email:    admin.Email,
		Role:     admin.Role,
	}

	return formatAdmin
}

func FormatDelete(msg string) AdminDeleteFormat {
	var deleteFormat = AdminDeleteFormat{
		Message:    msg,
		TimeDelete: time.Now(),
	}

	return deleteFormat
}
