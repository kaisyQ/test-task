import React from "react"

import Header from "./Header"

import { connect } from "react-redux"
import { logoutAC } from "../../redux/reducers/auth-reducer"
import { getIsAuth, getUserData } from "../../redux/selectors/auth-selector"

const mapStateToProps = (state) => {
    return {
        isAuth: getIsAuth(state),
        userData: getUserData(state)
    }
}

const mapDispatchToProps = {
    logoutAC
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)