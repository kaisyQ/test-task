import React from "react"
import Form from 'react-bootstrap/Form'

const InputField = (props) => {
    const onInputChange = (e) => {
        props.setValue(e.target.value)
    }

    return <>
        <Form.Group className="mb-3">
            <Form.Label>{ props.title[0].toUpperCase() + props.title.slice(1) }</Form.Label>
            <Form.Control onChange={onInputChange} value={props.value} type={props.title} placeholder={`Enter ${props.title}`} />
        </Form.Group>
    </>
}

export default InputField