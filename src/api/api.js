export const checkAuth = () => {
    if(localStorage.getItem('isAuth')) {
        return {
            isAuth: true, 
            userData: JSON.parse(localStorage.getItem('userData'))
        }
    }
    return { isAuth: false }
}

export const login = (user) => {
    if (user.username === 'admin' && user.password === '12345') {
        localStorage.setItem('isAuth', true)
        localStorage.setItem('userData', JSON.stringify(user))
        return { isSuccessАuth: true }
    } else {
        return { isSuccessАuth: false }
    }
}

export const logout = () => {
    localStorage.clear()
}

