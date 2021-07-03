import CangkoelAPI from '../../../api/CangkoelAPI'
import CloudinaryAPI from '../../../api/CloudinaryAPI'
import Swal from 'sweetalert2'

import { CREATE_NAME_KATEGORI, CREATE_FOTO_KATEGORI, CREATE_URL_FOTO_KATEGORI } from '../kategoryType'

const setNamekategori = (namaKategori) => {
	return {
		type: CREATE_NAME_KATEGORI,
		payload: {
			namaKategori: namaKategori
		}
	}
}

const setFotoKategori = (fotoKategori) => {
	return {
		type: CREATE_FOTO_KATEGORI,
		payload: {
			fotoKategori: fotoKategori
		}
	}
}

const setUrlFotoKategori = (urlFotoKategori) => {
	return {
		type: CREATE_URL_FOTO_KATEGORI,
		payload: {
			urlFotoKategori: urlFotoKategori
		}
	}
}

const createKategoriAction = (namaKategori, fotoKategori) => async (dispatch) => {
	try {
		const postDataKategori = {
			nama_kategori: namaKategori,
			foto_kategori: fotoKategori
		}

		const accessToken = localStorage.getItem('token')

		const postKategoriData = await CangkoelAPI({
			method: 'POST',
			url: '/kategori-pertanian',
			data: postDataKategori,
			headers: {
				Authorization: accessToken
			}
		})

		if (postKategoriData.status === 201) {
			Swal.fire({
				title: 'Kategori berhasil ditambahkan',
				icon: 'success',
				timer: 1500,
				timerProgressBar: true
			}).then(() => {
				window.location.reload()
			})
		}

		// console.log('kategori data action', postKategoriData.data.data)
	} catch (error) {
		console.log(error.response.data)
	}
}

const uploadFotoKategori = (file) => async (dispatch) => {
	try {
		// console.log('file', file)
		const data = new FormData()
		data.append('file', file)
		data.append('upload_preset', 'rxra54p9')
		data.append('cloud_name', 'cangkoel')

		const postFotoKategori = await CloudinaryAPI({
			method: 'POST',
			url: '/image/upload',
			data: data
		})

		// console.log(postFotoKategori.data.url)

		dispatch(setUrlFotoKategori(postFotoKategori.data.url))
	} catch (error) {
		console.log(error.response)
	}
}

const kategoriActions = {
	setUrlFotoKategori,
	uploadFotoKategori,
	setNamekategori,
	setFotoKategori,
	createKategoriAction
}

export default kategoriActions
