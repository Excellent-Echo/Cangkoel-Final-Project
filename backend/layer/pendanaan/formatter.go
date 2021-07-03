package pendanaan

import "time"

type PendanaanDeleteFormat struct {
	Message    string    `json:"message"`
	TimeDelete time.Time `json:"time_delete"`
}

func FormatDelete(msg string) PendanaanDeleteFormat {
	var deleteFormat = PendanaanDeleteFormat{
		Message:    msg,
		TimeDelete: time.Now(),
	}

	return deleteFormat
}
