package hasilPengajuan

import "time"

type HasilPengajuanDeleteFormat struct {
	Message    string    `json:"message"`
	TimeDelete time.Time `json:"time_delete"`
}

func FormatDelete(msg string) HasilPengajuanDeleteFormat {
	var deleteFormat = HasilPengajuanDeleteFormat{
		Message:    msg,
		TimeDelete: time.Now(),
	}

	return deleteFormat
}
