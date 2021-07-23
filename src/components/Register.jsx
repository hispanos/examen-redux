import React from 'react';
import useForm from '../hooks/useForm';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/actions/actions'


const Register = ({setIsRegister, handleGoogle}) => {

    const dispatch = useDispatch();

    const [dataForm, handleChangeInput] = useForm({
        name: '',
        email: '',
        password: ''
    })

    const handleRegister = (e) => {
        e.preventDefault();
        dispatch(registerUser(dataForm.name, dataForm.email, dataForm.password))
    }

    return (
        <div className="card2 card border-0 px-4 py-5">
            <form onSubmit={handleRegister}>
                <div className="row mb-4 px-3">
                    <h6 className="mb-0 me-4 mt-2 mb-2">Regístrate con</h6>
                    <div className="facebook text-center me-3">
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
                <div className="row px-3"> 
                    <label className="mb-1">
                        <h6 className="mb-0 text-sm">Nombres Completos</h6>
                    </label> 
                    <input className="mb-4" type="text" name="name" placeholder="Escriba su nombre" value={dataForm.name} onChange={handleChangeInput} required /> 
                </div>
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
                <div className="row mb-3 px-3"> 
                    <button type="submit" className="btn btn-blue text-center">Registrarte</button> 
                </div>
                <div className="row mb-4 px-3"> 
                    <small className="font-weight-bold">Ya tienes una cuenta? 
                        <a className="text-danger mx-2" onClick={() => {setIsRegister(false)}}>Inicia Sesión</a>
                    </small> 
                </div>
            </form>
        </div>
    )
}

export default Register
