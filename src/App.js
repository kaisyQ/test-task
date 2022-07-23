import React from "react"
import { BrowserRouter,Routes, Route } from "react-router-dom"

import Header from "./components/Header/Header"

import HomeView from "./views/HomeView/HomeView"
import LoginView from "./views/LoginView/LoginView"
import NewsView from "./views/NewsView/NewsView"
import ProfileView from "./views/ProfileView/ProfileView"

const App = () => {
    return <BrowserRouter>
        <div className="App">
            <Header />
            <Routes>
                <Route path='/' element={<HomeView />}/>
                <Route path='/login' element={<LoginView />}/>
                <Route path='/news' element={<NewsView />}/>
                <Route path='/profile' element={<ProfileView />}/>
            </Routes>
        </div>
    </BrowserRouter>
}

export default App