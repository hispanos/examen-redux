import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Container, Navbar, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ModalProduct from '../components/ModalProduct';
import { listProductsDb } from '../redux/actions/actions'


const Dashboard = () => {

    const dispatch = useDispatch()

    const products = useSelector(store => store.products)
    console.log(products)

    const handleClose = () => {
        sessionStorage.removeItem('token')
        window.location.href = "/";
    }

    const token = JSON.parse(sessionStorage.getItem('token'))
    const [name, setName] = useState('')
    
    useEffect(() => {
        if(token) {setName(token.name)}
        dispatch(listProductsDb())
    }, [])

    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container fluid>
                    <NavLink to="/" className="navbar-brand">CRUD</NavLink>
                    <div className="navbar-nav">
                        <a className="nav-link" onClick={handleClose}>Cerrar Sessión</a>
                    </div>
                </Container>
            </Navbar>
            <Container fluid>
                <h1 className="my-2">Bienvenido {name}</h1>
                <Card>
                    <Card.Header>
                        <div className="d-flex justify-content-between align-items-center">
                            <Card.Title>Lista de Productos</Card.Title>
                            <button className="btn btn-primary" onClick={() => {setShowModal(true)}}>Nuevo</button>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.product ?
                                    (
                                    products.product.map((product, index) => (
                                        <tr key={index}>
                                            <td>{product.name}</td>
                                            <td>{product.price}</td>
                                            <td>{product.quantity}</td>
                                            <td>
                                                <button type="button" className="btn btn-primary btn-sm me-2"><i className="fas fa-pencil-alt"></i></button>
                                                <button type="button" className="btn btn-danger btn-sm me-2"><i className="fas fa-trash-alt"></i></button>
                                            </td>
                                        </tr>
                                    ))
                                    ) :
                                    <p>No se encuentran Datos disponibles</p>
                                }
                                
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </Container>
            <ModalProduct showModal= {showModal} setShowModal={setShowModal} />
        </>
    )
}

export default Dashboard
