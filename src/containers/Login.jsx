import React, { useState } from 'react'
import '../styles/login.css'
import useForm from '../hooks/useForm'
import { useDispatch } from 'react-redux'
import { loginGoogle, loginFacebook, loginEmail } from '../redux/actions/actions'
import Register from '../components/Register'
import { useSelector } from 'react-redux'

const Login = () => {

    const dispatch = useDispatch();
    const error = useSelector(store => store.error)

    const [isRegister, setIsRegister] = useState(false)

    const [dataForm, handleChangeInput] = useForm({
        email: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginEmail(dataForm.email, dataForm.password))
    }

    const handleGoogle = () => {
        dispatch(loginGoogle());
    }

    const handleFacebook = () => {
        dispatch(loginFacebook());
    }

    return (
        <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
            <div className="card card0 border-0">
                <div className="row d-flex">
                    <div className="col-lg-6">
                        <div className="card1 pb-5">
                            <div className="row"> 
                                <img src="https://www.mailermartinez.com/assets/images/logo/logo-mailer.png" className="logo" alt="logo" /> 
                            </div>
                            <div className="row px-3 justify-content-center mt-4 mb-5 border-line"> 
                                <img src="https://i.imgur.com/uNGdWHi.png" className="image" alt="Empresa" /> 
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        {!isRegister ?
                        <div className="card2 card border-0 px-4 py-5">
                            <form onSubmit={handleSubmit}>
                                <div className="row mb-4 px-3">
                                    <h6 className="mb-0 me-4 mt-2 mb-2">Iniciar con</h6>
                                    <div className="facebook text-center me-3" onClick={handleFacebook}>
                                        <i className="fab fa-facebook-f"></i>
                                    </div>
                                    <div className="google text-center me-3" onClick={handleGoogle}>
                                        <i className="fab fa-google"></i>
                                    </div>
                                </div>
                                <div className="row px-3 mb-4">
                                    <div className="line"></div> 
                                    <small className="or text-center">O</small>
                                    <div className="line"></div>
                                </div>
                                {error.status &&
                                <div className="row px-3 mb-4">
                                    <div class="alert alert-danger" role="alert">
                                        {error.message}
                                    </div>
                                </div>
                                }
                                <div className="row px-3"> 
                                    <label className="mb-1">
                                        <h6 className="mb-0 text-sm">Correo</h6>
                                    </label> 
                                    <input className="mb-4" type="email" name="email" placeholder="Escriba su correo electrónico" value={dataForm.email} onChange={handleChangeInput} required /> 
                                </div>
                                <div className="row px-3"> 
                                    <label className="mb-1">
                                    <h6 className="mb-0 text-sm">Contraseña</h6>
                                    </label> 
                                    <input type="password" name="password" placeholder="Ingrese la contraseña" value={dataForm.password} onChange={handleChangeInput} required /> 
                                </div>
                                <div className="row px-3 mb-4">
                                    <div className="custom-control custom-checkbox custom-control-inline"></div> 
                                    <a href="#" className="ml-auto mb-0 text-sm">Olvidó su contraseña?</a>
                                </div>
                                <div className="row mb-3 px-3"> 
                                    <button type="submit" className="btn btn-blue text-center">Iniciar Sesión</button> 
                                </div>
                                <div className="row mb-4 px-3"> 
                                    <small className="font-weight-bold">No tienes cuenta? 
                                        <a className="text-danger mx-2" onClick={() => {setIsRegister(true)}}>Regístrate</a>
                                    </small> 
                                </div>
                            </form>
                        </div>
                        :
                        <Register 
                            setIsRegister={setIsRegister}
                            handleGoogle={handleGoogle}
                            handleFacebook={handleFacebook}
                        />
                    }
                    </div>
                </div>
                <div className="bg-blue py-4">
                    <div className="row px-3"> 
                        <small className="ml-4 ml-sm-5 mb-2">Copyright &copy; 2021. Mailer Martínez.</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
