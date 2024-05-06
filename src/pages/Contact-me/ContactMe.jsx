import React, { useState, useRef } from 'react'
import './ContactMe.css'
import emailjs from '@emailjs/browser';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';



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

                <div className="soc-side">
                    <p className='fun-p '>
                        But if you really wanna contact me,
                    </p>
                    <p className='fun-p'>you can find me on</p>
                    <div className="socials">

                        <a className='btn-icon' target="_blank" href="https://github.com/yamanerkam">
                            <FaGithub />
                        </a>

                        <a className='btn-icon' target="_blank" href="https://www.instagram.com/erkamyaman35/ ">
                            <FaInstagram />
                        </a>

                        <a className='btn-icon' target="_blank" href="https://www.linkedin.com/in/erkamyaman35/
">
                            <FaLinkedin />
                        </a>

                        <a className='btn-icon' target="_blank" href="https://www.linkedin.com/in/erkamyaman35/ ">
                            <FaTwitter />
                        </a>

                    </div>
                </div>




            </div>

            <div className='form'>
                <p className="fun-p">
                    This is our good old boring contact me form which works perfectly well.

                </p>
                <form ref={form} className='form' onSubmit={handleSubmit} action="submit">
                    <input required type="text" placeholder='Name' value={name} onChange={((e) => setName(e.target.value))} name="name" id="" />
                    <input required type="email" placeholder='Email' value={email} onChange={((e) => setEmail(e.target.value))} name='email' />
                    <input required type='text' placeholder='Message' value={message} onChange={((e) => setMessage(e.target.value))} name="message" ></input>
                    <button type='submit' className='btn-form'>Send</button>

                </form>

                <p className='fun-p'>Who uses contact me forms these days? You might be saying, The answer is developers cus we gotto keep it fancy :)
                </p>
            </div>


        </div>
    )
}
