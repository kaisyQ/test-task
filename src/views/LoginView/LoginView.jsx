import React, { useState } from "react"
import { Navigate } from "react-router-dom"
import { login } from "../../api/api"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputField from "../../components/InputField/InputField"

const LoginView = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    if (props.isAuth) return <Navigate to='/profile'/>

    const submitClck = (e) => {
        const isSuccssflLgn = login({ username, password })
        if (isSuccssflLgn.isSuccessАuth) {
            props.loginAC({ username, password })

        } else {
            alert('Invalid username or password')            
        }
        setUsername('')
        setPassword('')
    }
    return <div className="view-wrapper">
        <Form style={{margin: '30px auto', width: '50%'}}>

            <InputField setValue={setUsername} value={username} title='username' />
            <InputField setValue={setPassword} value={password} title='password' />

            <Button onClick={submitClck} variant="primary">Submit</Button>
        </Form>
    </div>
}

export default LoginView