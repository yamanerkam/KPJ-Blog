import React, { useState, useRef } from 'react'
import './ContactMe.css'
import emailjs from '@emailjs/browser';



export default function ContactMe() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const form = useRef();

    function handleSubmit(e) {
        e.preventDefault()
        emailjs
            .sendForm('service_rho5w8x', 'template_vxaxkhh', form.current, {
                publicKey: '40I0FwzM30_m_vkho',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );

    };

    return (
        <div className='contact-me-page'>

            <div className="funBit">
                <h1>Look at who is here :)</h1>
                <p className='fun-p'> You are here either because you want to reach out to me or you just miscliked
                    if you misclicked, please do carry on with the rest of your life and see you around.
                </p>

                <p className='fun-p'>
                    But if you really wanna contact me, you can find my soicial media accounts down there
                    and there is a good old boring contact me form which works perfectly well.
                </p>

                <p className='fun-p'>Who uses contact me forms these days? You might be saying, The answer is developers cus we gotto keep it fancy :)
                </p>
            </div>

            <div>
                <form ref={form} className='form' onSubmit={handleSubmit} action="submit">
                    <input required type="text" placeholder='Name' value={name} onChange={((e) => setName(e.target.value))} name="name" id="" />
                    <input required type="email" placeholder='Email' value={email} onChange={((e) => setEmail(e.target.value))} name='email' />
                    <input required type='text' placeholder='Message' value={message} onChange={((e) => setMessage(e.target.value))} name="message" ></input>
                    <button type='submit' className='btn-form'>Send</button>

                </form>
            </div>
        </div>
    )
}
