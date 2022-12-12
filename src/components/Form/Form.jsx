import React from 'react'
import './form.css'
import useForm from '../../hooks/useForm/useForm'
import validate from '../../hooks/useForm/validateForm'

function Form() {
    const { handleChange, values, handleSubmit, errors } = useForm(validate)

    return (
        <div className='formContainer'>
            <form className='form' onSubmit={handleSubmit}>
                <label className='form-label' htmlFor='company'>Company Name *</label>
                <input className='form-input' id='company' type='text' name='company' placeholder='Enter your companies name' value={values.company} onChange={handleChange} />
                {errors.company && <p className='errorMsg'>{errors.company}</p>}
                <label className='form-label' htmlFor='name'>Name *</label>
                <input className='form-input' id='name' type='text' name='name' placeholder='Enter your name' value={values.name} onChange={handleChange} />
                {errors.name && <p className='errorMsg'>{errors.name}</p>}
                <label className='form-label' htmlFor='email'>Email *</label>
                <input className='form-input' id='email' type='email' name='email' placeholder='Enter your email' value={values.email} onChange={handleChange} />
                {errors.email && <p className='errorMsg'>{errors.email}</p>}
                <label className='form-label' htmlFor='message'>Message</label>
                <textarea className='form-input' name="message" id="message" cols="35" rows="4" placeholder='Have a message?' value={values.message} onChange={handleChange} ></textarea>

                <button type='submit'>Submit Form</button>
            </form>
        </div>
    )
}

export default Form



/*
//value={values.username} onChange={handleChange}
{errors.username && <p>{errors.username}</p>}
*/