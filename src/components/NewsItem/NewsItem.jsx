import React from "react"
import Card from 'react-bootstrap/Card'
import noImage from './../../images/no-image.jpg'

const NewsItem = (props) => {
    return <>
        <Card style={{margin: '15px 0'}}>
            <div style={{width: '100%', height: '150px', margin: 0}}>
                <Card.Img variant="top" src={props.image || noImage} style={{width: '100%', height: '100%', objectFit: 'cover',}}/>
            </div>
            <Card.Body>
                <Card.Text>
                    {props.text}                    
                </Card.Text>
            </Card.Body>
        </Card>
    </>
}

export default NewsItem