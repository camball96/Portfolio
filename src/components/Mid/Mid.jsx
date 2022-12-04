import React from 'react'
import Card from '../../Card/Card.jsx'
import Brain from '../../assets/Brain.png'
import Code from '../../assets/code.png'
import Passion from '../../assets/passion.png'
import { Boxes } from "../../utils/Utils.jsx";
import './mid.css'


const imgs = [Brain, Passion, Code];

export default function Mid(props) {
    return (
        <div className='mid'>
            <Card />
            <Card />
            <Card />
        </div>
    )
}
