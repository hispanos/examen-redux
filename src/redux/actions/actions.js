import types from '../types/types'
import {firebase, google, facebook} from '../../firebase/firebase'

export const login = (id, displayName) => {
    return {
        type: types.LOGIN,
        payload: {
            id,
            displayName
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
            dispatch(login(user.uid, user.displayName))
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
            dispatch(login(user.uid, user.displayName))
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
            dispatch(login(user.uid, name))
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
            dispatch(login(user.uid, user.displayName))
        } catch (error) {
            dispatch(errorAction('Usuario o contraseña Incorrecta'))
        }
    }
}