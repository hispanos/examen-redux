const isLogged = () => {

    const token = sessionStorage.getItem('token')

    let myResponse = false;

    if (token) {
        myResponse = true
        
    }else {
        myResponse = false
    }

    return myResponse;
    
}

export default isLogged
