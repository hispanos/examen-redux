import types from '../types/types'
import {firebase, google} from '../../firebase/firebase'

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