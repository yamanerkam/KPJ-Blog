import React from 'react'
import './About.css'

import Mongo from './icons/MongoDB.svg'
import Express from './icons/Express.svg'
import JsIcon from './icons/js.png'
import TypeScript from './icons/ts.png'
import ReactLogo from './icons/react-2.svg'
import HtmlLogo from './icons/html.png'
import CSSLogo from './icons/css.png'
import NodeLogo from './icons/node.svg'
import Aws from './icons/aws.svg'


export default function About() {
    return (
        <div className='about-p'>
            <h1>Who are you Kam?</h1>
            <p>Hello there! My name is Erkam but you can just call me Kam like a camera which is my nickname.
                But bear in my mind that I am not camera but a human being who happens to  be a computer engineering student.
            </p>
            <p>I am particulary intrested in web development. I am currently focusing on building fullstack websites for my portfolio.
                And apparently this blog looking page is one of them.
            </p>

            <p>
                I don't really like saying I know such techs like React.js, Express.js etc. Because I believe that learning never stops and knowing can't be fully achieved in the tratiditional sense.
            </p>
            <p>But of course I am more than happy to share the techs I am into :)</p>

            <div className="progress">
                <div className='a'>
                    <h3>
                        Making Progress
                    </h3>
                    <div className='icons made-progress'>
                        <img className='icon' src={HtmlLogo} alt="" />
                        <img className='icon' src={CSSLogo} alt="" />
                        <img className='icon' src={JsIcon} alt="" />
                        <img className='icon' src={ReactLogo} alt="" />
                        <img className='icon' src={Aws} alt="" />
                    </div>
                </div>
                <div className="b">
                    <h3>
                        Will be Making Progress
                    </h3>
                    <div className='icons wanna-learn'>
                        <img className='icon' src={TypeScript} alt="" />
                        <img className='icon' src={NodeLogo} alt="" />
                        <img className='icon' src={Express} alt="" />
                        <img className='icon' src={Mongo} alt="" />
                    </div>

                </div>


            </div>
        </div>
    )
}
