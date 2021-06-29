import React, { useEffect } from 'react'
import { Container as ContainerBase } from '../../components/misc/Layouts.jsx'
import tw from 'twin.macro'
import styled from 'styled-components'
import { css } from 'styled-components/macro' //eslint-disable-line
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

//redux
import userRegisterAction from '../../redux/user/register/userRegisterAction'

// assets
import farmer from '../../assets/petani-register.jpg'
import logo from '../../assets/logo-cangkoel.png'
import googleIconImageSrc from '../../assets/google-icon.png'
import { ReactComponent as SignUpIcon } from 'feather-icons/dist/icons/user-plus.svg'

// styled components with tailwind
const Container = tw(ContainerBase)`min-h-screen bg-crowde-200 text-white font-medium flex justify-center `
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`
const LogoLink = tw.a``
const LogoImage = tw.img`h-8 mx-auto`
const MainContent = tw.div`mt-12 flex flex-col items-center`
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`
const FormContainer = tw.div`w-full flex-1 mt-8`
const SocialButtonsContainer = tw.div`flex flex-col items-center`
const SocialButton = styled.a`
	${tw`w-full max-w-xs font-semibold rounded-lg py-3 border text-gray-900 bg-gray-100 hocus:bg-gray-200 hocus:border-gray-400 flex items-center justify-center transition-all duration-300 focus:outline-none focus:shadow-outline text-sm mt-5 first:mt-0`}
	.iconContainer {
		${tw`bg-white p-2 rounded-full`}
	}
	.icon {
		${tw`w-4`}
	}
	.text {
		${tw`ml-4`}
	}
`
const DividerTextContainer = tw.div`my-12 border-b text-center relative`
const DividerText = tw.div`leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent`
const Form = tw.form`mx-auto max-w-xs`
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`
const SubmitButton = styled.button`
	${tw`mt-5 tracking-wide font-semibold bg-crowde-100 text-gray-100 w-full py-4 rounded-lg hover:bg-crowde-200 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
	.icon {
		${tw`w-6 h-6 -ml-2`}
	}
	.text {
		${tw`ml-3`}
	}
`
const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex`
const Image = tw.img`h-full w-full rounded shadow-md object-cover bg-gradient-to-l`

const Register = ({
	logoLinkUrl = '/',
	headingText = 'Daftar Sekarang Petani',
	socialButtons = [
		{
			iconImageSrc: googleIconImageSrc,
			text: 'Daftar lewat Google',
			url: 'https://google.com'
		}
	],
	submitButtonText = 'Daftar',
	SubmitButtonIcon = SignUpIcon,
	tosUrl = '/terms',
	privacyPolicyUrl = '/privasi',
	signInUrl = '/login'
}) => {
	const registerData = useSelector((state) => state.userRegister)
	const dispatch = useDispatch()
	const history = useHistory()

	useEffect(() => {
		dispatch(userRegisterAction.resetForm())
		dispatch(userRegisterAction.setRole('petani'))

		let token = localStorage.getItem('token')
		if (token && token !== 'undefined') {
			history.push('/')
		}
	}, [])

	const handleRegister = (e) => {
		e.preventDefault()

		dispatch(
			userRegisterAction.register(
				registerData.role,
				registerData.email,
				registerData.password,
				registerData.fullName,
				history
			)
		)
	}

	return (
		<div>
			<Container>
				<Content>
					<MainContainer>
						<LogoLink href={logoLinkUrl}>
							<LogoImage src={logo} />
						</LogoLink>
						<MainContent>
							<Heading>{headingText}</Heading>
							<FormContainer>
								{/* <SocialButtonsContainer>
									{socialButtons.map((socialButton, index) => (
										<SocialButton key={index} href={socialButton.url}>
											<span className="iconContainer">
												<img src={socialButton.iconImageSrc} className="icon" alt="" />
											</span>
											<span className="text">{socialButton.text}</span>
										</SocialButton>
									))}
								</SocialButtonsContainer> */}
								<DividerTextContainer>
									<DividerText>Atau daftar lewat e-mail kamu</DividerText>
								</DividerTextContainer>
								<Form onSubmit={handleRegister}>
									<Input
										type="text"
										placeholder="Input your fullname"
										onChange={(e) => dispatch(userRegisterAction.setFullName(e.target.value))}
									/>
									<Input
										type="email"
										placeholder="Input your email"
										onChange={(e) => dispatch(userRegisterAction.setEmail(e.target.value))}
									/>
									<Input
										type="password"
										placeholder="input your password"
										onChange={(e) => dispatch(userRegisterAction.setPassword(e.target.value))}
									/>
									<SubmitButton type="submit">
										<SubmitButtonIcon className="icon" />
										<span className="text">{submitButtonText}</span>
									</SubmitButton>
									<p tw="mt-6 text-xs text-gray-600 text-center">
										Saya setuju untuk mematuhi perjanjian Cangkoel
										<a href={tosUrl} tw="border-b border-gray-500 border-dotted">
											{' '}
											Persyaratan Layanan
										</a>{' '}
										dan
										<a href={privacyPolicyUrl} tw="border-b border-gray-500 border-dotted">
											{' '}
											Kebijakan Privasi.
										</a>
									</p>

									<p tw="mt-8 text-sm text-gray-600 text-center">
										Apakah sudah mempunyai akun?
										<a href={signInUrl} tw="border-b border-gray-500 border-dotted">
											{' '}
											Masuk
										</a>
									</p>
								</Form>
							</FormContainer>
						</MainContent>
					</MainContainer>
					<IllustrationContainer>
						<Image src={farmer} />
					</IllustrationContainer>
				</Content>
			</Container>
		</div>
	)
}

export default Register
