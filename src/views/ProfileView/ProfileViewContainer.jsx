import React from "react"

import { connect } from "react-redux"
import ProfileView from "./ProfileView"
import withAuthRedirect from "../../hoc/withAuthRedirect"
import { getIsAuth, getUserData } from "../../redux/selectors/auth-selector"


const mapStateToProps = (state) => {
    return {
        isAuth: getIsAuth(state),
        userData: getUserData(state)
    }
}

const WithAuthRedirect = withAuthRedirect(ProfileView)
const ProfileViewContainer = connect(mapStateToProps, {})(WithAuthRedirect)

export default ProfileViewContainer