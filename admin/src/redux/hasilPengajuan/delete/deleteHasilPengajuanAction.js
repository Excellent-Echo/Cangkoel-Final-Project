import CangkoelAPI from '../../../api/CangkoelAPI'
import Swal from 'sweetalert2'

const deleteHasilPengajuan = (id) => async () => {
	try {
		const accessToken = localStorage.getItem('token')
		console.log(accessToken)

		// eslint-disable-next-line
		const responseDeleteHasil = await CangkoelAPI({
			method: 'DELETE',
			url: `/hasil-pengajuan/${id}`,
			headers: {
				Authorization: accessToken
			}
		})

		console.log(responseDeleteHasil)

		if (responseDeleteHasil.status === 200) {
			Swal.fire({
				title: 'Hasil pengajuan berhasil dihapus',
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

const hasilPengajuanActions = {
	deleteHasilPengajuan
}

export default hasilPengajuanActions
