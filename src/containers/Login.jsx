import React from 'react'
import '../styles/login.css'
import useForm from '../hooks/useForm'

const Login = () => {

    const [dataForm, handleChangeInput] = useForm({
        email: '',
        password: ''
    })

    return (
        <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
            <div className="card card0 border-0">
                <div className="row d-flex">
                    <div className="col-lg-6">
                        <div className="card1 pb-5">
                            <div className="row"> 
                                <img src="https://www.mailermartinez.com/assets/images/logo/logo-mailer.png" className="logo" /> 
                            </div>
                            <div className="row px-3 justify-content-center mt-4 mb-5 border-line"> 
                                <img src="https://i.imgur.com/uNGdWHi.png" className="image" /> 
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card2 card border-0 px-4 py-5">
                            <div className="row mb-4 px-3">
                                <h6 className="mb-0 me-4 mt-2 mb-2">Iniciar con</h6>
                                <div className="facebook text-center me-3">
                                    <i class="fab fa-facebook-f"></i>
                                </div>
                                <div className="google text-center me-3">
                                    <i class="fab fa-google"></i>
                                </div>
                            </div>
                            <div className="row px-3 mb-4">
                                <div className="line"></div> 
                                <small className="or text-center">O</small>
                                <div className="line"></div>
                            </div>
                            <div className="row px-3"> 
                                <label className="mb-1">
                                    <h6 className="mb-0 text-sm">Correo</h6>
                                </label> 
                                <input className="mb-4" type="text" name="email" placeholder="Escriba su correo electrónico" value={dataForm.email} onChange={handleChangeInput} /> 
                            </div>
                            <div className="row px-3"> 
                                <label className="mb-1">
                                <h6 className="mb-0 text-sm">Contraseña</h6>
                                </label> 
                                <input type="password" name="password" placeholder="Ingrese la contraseña" value={dataForm.password} onChange={handleChangeInput} /> 
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
                                    <a className="text-danger ">Regístrate</a>
                                </small> 
                            </div>
                        </div>
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
