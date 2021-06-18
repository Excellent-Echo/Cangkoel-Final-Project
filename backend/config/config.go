package config

import (
	"backend/migration"
	"fmt"
	"os"

	"github.com/joho/godotenv"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func Connection() *gorm.DB {
	err := godotenv.Load()

	dbUser := os.Getenv("DB_USERNAME")
	dbPass := os.Getenv("DB_PASSWORD")
	dbHost := os.Getenv("DB_HOST")
	dbPort := os.Getenv("DB_PORT")
	dbName := os.Getenv("DB_NAME")

	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=Local", dbUser, dbPass, dbHost, dbPort, dbName)
	// dsn := "root:@tcp(localhost)/book_list?charset=utf8mb4&parseTime=True&loc=Local"

	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})

	if err != nil {
		panic(err.Error())
	}

	db.AutoMigrate(&migration.Petani{})
	db.AutoMigrate(&migration.Investor{})
	db.AutoMigrate(&migration.KategoriPertanian{})
	db.AutoMigrate(&migration.FormPengajuan{})
	db.AutoMigrate(&migration.HasilPengajuan{})
	db.AutoMigrate(&migration.Pendanaan{})

	return db
}
