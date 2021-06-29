import CangkoelAPI from '../../../api/CangkoelAPI'
import Swal from 'sweetalert2'

const deletePendanaan = (id) => async () => {
	try {
		const accessToken = localStorage.getItem('token')
		// console.log(accessToken)

		// eslint-disable-next-line
		const responseDeletePendanaan = await CangkoelAPI({
			method: 'DELETE',
			url: `/pendanaan/${id}`,
			headers: {
				Authorization: accessToken
			}
		})

		// console.log(responseDeletePendanaan)

		if (responseDeletePendanaan.status === 200) {
			Swal.fire({
				title: 'Pendanaan berhasil dihapus',
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

const pendanaanActions = {
	deletePendanaan
}

export default pendanaanActions
