import CangkoelAPI from '../../../api/CangkoelAPI'

import Swal from 'sweetalert2'

const deleteCategory = (id) => async () => {
	try {
		// eslint-disable-next-line
		const postData = await CangkoelAPI({
			method: 'DELETE',
			url: `/kategori-pertanian/${id}`,
			headers: {
				Authorization: localStorage.getItem('token')
			}
		})

		if (postData.status === 200) {
			Swal.fire({
				title: 'Kategori berhasil dihapus',
				// text: 'Anda akan dialihkan ke halaman Profil',
				icon: 'success',
				timer: 2000,
				timerProgressBar: true
			}).then(() => {
				window.location.reload()
			})
		}
	} catch (err) {
		console.log(err.response)
	}
}

const kategoriActions = {
	deleteCategory
}

export default kategoriActions
