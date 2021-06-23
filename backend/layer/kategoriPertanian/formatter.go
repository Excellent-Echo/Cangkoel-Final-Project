package kategoriPertanian

import (
	"time"
)

type KPetaniDeleteFormat struct {
	Message    string    `json:"message"`
	TimeDelete time.Time `json:"time_delete"`
}

func FormatDelete(msg string) KPetaniDeleteFormat {
	var deleteFormat = KPetaniDeleteFormat{
		Message:    msg,
		TimeDelete: time.Now(),
	}

	return deleteFormat
}
