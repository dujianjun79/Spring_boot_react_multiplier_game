import axios from 'axios'

export const API_BASE_URL = 'http://localhost:8080/'
export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

class AuthenticationService {

    registerSuccessfulLogin(username, password) {  
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username)
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return false
        return true
    }

    logout() {
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    }

    checkUsername(user){
        return axios({
            method: 'post',
            url: API_BASE_URL+'checkUsername',
            data: user
        })
    }

    checkEmail(user){
        return axios({
            method: 'post',
            url: API_BASE_URL+'checkEmail',
            data: user
        })
    }

    registerUser(user){
        return axios({
            method: 'post',
            url: API_BASE_URL+'saveUser',
            data: user
        })
    }

    
}

export default new AuthenticationService()