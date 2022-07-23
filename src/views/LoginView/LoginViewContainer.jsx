import React from "react"

import LoginView from './LoginView'

import { connect } from 'react-redux'
import { loginAC } from "../../redux/reducers/auth-reducer"

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = {
    loginAC
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView)