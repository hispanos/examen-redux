import types from '../types/types'
import {firebase, google, facebook, db} from '../../firebase/firebase'

export const login = (id, displayName, status) => {
    return {
        type: types.LOGIN,
        payload: {
            id,
            displayName,
            status
        }
    }
}

export const errorAction = (message) => {
    return {
        type: types.ERROR,
        payload: {
            status: true,
            message: message
        }
    }
}

export const loginGoogle = () => {
    return async (dispatch) => {
        try {
            const data = await firebase.auth().signInWithPopup(google);
            const {user} = data;
            dispatch(login(user.uid, user.displayName, true))
        } catch (error) {
            dispatch(errorAction('Hubo un error al hacer el login'))
        }
    }
}

export const loginFacebook = () => {
    return async (dispatch) => {
        try {
            const data = await firebase.auth().signInWithPopup(facebook);
            const {user} = data;
            dispatch(login(user.uid, user.displayName, true))
        } catch (error) {
            dispatch(errorAction('Hubo un error al hacer el login'))
        }
    }
}

export const registerUser = (name, email, password) => {
    return async (dispatch) => {
        try {
            const data = await firebase.auth().createUserWithEmailAndPassword(email, password);
            const {user} = data;
            user.updateProfile({displayName: name})
            dispatch(login(user.uid, name, true))
        } catch (error) {
            dispatch(errorAction('Hubo un error al crear, verifica que la contraseña tenga más de 6 dígitos.'))
        }
        
    }
}

export const loginEmail = (email, password) => {
    return async (dispatch) => {
        try {
            const data = await firebase.auth().signInWithEmailAndPassword(email, password)
            const {user} = data;
            dispatch(login(user.uid, user.displayName, true))
        } catch (error) {
            dispatch(errorAction('Usuario o contraseña Incorrecta'))
        }
    }
}

export const registerProduct = (id, name, price, quantity) => {
    return {
        type: types.SAVE,
        payload: {
            id,
            name,
            price,
            quantity
        }
    }
}

export const registerProductDb = (id, name, price, quantity) => {
    return async (dispatch) => {

        const newProduct = {
            id,
            name,
            price,
            quantity
        }

        try {
            const data = await db.collection(`/products`).add(newProduct);
            console.log(data)
            dispatch(registerProduct(id, name, price, quantity))
        } catch (error) {
            console.log(error)
            dispatch(errorAction('Hubo un error al guardar los datos'))
        }
        
    }
}

export const listProducts = (products) => {
    return {
        type: types.LIST,
        payload: products
    }
}

export const listProductsDb = () => {
    return async(dispatch) => {
        const data = await db.collection('/products').get();
        console.log(data)
        dispatch(listProducts(data))
    }
}