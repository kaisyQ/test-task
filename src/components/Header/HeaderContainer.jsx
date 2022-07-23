import React from "react"

import Header from "./Header"

import { connect } from "react-redux"
import { logoutAC } from "../../redux/reducers/auth-reducer"

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        userData: state.auth.userData
    }
}

const mapDispatchToProps = {
    logoutAC
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)