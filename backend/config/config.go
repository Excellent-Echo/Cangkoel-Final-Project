package config

import (
	"backend/migration"

	"github.com/joho/godotenv"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func Connection() *gorm.DB {
	err := godotenv.Load()

	// dbUser := os.Getenv("DB_USERNAME")
	// dbPass := os.Getenv("DB_PASSWORD")
	// dbHost := os.Getenv("DB_HOST")
	// dbName := os.Getenv("DB_NAME")

	// dsn := fmt.Sprintf("%s:%s@tcp(%s)/%s?charset=utf8mb4&parseTime=True&loc=Local", dbUser, dbPass, dbHost, dbName)
	dsn := "root:@tcp(localhost)/cangkoel?charset=utf8mb4&parseTime=True&loc=Local"

	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})

	if err != nil {
		panic(err.Error())
	}

	db.AutoMigrate(&migration.Petani{})
	db.AutoMigrate(&migration.Admin{})
	db.AutoMigrate(&migration.KategoriPertanian{})
	db.AutoMigrate(&migration.FormPengajuan{})
	db.AutoMigrate(&migration.HasilPengajuan{})
	db.AutoMigrate(&migration.Pendanaan{})

	return db
}
