import React from 'react'
import { useHistory } from 'react-router-dom';

const Dashboard = () => {

    const history = useHistory();

    const handleClose = () => {
        sessionStorage.removeItem('token')
        window.location.href = "/";
    }

    return (
        <div>
            <h1>Estás en el escritorio.</h1>
            <h2>Esta es una ruta protegida, pronto podrás hacer el CRUD aquí</h2>
            <button onClick={handleClose}>
                Cerrar Sesión
            </button>
        </div>
    )
}

export default Dashboard
