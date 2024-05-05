import React from 'react'
import './ContactMe.css'
export default function ContactMe() {
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
                <form className='form' action="submit">
                    <input required type="text" placeholder='Name' name="name" id="" />
                    <input required type="email" placeholder='Email' name='email' />
                    <textarea required placeholder='Message' name="message" id="" cols="20" rows="1"></textarea>
                    <button className='btn-form'>Send</button>

                </form>
            </div>
        </div>
    )
}
