import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'
// import { ProvideAuth } from '../utils/auth'

// pages
import Login from '../pages/Login'
import Home from '../pages/petani/Home'
import Register from '../pages/petani/Register'
import Results from '../pages/petani/Results'
import Details from '../pages/petani/Detail'
import FormPengajuan from '../pages/petani/FormPengajuan'
import ProfilPetani from '../pages/petani/Profil'

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route path="/login" exact component={Login} />
				<Route path="/register" exact component={Register} />
				<Route path="/results/:id" exact component={Results} />
				<Route path="/details/:id" exact component={Details} />

				<PrivateRoute path="/formulir-pengajuan">
					<FormPengajuan />
				</PrivateRoute>
				<PrivateRoute path="/profil-petani">
					<ProfilPetani />
				</PrivateRoute>
				{/* <PrivateRoute path="/profil-petani" exact component={ProfilPetani} auth={isAuth} /> */}
				<Route path="/" exact component={Home} />
			</Switch>
		</Router>
	)
}

export default Routes
