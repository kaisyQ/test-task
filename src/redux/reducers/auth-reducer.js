const CHECK_IS_AUTH = 'CHECK-IS-AUTH'
const LOGIN = 'LOGIN'
const LOGOUT ='LOGOUT'

const defaultState = {
    isAuth: false,
    userData: null
}

export const isAuthAC = (isAuthValue, userData) => {
    return { type: CHECK_IS_AUTH, isAuthValue, userData }
}

export const loginAC = (userData) => {
    return { type: LOGIN, userData }
}

export const logoutAC = () => {
    return { type: LOGOUT }
}

const authReducer = (state=defaultState, action) => {
    switch(action.type) {
        case CHECK_IS_AUTH: {
            return {
                ...state,
                isAuth: action.isAuthValue,
                userData: action.userData
            }
        }
        case LOGIN: {
            return {
                ...state,
                isAuth: true,
                userData: action.userData
            }
        }
        case LOGOUT: {
            return {
                ...state,
                isAuth: false,
                userData: null
            }
        }
        default :
            return state
    }
}

export default authReducer