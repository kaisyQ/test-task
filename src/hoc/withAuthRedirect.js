import React from "react"
import { Navigate } from "react-router-dom"


const withAuthRedirect = (Component) => {
    const WithAuthRedirect = (props) => {
        if (props.isAuth) {
            return <Component {...props} />
        } else {
            return <Navigate to='/login' />
        }
    }
    return WithAuthRedirect
}

export default withAuthRedirect