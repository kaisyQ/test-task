import React from "react"

import { connect } from "react-redux"
import ProfileView from "./ProfileView"
import withAuthRedirect from "../../hoc/withAuthRedirect"


const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        userData: state.auth.userData
    }
}

const WithAuthRedirect = withAuthRedirect(ProfileView)
const ProfileViewContainer = connect(mapStateToProps, {})(WithAuthRedirect)

export default ProfileViewContainer