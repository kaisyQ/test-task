import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"


import Header from "./components/Header/Header"

import HomeView from "./views/HomeView/HomeView"
import LoginView from "./views/LoginView/LoginView"
import NewsViewContainer from './views/NewsView/NewsViewContainer'
import ProfileViewContainer from './views/ProfileView/ProfileViewContainer'
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
            <Header />
            <Routes>
                <Route path='/' element={<HomeView />}/>
                <Route path='/login' element={<LoginView />}/>
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