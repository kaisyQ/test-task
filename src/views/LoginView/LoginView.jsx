import React, { useState } from "react"

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputField from "../../components/InputField/InputField"

const LoginView = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const submitClck = (e) => {

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