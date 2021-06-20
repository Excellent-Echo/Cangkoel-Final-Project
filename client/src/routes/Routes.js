import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'
import Navbar from '../components/Navbar'

// pages each role
import ChooseRole from '../pages/ChooseRole'
import Login from '../pages/Login'

// pages role investor
import RegisterInvestor from '../pages/investor/Register'
import FormPendanaaan from '../pages/investor/FormPendanaan'
import ProfilInvestor from '../pages/investor/Profil'

//  pages role petani
import Home from '../pages/petani/Home'
import RegisterPetani from '../pages/petani/Register'
import Results from '../pages/petani/Results'
import Details from '../pages/petani/Detail'
import FormPengajuan from '../pages/petani/FormPengajuan'
import ProfilPetani from '../pages/petani/Profil'

const Routes = () => {
	let getIsAuth = localStorage.getItem('isAuth')
	let isAuth = JSON.parse(getIsAuth)
	return (
		<>
			<Router>
				<Switch>
					{/* route each role */}
					<Route path="/choose-role" exact component={ChooseRole} />
					<Route path="/login" exact component={Login} />

					{/* route role investor */}
					<Route path="/register-investor" exact component={RegisterInvestor} />
					<Route path="/form-pendanaan" exact component={FormPendanaaan} />
					<PrivateRoute path="/profil-investor" exact component={ProfilInvestor} auth={isAuth} />

					{/* route role petani */}
					<Route path="/register-petani" exact component={RegisterPetani} />
					<Route path="/results" exact component={Results} />
					<Route path="/details" exact component={Details} />
					<Route path="/form-pengajuan" exact component={FormPengajuan} />
					<PrivateRoute path="/profil-petani" exact component={ProfilPetani} auth={isAuth} />
					<Route path="/" exact component={Home} />
				</Switch>
			</Router>
		</>
	)
}

export default Routes
