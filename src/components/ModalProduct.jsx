import { Button, Form, Modal } from 'react-bootstrap'
import React from 'react'
import useForm from '../hooks/useForm'
import { useDispatch } from 'react-redux'
import { registerProductDb } from '../redux/actions/actions'

const ModalProduct = ({showModal, setShowModal}) => {

    const dispatch = useDispatch();

    const handleClose = () => {
        setShowModal(false)
    }

    const [dataForm, handleChangeInput, reset] = useForm({
        name: '',
        price: '',
        quantity: ''
    })

    const id = 1;

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerProductDb(id, dataForm.name, dataForm.price, dataForm.quantity))
        reset();
    }
    

    return (
        <Modal show={showModal} onHide={handleClose}>
            <Form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>Nuevo Producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Nombre del Producto"
                        name="name"
                        value={dataForm.name}
                        onChange={handleChangeInput}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control 
                        type="number" 
                        placeholder="Precio del Producto"
                        name="price"
                        value={dataForm.price}
                        onChange={handleChangeInput}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Cantidad</Form.Label>
                    <Form.Control 
                        type="number" 
                        placeholder="Cantidad"
                        name="quantity"
                        value={dataForm.quantity}
                        onChange={handleChangeInput}
                        required
                    />
                </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="success" type="submit">
                        Guardar
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default ModalProduct
