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

export const loginGoogle = () => {
    return async (dispatch) => {
        const data = await firebase.auth().signInWithPopup(google);
        const {user} = data;
        dispatch(login(user.uid, user.displayName))
    }
}

export const loginFacebook = () => {
    return async (dispatch) => {
        const data = await firebase.auth().signInWithPopup(facebook);
        const {user} = data;
        dispatch(login(user.uid, user.displayName))
    }
}

export const registerUser = (name, email, password) => {
    return async (dispatch) => {
        const data = await firebase.auth().createUserWithEmailAndPassword(email, password);
        const {user} = data;
        user.updateProfile({displayName: name})
        dispatch(login(user.uid, name))
    }
}

export const loginEmail = (email, password) => {
    return async (dispatch) => {
        const data = await firebase.auth().signInWithEmailAndPassword(email, password)
        const {user} = data;
        console.log(user)
        dispatch(login(user.uid, user.displayName))
    }
}