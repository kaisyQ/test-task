import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"


import HeaderContainer from './components/Header/HeaderContainer';

import HomeView from "./views/HomeView/HomeView"
import NewsViewContainer from './views/NewsView/NewsViewContainer'
import ProfileViewContainer from './views/ProfileView/ProfileViewContainer'
import LoginViewContainer from './views/LoginView/LoginViewContainer';
import { checkAuth } from './api/api'
import { connect } from 'react-redux'
import { isAuthAC } from './redux/reducers/auth-reducer'

const App = (props) => {
    useEffect(() => {
        const isAuthObj = checkAuth()
        if(isAuthObj.isAuth) {
            props.checkisAuth(isAuthObj.isAuth, isAuthObj.userData)
        } else {
            props.checkisAuth(isAuthObj.isAuth, null)
        }

    })

    return <BrowserRouter>
        <div className="App">
            <HeaderContainer />
            <Routes>
                <Route path='/' element={<HomeView />}/>
                <Route path='/login' element={<LoginViewContainer />}/>
                <Route path='/news' element={<NewsViewContainer />}/>
                <Route path='/profile' element={<ProfileViewContainer />}/>
            </Routes>
        </div>
    </BrowserRouter>
}

const mapStateToProps = (state) => {
    return {

    }
} 
const mapDispatchToProps = {
    checkisAuth: isAuthAC
}

export default connect(mapStateToProps, mapDispatchToProps)(App)