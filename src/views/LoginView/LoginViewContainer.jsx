import React from "react"

import LoginView from './LoginView'

import { connect } from 'react-redux'
import { loginAC } from "../../redux/reducers/auth-reducer"
import { getIsAuth } from "../../redux/selectors/auth-selector"

const mapStateToProps = (state) => {
    return {
        isAuth: getIsAuth(state)
    }
}

const mapDispatchToProps = {
    loginAC
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView)