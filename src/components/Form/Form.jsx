import React from 'react'
import './form.css'
import { formHeadings } from "../../utils/Utils"

function Form() {

    return (
        <div className='formContainer'>
            <form className='form'>
                {formHeadings.map( (x) => {
                    return(<div className='form' key={x.id}><label>{x.label}</label> <input></input></div>
                    )})}
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Form