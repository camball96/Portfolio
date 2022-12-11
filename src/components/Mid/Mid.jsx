import React from 'react'
import Card from '../Card/Card'

import { boxes } from "../../utils/Utils.js"


import './mid.css'


function createCard(x) {
    return(
    <Card className key={x.id} heading={x.heading} body={x.body} img={x.imgUrl} />
)}

export default function Mid() {
    return (
        <div className='mid'>
            {boxes.map(createCard)}
        </div>
    )
}
