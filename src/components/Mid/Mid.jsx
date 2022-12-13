import React from 'react'
import Card from '../Card/Card'
import Container from '../Container/Container'
import { boxes } from "../../utils/Utils.js"


import './mid.css'


function createCard(x) {
    return(
    <Card className="cardBox" key={x.id} heading={x.heading} body={x.body} img={x.imgUrl}  />
)}

export default function Mid() {
    return (
        <Container className='mid'>
            {boxes.map(createCard)}
        </Container>
    )
}
