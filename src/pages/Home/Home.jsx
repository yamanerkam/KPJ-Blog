import React from 'react'
import './Home.css'
export default function Home() {
    return (
        <div>
            <div className="about-me">
                <h1>👋 Hey, I'm Kam</h1>
                <p className='p1'>I am a computer engineer student who has been lazy for a while :/
                    I am sick of feeling depressed about it. And I have decided to challange myself.
                </p>

                <p>
                    This is my  blog-ish page to keep my journey recorded. My goal is to become empolayable as a programmar in one year.
                    Once I have achieved my goal, I would love to inspire others who need a bit of help.
                    In other words, when new programmers ask me how I became empoyabble, I will be just sharing my blog with them.
                </p>

                <h2 className='question'>How will you do that, Kam?</h2>
                <span className='ideas-title'>Well, I have a couple of ideas :)</span>
                <div className='ideas-list'>
                    <li><span>🔨</span> Build something</li>
                    <li><span>🎓</span> Take courses on Youtube, Udemy, etc.</li>
                    <li><span>🤝</span> Surround yourself with suportive people</li>
                    <li><span>📖</span> Read the bloody Doc</li>
                    <li><span>💖</span> Be nice to yourself</li>
                </div>
                <p>I want to keep this page as authentic as possible so, no AI bot will be used for the content.
                    And it is a great feeling to create your own product.</p>

            </div>
        </div>
    )
}
