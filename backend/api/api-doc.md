# CANGKOEL RESTFUL API

```
https://cangkoel.herokuapp.com/
```

CANGKOEL adalah sebuah platform yang menyediakan solusi bagi petani/perseorangan yang mempunyai lahan/komoditas namun tidak punya biaya untuk produksi kemudian mengekspor komoditas mereka! tidak punya buyer? kami yang mencarikan!



# List of Available Endpoints

### Users Petani
- `GET /users/petani`
- `POST /users/petani/register`(Primary)
- `POST /users/petani/login`(Primary)
- `GET /users/petani/:id` (Primary)
- `PUT /users/petani/:id`(Primary)
- `DELETE /users/petani/:id`

  
### Formulir Pengajuan
- `GET /formulir-pengajuan`
- `POST /formulir-pengajuan`(Primary)
- `GET /formulir-pengajuan/:id`

  
### Users Investor
- `GET /users/investor`
- `POST /users/investor/register`(Primary)
- `POST /users/investor/login`(Primary)
- `GET /users/investor/:id`(Primary)
- `PUT /users/investor/:id`(Primary)
- `DELETE /users/investor/:id`

  
### Kategori Pertanian
- `GET /kategori-pertanian`(Primary)
- `POST /kategori-pertanian` (Primary)
- `GET /kategori-pertanian/:id `(Primary)
- `PUT /kategori-pertanian/:id`
- `DELETE /kategori-pertanian/:id`

  
### Pendanaan
- `GET /pendanaan/`(Primary)
- `GET /pendanaan/:kategori-pertanian`(Primary)
- `POST /pendanaan/add`(Primary)
- `GET /pendanaan/:id`
- `PUT /pendanaan/edit/:id`
- `DELETE/pendanaan/delete/:id`

  
### Hasil Pengajuan  
- `GET /hasil-pengajuan`(Primary)
- `POST /hasil-pengajuan`(Primary)
- `GET /hasil-pengajuan/:id`
- `PUT /hasil-pengajuan/:id`(Primary)
  
  

## RESTful Endpoints Petani
### GET /users/petani

> Get All users petani

_Request Header_
```json
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_
```
not needed
```

_Response (200)_
```json
{
  "meta" : {
      "message" : "success get all users petani",
      "code" : 200,
      "status" : "success get"
  }, 
  "data" : [
      {
          "id" : 1,
          "full_name" : "Joko Hitler",
          "email" : "jokohitler@mail.com",
          "role" : "petani"
      }, {
          "id" : 2,
          "full_name" : "Abdul Franklin",
          "email" : "abdulfranklin@mail.com",
          "role" : "petani"
      }
      , {
          "id" : 3,
          "full_name" : "Siti Isabella",
          "email" : "sitiisabella@mail.com",
          "role" : "petani"
      }
      , {
          "id" : 4,
          "full_name" : "Michael Parto",
          "email" : "michaelparto@mail.com",
          "role" : "petani"
      }
  ]
}
```

_Response (500 - Internal Server Error)_
```json
{
  "meta" : {
      "message" : "Internal server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : {
      "error" : ""
  }
}
```
---

### POST /users/petani/register

> Create new user petani

_Request Header_
```
not needed
```

_Request Body_
```json
{
  "full_name" : "<full name to get insert into>",
  "email": "<email to get insert into>",
  "password": "<password to get insert into>"
}
```

_Response (201)_
```json
{
  "meta" : {
      "message" : "success create new user petani",
      "code" : 201,
      "status" : "success created"
  }, 
  "data" : 
      {
        "id" : <given id by system>,
        "full_name" : "<posted full name>",
        "email" : "<posted email>",
        "role" : "<posted default petani>"
      }
}
```

_Response (400 - Bad Request)_
```json
{
  "meta" : {
      "message" : "input data required",
      "code" : 400,
      "status" : "bad request"
  }, 
  "data" : 
      {
        "errors" : []
      }
}
```

_Response (500 - Internal Server Error)_
```json
{
  "meta" : {
      "message" : "Internal Server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : 
      {
        "error" : ""
      }
}
```
---

### POST /users/petani/login

> Compare data login on database with data inputed

_Request Header_
```
not needed
```

_Request Body_
```json
{
  "email": "<email to get compare>",
  "password": "<password to get compare>"
}
```

_Response (200)_
```json
{
  "meta" : {
      "message" : "success login user petani",
      "code" : 200,
      "status" : "success"
  }, 
  "data" : 
      {
        "token" : "<your access token>"
      }
}
```

_Response (400 - Bad Request)_
```json
{
  "meta" : {
      "message" : "input data required",
      "code" : 400,
      "status" : "bad request"
  }, 
  "data" : 
      {
        "errors" : []
      }
}
```

_Response (401 - Unauthorized)_
```json
{
    "meta" : {
      "message" : "input data error",
      "code" : 401,
      "status" : "error"
  }, 
  "data" : 
      {
        "error" : ""
      }
}
```

_Response (500 - Internal Server Error)_
```json
{
  "meta" : {
      "message" : "Internal Server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : 
      {
        "error" : ""
      }
}
```
---

### GET /users/petani/:id

> Get user petani by  ID

_Request Header_
```json
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_
```
not needed
```

_Response (200)_
```json
{
  "meta" : {
      "message" : "success get user petani by ID",
      "code" : 200,
      "status" : "success get"
  }, 
  "data" :
      {
        "id" : 4,
        "full_name" : "Michael Parto",
        "email" : "michaelparto@mail.com",
        "role" : "petani",
        "formulir_pengajuan" : {
            "nama_lengkap" : "Michael Parto",
            "nomor_hp" : 6283213231232,
            "jenis_kelamin" : "laki-laki",
            "dokumen_perizinan" : "https://cangkoel.herokuapp.com/dokumen-perizinan/siup.pdf",
            "nomor_npwp" : 93.057.598.0-000.000,
            "ktp": "https://cangkoel.herokuapp.com/file-ktp/ktp.pdf",
            "jenis_usaha" : "pertanian kangkung",
            "tenaga_kerja" : "2 orang",
            "omzet_perbulan" : 50000000,
            "alamat_usaha" : "Jl. Pintu Satu Senayan, Gelora, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10270",
            "petani_id" : 4
        }
      }
}
```
_Response (400 - Bad Request)_
```json
{
    "meta" : {
      "message" : "error bad request user ID",
      "code" : 400,
      "status" : "error"
  }, 
  "data" : 
      {
        "error" : "user id <id? not found"
      }
}
```

_Response (500 - Internal Server Error)_

```json
{
  "meta" : {
      "message" : "Internal server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : {
      "error" : ""
  }
}
```
---

### PUT /users/petani/:id

> Update user petani by ID

_Request Header_
```json
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_
```json
{
    "full_name" : "Michael Parto baru",
    "email" : "michaelpartobaru@mail.com"
}
```

_Response (200)_
```json
{
  "meta" : {
      "message" : "success update user petani by ID",
      "code" : 200,
      "status" : "success updated"
  }, 
  "data" :
      {
        "id" : 4,
        "full_name" : "Michael Parto baru",
        "email" : "michaelpartobaru@mail.com"
      }
}
```

_Response (500 - Internal Server Error)_
```json
{
  "meta" : {
      "message" : "Internal server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : {
      "error" : ""
  }
}
```
---

### DELETE /users/petani/:id

> Delete user petani by ID

_Request Header_
```json
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_
```
not needed
```

_Response (200)_
```json
{
  "meta" : {
      "message" : "success delete user petani by ID",
      "code" : 200,
      "status" : "success deleted"
  }, 
  "data" : "",
}
```

_Response (500 - Internal Server Error)_
```json
{
  "meta" : {
      "message" : "Internal server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : {
      "error" : ""
  }
}
```
---

## RESTful endpoints Formulir Pengajuan
### GET /formulir-pengajuan

> Get all formulir pengajuan

_Request Header_
```json
{
    "Authorization" : "<your Authorization>"
}
```

_Request Body_
```
not needed
```

_Response (200)_
```json
{
  "meta" : {
      "message" : "success get all formulir pengajuan",
      "code" : 200,
      "status" : "success get"
  }, 
  "data" : [
      {
        "id" : 1,
        "nama_lengkap" : "Joko Hitler",
        "nomor_hp" : 6283213054584,
        "jenis_kelamin" : "laki-laki",
        "dokumen_perizinan" : "https://cangkoel.herokuapp.com/dokumen-perizinan/siup.pdf",
        "nomor_npwp" : 93.750.888.0-000.000,
        "ktp": "https://cangkoel.herokuapp.com/file-ktp/ktp.pdf",
        "jenis_usaha" : "pertanian bayam",
        "tenaga_kerja" : "3 orang",
        "omzet_perbulan" : 60000000,
        "alamat_usaha" : "Gambir, Central Jakarta City, Jakarta",
        "petani_id" : 1
      },  
      {
        "id" : 2,
        "nama_lengkap" : "Abdul Franklin",
        "nomor_hp" : 085868884834,
        "jenis_kelamin" : "laki-laki",
        "dokumen_perizinan" : "https://cangkoel.herokuapp.com/dokumen-perizinan/sku.pdf",
        "nomor_npwp" : 92.348.454.0-000.000,
        "ktp": "https://cangkoel.herokuapp.com/file-ktp/ktp.pdf",
        "jenis_usaha" : "pertanian bayam",
        "tenaga_kerja" : "3 orang",
        "omzet_perbulan" : 70000000,
        "alamat_usaha" : "Jl. Merdeka Selatan, Kiduldalem, Kec. Klojen, Kota Malang, Jawa Timur 65119",
        "petani_id" : 2
      },
      {
        "id" : 3,
        "nama_lengkap" : "Siti Isabella",
        "nomor_hp" : 085868459434,
        "jenis_kelamin" : "Perempuan",
        "dokumen_perizinan" : "https://cangkoel.herokuapp.com/dokumen-perizinan/siup.pdf",
        "nomor_npwp" : 91.545.767.0-000.000,
        "ktp": "https://cangkoel.herokuapp.com/file-ktp/ktp.pdf",
        "jenis_usaha" : "pertanian sawi hijau",
        "tenaga_kerja" : "1 orang",
        "omzet_perbulan" : 45000000,
        "alamat_usaha" : "Kauman, Central Semarang, Semarang City, Central Java 50188",
        "petani_id" : 3
      },
      {
          "id" : 4,
          "nama_lengkap" : "Michael Parto",
          "nomor_hp" : 6283213231232,
          "jenis_kelamin" : "laki-laki",
          "dokumen_perizinan" : "https://cangkoel.herokuapp.com/dokumen-perizinan/siup.pdf",
          "nomor_npwp" : 93.057.598.0-000.000,
          "ktp": "https://cangkoel.herokuapp.com/file-ktp/ktp.pdf",
          "jenis_usaha" : "pertanian kangkung",
          "tenaga_kerja" : "2 orang",
          "omzet_perbulan" : 50000000,
          "alamat_usaha" : "Jl. Pintu Satu Senayan, Gelora, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10270",
          "petani_id" : 4
      }
  ]
}
```

_Response (500 - Internal Server Error)_
```json
{
  "meta" : {
      "message" : "Internal server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : {
      "error" : ""
  }
}
```
---

### POST /formulir-pengajuan

> Create new formulir pengajuan

_Request Header_
```
{
    "Authorization" : "<your Authorization>"
}
```

_Request Body_
```json
{
  "nama_lengkap" : "<string nama lengkap to get insert into>",
  "nomor_hp" : "<int nomor hp to get insert into>",
  "jenis_kelamin" : "<string jenis kelamin to get insert into>",
  "dokumen_perizinan": "<Upload file pdf dokumen perizinan to get insert into>",
  "nomor_npwp": "<int nomor npwp to get insert into>",
  "ktp" : "<Upload file image jpg or png ktp to get insert into>",
  "jenis_usaha" : "<string jenis usaha to get insert into>",
  "tenaga_kerja" : "<string tenaga kerja to get insert into>",
  "omzet_perbulan" : "<int omzet perbulan to get insert into>",
  "alamat_usaha" : "<string alamat usaha to get insert into>"
}
```

_Response (201)_
```json
{
  "meta" : {
      "message" : "success create new formulir pengajuan",
      "code" : 201,
      "status" : "status created"
  }, 
  "data" : 
      {
        "id" : 4,
        "nama_lengkap" : "Michael Parto",
        "nomor_hp" : 6283213231232,
        "jenis_kelamin" : "laki-laki",
        "dokumen_perizinan" : "https://cangkoel.herokuapp.com/dokumen-perizinan/siup.pdf",
        "nomor_npwp" : 93.057.598.0-000.000,
        "ktp": "https://cangkoel.herokuapp.com/file-ktp/ktp.pdf",
        "jenis_usaha" : "pertanian kangkung",
        "tenaga_kerja" : "2 orang",
        "omzet_perbulan" : 50000000,
        "alamat_usaha" : "Jl. Pintu Satu Senayan, Gelora, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10270"
      }
}
```

_Response (400 - Bad Request)_
```json
{
  "meta" : {
      "message" : "input data required",
      "code" : 400,
      "status" : "bad request"
  }, 
  "data" : 
      {
        "errors" : []
      }
}
```

_Response (500 - Internal Server Error)_
```json
{
  "meta" : {
      "message" : "Internal Server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : 
      {
        "error" : ""
      }
}
```
---

### GET /formulir-pengajuan/:id

> Get formulir pengajuan by  ID

_Request Header_
```json
{
    "Authorization" : "<your Authorization>"
}
```

_Request Body_
```
not needed
```

_Response (200)_
```json
{
  "meta" : {
      "message" : "success get formulir pengajuan by ID",
      "code" : 200,
      "status" : "success get"
  }, 
  "data" :
      {
          "id" : 4,
          "nama_lengkap" : "Michael Parto",
          "nomor_hp" : 6283213231232,
          "jenis_kelamin" : "laki-laki",
          "dokumen_perizinan" : "https://cangkoel.herokuapp.com/dokumen-perizinan/siup.pdf",
          "nomor_npwp" : 93.057.598.0-000.000,
          "ktp": "https://cangkoel.herokuapp.com/file-ktp/ktp.pdf",
          "jenis_usaha" : "pertanian kangkung",
          "tenaga_kerja" : "2 orang",
          "omzet_perbulan" : 50000000,
          "alamat_usaha" : "Jl. Pintu Satu Senayan, Gelora, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10270",
          "petani_id" : 4
        }
      }
}
```

*Response (401 - Unauthorized)*

```
{
    "meta" : {
      "message" : "status unauthorize",
      "code" : 401,
      "status" : "error"
  }, 
  "data" : 
      {
        "error" : ""
      }
}
```

_Response (500 - Internal Server Error)_

```json
{
  "meta" : {
      "message" : "Internal server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : {
      "error" : ""
  }
}
```
---

## RESTful Endpoints Investor
### GET /users/investor

> Get All users petani

_Request Header_
```json
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_
```
not needed
```

_Response (200)_
```json
{
  "meta" : {
      "message" : "success get all users investor",
      "code" : 200,
      "status" : "success get"
  }, 
  "data" : [
      {
          "id" : 1,
          "full_name" : "Muhamad Aziz",
          "email" : "muhamadaziz@mail.com",
          "role" : "investor"
      }, {
          "id" : 2,
          "full_name" : "Angga Prasetya Wibawa",
          "email" : "anggaprasetya@mail.com",
          "role" : "investor"
      }
      , {
          "id" : 3,
          "full_name" : "Pandu Wilanthara",
          "email" : "panduwilanthara@mail.com",
          "role" : "investor"
      }
      , {
          "id" : 4,
          "full_name" : "Ah Rifqi Ubaidilah",
          "email" : "rifqiubaidilah@mail.com",
          "role" : "investor"
      }
  ]
}
```

_Response (500 - Internal Server Error)_
```json
{
  "meta" : {
      "message" : "Internal server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : {
      "error" : ""
  }
}
```
---

### POST /users/investor/register

> Create new user investor

_Request Header_
```
not needed
```

_Request Body_
```json
{
  "full_name" : "<full name to get insert into>",
  "email": "<email to get insert into>",
  "password": "<password to get insert into>"
}
```

_Response (201)_
```json
{
  "meta" : {
      "message" : "success create new user investor",
      "code" : 201,
      "status" : "success created"
  }, 
  "data" : 
      {
        "id" : <given id by system>,
        "full_name" : "<posted full name>",
        "email" : "<posted email>",
        "role" : "<posted default investor>"
      }
}
```

_Response (400 - Bad Request)_
```json
{
  "meta" : {
      "message" : "input data required",
      "code" : 400,
      "status" : "bad request"
  }, 
  "data" : 
      {
        "errors" : []
      }
}
```

_Response (500 - Internal Server Error)_
```json
{
  "meta" : {
      "message" : "Internal Server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : 
      {
        "error" : ""
      }
}
```
---

### POST /users/investor/login

> Compare data login on database with data inputed

_Request Header_
```
not needed
```

_Request Body_
```json
{
  "email": "<email to get compare>",
  "password": "<password to get compare>"
}
```

_Response (200)_
```json
{
  "meta" : {
      "message" : "success login user investor",
      "code" : 200,
      "status" : "success login"
  }, 
  "data" : 
      {
        "token" : "<your access token>"
      }
}
```

_Response (400 - Bad Request)_
```json
{
  "meta" : {
      "message" : "input data required",
      "code" : 400,
      "status" : "bad request"
  }, 
  "data" : 
      {
        "errors" : []
      }
}
```

_Response (401 - Unauthorized)_
```json
{
    "meta" : {
      "message" : "input data error",
      "code" : 401,
      "status" : "error"
  }, 
  "data" : 
      {
        "error" : ""
      }
}
```

_Response (500 - Internal Server Error)_
```json
{
  "meta" : {
      "message" : "Internal Server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : 
      {
        "error" : ""
      }
}
```
---

### GET /users/investor/:id

> Get user investor by  ID

_Request Header_
```json
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_
```
not needed
```

_Response (200)_
```json
{
  "meta" : {
      "message" : "success get user investor by ID",
      "code" : 200,
      "status" : "success get"
  }, 
  "data" :
      {
        "id" : 1,
        "full_name" : "Muhamad Aziz",
        "email" : "muhamadaziz@mail.com",
        "role" : "investor",
        "pendanaan" : {
            "foto_profil" : "https://cangkoel.herokuapp.com/profil/foto-profil.jpg",
            "nama_investor" : "Muhamad Aziz",
            "judul_pendanaan" : "Pendanaan sayur kangkung",
            "nominal_pendanaan" : "100000000",
            "perusahaan_pengirim" : "PT. Trisula Kargo Ekspresindo",
            "bagi_hasil_investor" : 40,
            "bagi_hasil_petani" : 25,
            "kebutuhan_komoditas" : "1 Ton",
            "jangka_waktu": "8 - 24 Bulan",
            "keuntungan_bersih" : "Rp 50.000.000",
            "deskripsi" : "Dibuka pendanaan untuk petani yang memiliki lahan penanaman sayur kangkung berkualitas, diutamakan daerah Jawa Barat, Jawa Tengah, dan Jawa timur. ",
            "biaya_operasional" : "Benih 5000000, Pupuk 6500000, Pestisida 759444, gaji karyawan 100000000",
            "biaya_ekspor" : "ongkos kirim 7000000, pajak 2000000, biaya kontainer 1000000, pengurusan dokumen 2000000",
            "perhitungan_penghasilan" : "1000 kg x 150000 = 150000000",
            "perhitungan_keuntungan" : "150000000 - 100000000 = 50000000",
            "kategori_pertanian_id" : 1,
            "investor_id" : 1
        }
      }
}
```

*Response (400 - Bad Request)*

```
{
  "meta" : {
      "message" : "error bad request user ID",
      "code" : 400,
      "status" : "error"
  }, 
  "data" : 
      {
        "errors" : "user id <id? not found"
      }
}
```

_Response (500 - Internal Server Error)_

```json
{
  "meta" : {
      "message" : "Internal server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : {
      "error" : ""
  }
}
```
---

### PUT /users/investor/:id

> Update user investor by ID

_Request Header_
```json
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_
```json
{
    "full_name" : "Muhamad Aziz baru",
    "email" : "muhamadazizbaru@mail.com"
}
```

_Response (200)_
```json
{
  "meta" : {
      "message" : "success update user investor by ID",
      "code" : 200,
      "status" : "success updated"
  }, 
  "data" :
      {
        "id" : 1,
        "full_name" : "Muhamad Aziz baru",
        "email" : "muhamadazizbaru@mail.com"
      }
}
```

_Response (500 - Internal Server Error)_
```json
{
  "meta" : {
      "message" : "Internal server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : {
      "error" : ""
  }
}
```
---

### DELETE /users/investor/:id

> Delete user investor by ID

_Request Header_
```json
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_
```
not needed
```

_Response (200)_
```json
{
  "meta" : {
      "message" : "success delete user investor by ID",
      "code" : 200,
      "status" : "success deleted"
  }, 
  "data" : "",
}
```

_Response (500 - Internal Server Error)_
```json
{
  "meta" : {
      "message" : "Internal server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : {
      "error" : ""
  }
}
```
---
---

## RESTful Endpoints Kategori Pertanian   
### GET /kategori-pertanian

> Get all kategori pertanian

_Request Header_
```json
not needed
```

_Request Body_
```
not needed
```

_Response (200)_
```json
{
  "meta" : {
      "message" : "success get all kategori pertanian",
      "code" : 200,
      "status" : "success get"
  }, 
  "data" : [
      {
          "id" : 1,
          "nama_kategori" : "Pendanaan Ekspor Tanaman Sayur",
          "foto_kategori" : "https://cangkoel.herokuapp.com/profil-kategori/foto-kategori.jpg"
      }, {
          "id" : 2,
          "nama_kategori" : "Pendanaan Ekspor Tanaman Buah",
          "foto_kategori" : "https://cangkoel.herokuapp.com/profil-kategori/foto kategori.jpg"
      }
      , {
          "id" : 3,
          "nama_kategori" : "Pendanaan Ekspor Tanaman Industri",
          "foto_kategori" : "https://cangkoel.herokuapp.com/profil-kategori/foto-kategori.jpg"
      }
      , {
          "id" : 4,
          "nama_kategori" : "Pendanaan Ekspor Tanaman Pangan",
          "foto_kategori" : "https://cangkoel.herokuapp.com/profil-kategori/foto-kategori.jpg"
      },
      {
          "id" : 5,
          "nama_kategori" : "Pendanaan Ekspor Tanaman Hias",
          "foto_kategori" : "https://cangkoel.herokuapp.com/profil-kategori/foto-kategori.jpg"
      },
      {
          "id" : 6,
          "nama_kategori" : "Pendanaan Ekspor Tanaman Umbi",
          "foto_kategori" : "https://cangkoel.herokuapp.com/profil-kategori/foto-kategori.jpg"
      }
  ]
}
```

_Response (500 - Internal Server Error)_
```json
{
  "meta" : {
      "message" : "Internal server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : {
      "error" : ""
  }
}
```
---

### POST /kategori-pertanian

> Create new kategori pertanian

_Request Header_
```
{
    "Authorization" : "<your Authorization>"
}
```

_Request Body_
```json
{
  "nama_kategori" : "<string nama kategori to get insert into>",
  "foto_kategori" : "<upload file image jpg or png kategori to get insert into>"
}
```

_Response (201)_
```json
{
  "meta" : {
      "message" : "success create new kategori pertanian",
      "code" : 201,
      "status" : "success created"
  }, 
  "data" : 
      {
        "id" : <given id by system>,
        "nama_kategori" : "<posted nama kategori>",
        "foto_kategori" : "<posted file image jpg or png>"
      }
}
```

_Response (400 - Bad Request)_
```json
{
  "meta" : {
      "message" : "input data required",
      "code" : 400,
      "status" : "bad request"
  }, 
  "data" : 
      {
        "errors" : []
      }
}
```

_Response (500 - Internal Server Error)_
```json
{
  "meta" : {
      "message" : "Internal Server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : 
      {
        "error" : ""
      }
}
```
---

---

### GET /kategori-pertanian/:id

> Get kategori pertanian by  ID

_Request Header_
```json
not needed
```

_Request Body_
```
not needed
```

_Response (200)_
```json
{
  "meta" : {
      "message" : "success get kategori pertanian by ID",
      "code" : 200,
      "status" : "success get"
  }, 
  "data" :
      {
        "id" : 1,
        "nama_kategori" : "Pendanaan Ekspor Tanaman Sayur",
        "foto_kategori" : "https://cangkoel.herokuapp.com/profil-kategori/foto-kategori.jpg",
        "pendanaan" : [
        {
        	"id" : 1,
            "foto_profil" : "https://cangkoel.herokuapp.com/profil/foto-profil.jpg",
            "nama_investor" : "Muhamad Aziz",
            "judul_pendanaan" : "Pendanaan sayur kangkung",
            "nominal_pendanaan" : "100000000",
            "perusahaan_pengirim" : "PT. Trisula Kargo Ekspresindo",
            "bagi_hasil_investor" : 40,
            "bagi_hasil_petani" : 25,
            "kebutuhan_komoditas" : "1 Ton",
            "jangka_waktu": "8 - 24 Bulan",
            "keuntungan_bersih" : "Rp 50.000.000",
            "deskripsi" : "Dibuka pendanaan untuk petani yang memiliki lahan penanaman sayur kangkung berkualitas, diutamakan daerah Jawa Barat, Jawa Tengah, dan Jawa timur. ",
            "biaya_operasional" : "Benih 5000000, Pupuk 6500000, Pestisida 759444, gaji karyawan 100000000",
            "biaya_ekspor" : "ongkos kirim 7000000, pajak 2000000, biaya kontainer 1000000, pengurusan dokumen 2000000",
            "perhitungan_penghasilan" : "1000 kg x 150000 = 150000000",
            "perhitungan_keuntungan" : "150000000 - 100000000 = 50000000",
            "kategori_pertanian_id" : 1,
            "investor_id" : 1
        },
        {
        	"id" : 2,
            "foto_profil" : "https://cangkoel.herokuapp.com/profil/foto-profil.jpg",
            "nama_investor" : "Pandu Wilanthara",
            "judul_pendanaan" : "Pendanaan sayur kangkung",
            "nominal_pendanaan" : "20000000",
            "perusahaan_pengirim" : "PT. Trisula Kargo Ekspresindo",
            "bagi_hasil_investor" : 5,
            "bagi_hasil_petani" : 3,
            "kebutuhan_komoditas" : "2 on",
            "jangka_waktu": "8 - 24 Bulan",
            "keuntungan_bersih" : "Rp 10000.000",
            "deskripsi" : "Dibuka pendanaan untuk petani yang memiliki lahan penanaman sayur kangkung berkualitas, diutamakan daerah Jawa Barat, Jawa Tengah, dan Jawa timur. ",
            "biaya_operasional" : "Benih 5000000, Pupuk 6500000, Pestisida 759444, gaji karyawan 100000000",
            "biaya_ekspor" : "ongkos kirim 7000000, pajak 2000000, biaya kontainer 1000000, pengurusan dokumen 2000000",
            "perhitungan_penghasilan" : "1000 kg x 150000 = 150000000",
            "perhitungan_keuntungan" : "150000000 - 100000000 = 50000000",
            "kategori_pertanian_id" : 1,
            "investor_id" : 2
        },
        ]
      }
}
```

_Response (500 - Internal Server Error)_
```json
{
  "meta" : {
      "message" : "Internal server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : {
      "error" : ""
  }
}
```
---

### PUT /kategori-pertanian/:id

> Update kategori pertanian by ID

_Request Header_
```json
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_
```json
{
    "nama_kategori" : "Pendanaan Ekspor Tanaman Sayur Baru",
    "foto_kategori" : "https://cangkoel.herokuapp.com/profil-kategori/foto-kategori-aru.jpg"
}
```

_Response (200)_
```json
{
  "meta" : {
      "message" : "success update kategori pertanian by ID",
      "code" : 200,
      "status" : "success updated"
  }, 
  "data" :
      {
        "id" : 1,
        "nama_kategori" : "Pendanaan Ekspor Tanaman Sayur Baru",
    	"foto_kategori" : "https://cangkoel.herokuapp.com/profil-kategori/foto-kategori-aru.jpg"
      }
}
```

*Response (400 - Bad Request)*

```
{
  "meta" : {
      "message" : "error bad request",
      "code" : 400,
      "status" : "error"
  }, 
  "data" : 
      {
        "errors" : []
      }
}
```

*Response (401 - Unauthorized)*

```
{
    "meta" : {
      "message" : "status unauthorize",
      "code" : 401,
      "status" : "error"
  }, 
  "data" : 
      {
        "error" : ""
      }
}
```

_Response (500 - Internal Server Error)_

```json
{
  "meta" : {
      "message" : "Internal server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : {
      "error" : ""
  }
}
```
---

### DELETE /kategori-pertanian/:id

> Delete kategori pertanian by ID

_Request Header_
```json
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_
```
not needed
```

_Response (200)_
```json
{
  "meta" : {
      "message" : "success delete kategori pertanian by ID",
      "code" : 200,
      "status" : "success deleted"
  }, 
  "data" : "",
}
```

*Response (400 - Bad Request)*

```
{
  "meta" : {
      "message" : "error bad request",
      "code" : 400,
      "status" : "error"
  }, 
  "data" : 
      {
        "error" :  ""
      }
}
```

_Response (500 - Internal Server Error)_

```json
{
  "meta" : {
      "message" : "Internal server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : {
      "error" : ""
  }
}
```
---
## RESTful Endpoints Pendanaan
### GET /pendanaan

> Get all pendanaan 

_Request Header_
```json
not needed
```

_Request Body_
```
not needed
```

_Response (200)_
```json
{
  "meta" : {
      "message" : "success get all pendanaan",
      "code" : 200,
      "status" : "success get"
  }, 
  "data" : [
      {
          "id" : 1,
          "foto_profil" : "https://cangkoel.herokuapp.com/profil/foto-profil.jpg",
          "nama_investor" : "Muhamad Aziz",
          "judul_pendanaan" : "Pendanaan sayur kangkung",
          "nominal_pendanaan" : "100000000",
          "perusahaan_pengirim" : "PT. Trisula Kargo Ekspresindo",
          "bagi_hasil_investor" : 40,
          "bagi_hasil_petani" : 25,
          "kebutuhan_komoditas" : "1 Ton",
          "jangka_waktu": "8 - 24 Bulan",
          "keuntungan_bersih" : "Rp 50.000.000",
          "deskripsi" : "Dibuka pendanaan untuk petani yang memiliki lahan penanaman sayur kangkung berkualitas, diutamakan daerah Jawa Barat, Jawa Tengah, dan Jawa timur. ",
          "biaya_operasional" : "Benih 5000000, Pupuk 6500000, Pestisida 759444, gaji karyawan 100000000",
          "biaya_ekspor" : "ongkos kirim 7000000, pajak 2000000, biaya kontainer 1000000, pengurusan dokumen 2000000",
          "perhitungan_penghasilan" : "1000 kg x 150000 = 150000000",
          "perhitungan_keuntungan" : "150000000 - 100000000 = 50000000",
          "kategori_pertanian_id" : 1,
          "investor_id" : 1
      }, {
          "id" : 2,
          "foto_profil" : "https://cangkoel.herokuapp.com/profil/foto-profil.jpg",
          "nama_investor" : "Pandu Wilanthara",
          "judul_pendanaan" : "Pendanaan sayur kangkung",
          "nominal_pendanaan" : "20000000",
          "perusahaan_pengirim" : "PT. Trisula Kargo Ekspresindo",
          "bagi_hasil_investor" : 5,
          "bagi_hasil_petani" : 3,
          "kebutuhan_komoditas" : "2 on",
          "jangka_waktu": "8 - 24 Bulan",
          "keuntungan_bersih" : "Rp 10000.000",
          "deskripsi" : "Dibuka pendanaan untuk petani yang memiliki lahan penanaman sayur kangkung berkualitas, diutamakan daerah Jawa Barat, Jawa Tengah, dan Jawa timur. ",
          "biaya_operasional" : "Benih 5000000, Pupuk 6500000, Pestisida 759444, gaji karyawan 100000000",
          "biaya_ekspor" : "ongkos kirim 7000000, pajak 2000000, biaya kontainer 1000000, pengurusan dokumen 2000000",
          "perhitungan_penghasilan" : "1000 kg x 150000 = 150000000",
          "perhitungan_keuntungan" : "150000000 - 100000000 = 50000000",
          "kategori_pertanian_id" : 1,
          "investor_id" : 2
      }
  ]
}
```

_Response (500 - Internal Server Error)_
```json
{
  "meta" : {
      "message" : "Internal server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : {
      "error" : ""
  }
}
```
---
### GET /pendanaan/:kategori-pertanian

> Get all pendanaan by kategori_pertanian_id

_Request Header_
```json
not needed
```

_Request Body_
```
not needed
```

_Response (200)_
```json
{
  "meta" : {
      "message" : "success get all pendanaan by kategori_pertanian_id",
      "code" : 200,
      "status" : "success get"
  }, 
  "data" : [
      {
          "id" : 1,
          "foto_profil" : "https://cangkoel.herokuapp.com/profil/foto-profil.jpg",
          "nama_investor" : "Muhamad Aziz",
          "judul_pendanaan" : "Pendanaan sayur kangkung",
          "nominal_pendanaan" : "100000000",
          "perusahaan_pengirim" : "PT. Trisula Kargo Ekspresindo",
          "bagi_hasil_investor" : 40,
          "bagi_hasil_petani" : 25,
          "kebutuhan_komoditas" : "1 Ton",
          "jangka_waktu": "8 - 24 Bulan",
          "keuntungan_bersih" : "Rp 50.000.000",
          "deskripsi" : "Dibuka pendanaan untuk petani yang memiliki lahan penanaman sayur kangkung berkualitas, diutamakan daerah Jawa Barat, Jawa Tengah, dan Jawa timur. ",
          "biaya_operasional" : "Benih 5000000, Pupuk 6500000, Pestisida 759444, gaji karyawan 100000000",
          "biaya_ekspor" : "ongkos kirim 7000000, pajak 2000000, biaya kontainer 1000000, pengurusan dokumen 2000000",
          "perhitungan_penghasilan" : "1000 kg x 150000 = 150000000",
          "perhitungan_keuntungan" : "150000000 - 100000000 = 50000000",
          "kategori_pertanian_id" : 1,
          "investor_id" : 1
      }, {
          "id" : 2,
          "foto_profil" : "https://cangkoel.herokuapp.com/profil/foto-profil.jpg",
          "nama_investor" : "Pandu Wilanthara",
          "judul_pendanaan" : "Pendanaan sayur kangkung",
          "nominal_pendanaan" : "20000000",
          "perusahaan_pengirim" : "PT. Trisula Kargo Ekspresindo",
          "bagi_hasil_investor" : 5,
          "bagi_hasil_petani" : 3,
          "kebutuhan_komoditas" : "2 on",
          "jangka_waktu": "8 - 24 Bulan",
          "keuntungan_bersih" : "Rp 10000.000",
          "deskripsi" : "Dibuka pendanaan untuk petani yang memiliki lahan penanaman sayur kangkung berkualitas, diutamakan daerah Jawa Barat, Jawa Tengah, dan Jawa timur. ",
          "biaya_operasional" : "Benih 5000000, Pupuk 6500000, Pestisida 759444, gaji karyawan 100000000",
          "biaya_ekspor" : "ongkos kirim 7000000, pajak 2000000, biaya kontainer 1000000, pengurusan dokumen 2000000",
          "perhitungan_penghasilan" : "1000 kg x 150000 = 150000000",
          "perhitungan_keuntungan" : "150000000 - 100000000 = 50000000",
          "kategori_pertanian_id" : 1,
          "investor_id" : 2
      }
  ]
}
```

_Response (500 - Internal Server Error)_
```json
{
  "meta" : {
      "message" : "Internal server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : {
      "error" : ""
  }
}
```
---

### POST /pendanaan/add

> Create new pendanaan

_Request Header_
```
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_
```json
{
	"foto_profil" : "https://cangkoel.herokuapp.com/profil/foto-profil.jpg",
    "nama_investor" : "Muhamad Aziz",
    "judul_pendanaan" : "Pendanaan sayur kangkung",
    "nominal_pendanaan" : "100000000",
    "perusahaan_pengirim" : "PT. Trisula Kargo Ekspresindo",
    "bagi_hasil_investor" : 40,
    "bagi_hasil_petani" : 25,
    "kebutuhan_komoditas" : "1 Ton",
    "jangka_waktu": "8 - 24 Bulan",
    "keuntungan_bersih" : "Rp 50.000.000",
    "deskripsi" : "Dibuka pendanaan untuk petani yang memiliki lahan penanaman sayur kangkung berkualitas, diutamakan daerah Jawa Barat, Jawa Tengah, dan Jawa timur. ",
    "biaya_operasional" : "Benih 5000000, Pupuk 6500000, Pestisida 759444, gaji karyawan 100000000",
    "biaya_ekspor" : "ongkos kirim 7000000, pajak 2000000, biaya kontainer 1000000, pengurusan dokumen 2000000",
    "perhitungan_penghasilan" : "1000 kg x 150000 = 150000000",
    "perhitungan_keuntungan" : "150000000 - 100000000 = 50000000",
    "kategori_pertanian_id" : 1
}
```

_Response (201)_
```json
{
  "meta" : {
      "message" : "success create new pendanaan",
      "code" : 201,
      "status" : "success created"
  }, 
  "data" : 
      {
        "id" : <given id by system>,
        "foto_profil" : "<posted foto profil>",
		"nama_investor" : "<posted nama investor>",
 		"judul_pendanaan" : "<posted judul pendanaan>",
 		"nominal_pendanaan" : "<posted nominal pendanaan>",
 		"perusahaan_pengirim" : "<posted perusahaan pengirim>",
 		"bagi_hasil_investor" : "<posted bagi hasil investor>",
 		"bagi_hasil_petani" : "<posted bagi hasil petani>",
 		"kebutuhan_komoditas" : "<posted kebutuhan komoditas>",
 		"jangka_waktu" : "<posted jangka waktu>",
 		"keuntungan_bersih" : "<posted keuntungan bersih>",
 		"deskripsi" : "<posted deskripsi>",
        "biaya_operasional" : "<posted biaya operasional>",
        "biaya_ekspor" : "<posted biaya ekspor>",
        "perhitungan_penghasilan" : "<posted perhitungan penghasilan>",
        "perhitungan_keuntungan" : "<posted perhitungan keuntungan>",
        "kategori_pertanian_id" : "<posted id kategori pertanian>"
      }
}
```

_Response (400 - Bad Request)_
```json
{
  "meta" : {
      "message" : "input data required",
      "code" : 400,
      "status" : "bad request"
  }, 
  "data" : 
      {
        "errors" : []
      }
}
```

*Response (400 - Bad Request)*

```
{
  "meta" : {
      "message" : "input data required",
      "code" : 400,
      "status" : "bad request"
  }, 
  "data" : {
      "errors" : []
  }
}
```

_Response (500 - Internal Server Error)_

```json
{
  "meta" : {
      "message" : "Internal Server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : 
      {
        "error" : ""
      }
}
```
---

### GET /pendanaan/:id
> Get pendanaan by ID

_Request Header_
```json
not needed
```

_Request Body_
```
not needed
```

_Response (200)_
```json
{
  "meta" : {
      "message" : "success get pendanaan by ID",
      "code" : 200,
      "status" : "success get"
  }, 
  "data" :
      {
        "id" : 1,
        "foto_profil" : "https://cangkoel.herokuapp.com/profil/foto-profil.jpg",
    	"nama_investor" : "Muhamad Aziz",
    	"judul_pendanaan" : "Pendanaan sayur kangkung",
    	"nominal_pendanaan" : "100000000",
    	"perusahaan_pengirim" : "PT. Trisula Kargo Ekspresindo",
    	"bagi_hasil_investor" : 40,
    	"bagi_hasil_petani" : 25,
    	"kebutuhan_komoditas" : "1 Ton",
    	"jangka_waktu": "8 - 24 Bulan",
    	"keuntungan_bersih" : "Rp 50.000.000",
    	"deskripsi" : "Dibuka pendanaan untuk petani yang memiliki lahan penanaman sayur kangkung berkualitas, diutamakan daerah Jawa Barat, Jawa Tengah, dan Jawa timur. ",
    	"biaya_operasional" : "Benih 5000000, Pupuk 6500000, Pestisida 759444, gaji karyawan 100000000",
    	"biaya_ekspor" : "ongkos kirim 7000000, pajak 2000000, biaya kontainer 1000000, pengurusan dokumen 2000000",
    	"perhitungan_penghasilan" : "1000 kg x 150000 = 150000000",
    	"perhitungan_keuntungan" : "150000000 - 100000000 = 50000000",
        "kategori_pertanian_id" : 1
      }
}
```

_Response (500 - Internal Server Error)_
```json
{
  "meta" : {
      "message" : "Internal server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : {
      "error" : ""
  }
}
```
---

### PUT /pendanaan/edit/:id

> Update pendanaan by ID

_Request Header_
```json
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_
```json
{
   "foto_profil" : "https://cangkoel.herokuapp.com/profil/foto-profil-baru.jpg",
   "nama_investor" : "Angga Prasetya Wibawa",
   "judul_pendanaan" : "Pendanaan sayur kangkung mantap",
   "nominal_pendanaan" : "1000000000",
   "perusahaan_pengirim" : "PT. Trisula Kargo Ekspresindo",
   "bagi_hasil_investor" : 50,
   "bagi_hasil_petani" : 45,
   "kebutuhan_komoditas" : "2 Ton",
   "jangka_waktu": "12 Bulan",
   "keuntungan_bersih" : "Rp 100.000.000",
   "deskripsi" : "Dibuka pendanaan untuk petani yang memiliki lahan penanaman sayur kangkung berkualitas, diutaman di daerah kalimantan",
   "biaya_ekspor" : "ongkos kirim 7000000, pajak 2000000, biaya kontainer 1000000, pengurusan dokumen 2000000",
   "perhitungan_penghasilan" : "2000 kg x 550000 = 1100000000",
   "perhitungan_keuntungan" : "1100000000 - 1000000000 = 100000000",
   "kategori_pertanian_id" : 1
}
```

_Response (200)_
```json
{
  "meta" : {
      "message" : "success update pendanaan by ID",
      "code" : 200,
      "status" : "success updated"
  }, 
  "data" :
      {
        "id" : 1,
        "foto_profil" : "https://cangkoel.herokuapp.com/profil/foto-profil-baru.jpg",
   		"nama_investor" : "Angga Prasetya Wibawa",
   		"judul_pendanaan" : "Pendanaan sayur kangkung mantap",
   		"nominal_pendanaan" : "1000000000",
   		"perusahaan_pengirim" : "PT. Trisula Kargo Ekspresindo",
   		"bagi_hasil_investor" : 50,
   		"bagi_hasil_petani" : 45,
   		"kebutuhan_komoditas" : "2 Ton",
   		"jangka_waktu": "12 Bulan",
   		"keuntungan_bersih" : "Rp 100.000.000",
   		"deskripsi" : "Dibuka pendanaan untuk petani yang memiliki lahan penanaman sayur kangkung berkualitas, diutaman di daerah kalimantan",
   		"biaya_ekspor" : "ongkos kirim 7000000, pajak 2000000, biaya kontainer 1000000, pengurusan dokumen 2000000",
   		"perhitungan_penghasilan" : "2000 kg x 550000 = 1100000000",
   		"perhitungan_keuntungan" : "1100000000 - 1000000000 = 100000000",
   		"kategori_pertanian_id" : 1
      }
}
```

*Response (400 - Bad Request)*

```
{
  "meta" : {
      "message" : "input data required",
      "code" : 400,
      "status" : "bad request"
  }, 
  "data" : {
      "errors" : []
  }
}
```

*Response (401 - Unauthorized)*

```
{
    "meta" : {
      "message" : "Unauthorize",
      "code" : 401,
      "status" : "error"
  }, 
  "data" : 
      {
        "error" : ""
      }
}
```

_Response (500 - Internal Server Error)_

```json
{
  "meta" : {
      "message" : "Internal server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : {
      "error" : ""
  }
}
```
---

### DELETE /pendanaan/delete/:id

> Delete pendanaan by ID

_Request Header_
```json
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_
```
not needed
```

_Response (200)_
```json
{
  "meta" : {
      "message" : "success delete pendanaan by ID",
      "code" : 200,
      "status" : "success deleted"
  }, 
  "data" : "",
}
```

*Response (400 - Bad Request)*

```
{
  "meta" : {
      "message" : "error bad request",
      "code" : 400,
      "status" : "error"
  }, 
  "data" : 
      {
        "error" :  ""
      }
}
```

_Response (500 - Internal Server Error)_

```json
{
  "meta" : {
      "message" : "Internal server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : {
      "error" : ""
  }
}
```
---
---
## RESTful Endpoints Hasil Pengajuan
### GET /hasil-pengajuan

> Get all hasil pengajuan

_Request Header_
```json
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_
```
not needed
```

_Response (200)_
```json
{
  "meta" : {
      "message" : "success get all hasil pengajuan",
      "code" : 200,
      "status" : "success get"
  }, 
  "data" : [
      {
          "id" : 1,
          "petani_id" : 1,
          "investor_id" : 1,
          "status" : "Review",
          "keterangan" : "Pihak Cangkoel dan Investor sedang mereview pendanaan yang diajukan oleh pihak  petani",
          "formulir_pengajuan_id" : 1 
      }, 
      {
          "id" : 2,
          "petani_id" : 2,
          "investor_id" : 1,
          "status" : "Review",
          "keterangan" : "Pihak Cangkoel dan Investor sedang mereview pendanaan yang diajukan oleh pihak  petani",
          "formulir_pengajuan_id" : 2
      }, 
      {
          "id" : 3,
          "petani_id" : 3,
          "investor_id" : 1,
          "status" : "Review",
          "keterangan" : "Pihak Cangkoel dan Investor sedang mereview pendanaan yang diajukan oleh pihak  petani",
          "formulir_pengajuan_id" : 3
      },
      {
          "id" : 3,
          "petani_id" : 4,
          "investor_id" : 1,
          "status" : "Approve",
          "keterangan" : "Pihak Cangkoel dan Investor sedang mensetujui anda sebagai pihak yang resmi bekerjasama dengan pihak investor",
          "formulir_pengajuan_id" : 4
      }
  ]
}
```

_Response (500 - Internal Server Error)_
```json
{
  "meta" : {
      "message" : "Internal server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : {
      "error" : ""
  }
}
```
---

### POST /hasil-pengajuan

> Create new hasil pengajuan

_Request Header_
```
{
    "Authorization" : "<your Authorization>"
}
```

_Request Body_
```json
{
  "petani_id" : "<int petani id to get insert into>",
  "investor_id" : "<int investor id to get insert into>",
  "status" : "<string status to get insert into>",
  "keterangan" : "<string keterangan to get insert into>",
  "formulir_pengajuan_id" : "<int formulir pengajuan to get insert into>"
}
```

_Response (201)_
```json
{
  "meta" : {
      "message" : "success create new hasil pengajuan",
      "code" : 201,
      "status" : "success created"
  }, 
  "data" : 
      {
        "id" : <given id by system>,
        "petani_id" : "<posted full name>",
        "email" : "<posted email>",
        "position" : "<posted position>"
      }
}
```

_Response (400 - Bad Request)_
```json
{
  "meta" : {
      "message" : "input data required",
      "code" : 400,
      "status" : "bad request"
  }, 
  "data" : 
      {
        "errors" : []
      }
}
```

_Response (500 - Internal Server Error)_
```json
{
  "meta" : {
      "message" : "Internal Server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : 
      {
        "error" : ""
      }
}
```
---

---

### GET /hasil-pengajuan/:id

> Get hasil pengajuan by  ID

_Request Header_
```json
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_
```
not needed
```

_Response (200)_
```json
{
  "meta" : {
      "message" : "success get hasil pengajuan by ID",
      "code" : 200,
      "status" : "success get"
  }, 
  "data" :
      {
         "id" : 1,
         "petani_id" : 1,
         "investor_id" : 1,
         "status" : "Review",
         "keterangan" : "Pihak Cangkoel dan Investor sedang mereview pendanaan yang diajukan oleh pihak  petani",
         "formulir_pengajuan_id" : 1
      }
}
```

*Response (401 - Unauthorized)*

```
{
    "meta" : {
      "message" : "status unauthorize",
      "code" : 401,
      "status" : "error"
  }, 
  "data" : 
      {
        "error" : ""
      }
}
```

_Response (500 - Internal Server Error)_

```json
{
  "meta" : {
      "message" : "Internal server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : {
      "error" : ""
  }
}
```
---

### PUT /hasil-pengajuan/:id

> Update hasil pengajuan by ID

_Request Header_
```json
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_
```json
{
    "petani_id" : 1,
    "investor_id" : 1,
    "status" : "Rejected",
    "keterangan" : "Pihak Cangkoel dan Investor sedang menolak pendanaan yang diajukan oleh pihak petani",
    "formulir_pengajuan_id" : 1
}
```

_Response (200)_
```json
{
  "meta" : {
      "message" : "success update hasil pengajuan by ID",
      "code" : 200,
      "status" : "success updated"
  }, 
  "data" :
      {
        "id" : 3,
        "petani_id" : 1,
    	"investor_id" : 1,
    	"status" : "Rejected",
    	"keterangan" : "Pihak Cangkoel dan Investor sedang menolak pendanaan yang diajukan oleh pihak petani",
    	"formulir_pengajuan_id" : 1
      }
}
```

*Response (400 - Bad Request)*

```
{
  "meta" : {
      "message" : "error bad request",
      "code" : 400,
      "status" : "error"
  }, 
  "data" : 
      {
        "errors" : []
      }
}
```

*Response (401 - Unauthorized)*

```
{
    "meta" : {
      "message" : "status unauthorize",
      "code" : 401,
      "status" : "error"
  }, 
  "data" : 
      {
        "error" : ""
      }
}
```

_Response (500 - Internal Server Error)_

```json
{
  "meta" : {
      "message" : "Internal server error",
      "code" : 500,
      "status" : "error"
  }, 
  "data" : {
      "error" : ""
  }
}
```
---

