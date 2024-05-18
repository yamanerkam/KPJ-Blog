import React, { useState, useEffect } from 'react'
import './BlogArea.css'
import useFindBlogByID from '../../hooks/useFindBlogByID.JSX'
import useFormatDate from '../../hooks/useFormatDate'

import ReactPng from './reactt.svg'
import NodePng from './nodee.svg'
import DockerPng from './dockerr.svg'
import SocketPng from './socket-io.svg'

export default function BlogArea(props) {
    const { formatDate } = useFormatDate()
    const [imgSrc, setImgSrc] = useState()
    const { date } = useFindBlogByID(props.id)
    console.log(props.id)
    useEffect(() => {
        switch (props.category) {
            case 'react':
                setImgSrc(ReactPng);
                break;
            case 'node js':
                setImgSrc(NodePng);
                break;
            case 'docker':
                setImgSrc(DockerPng);
                break;
            case 'socket io':
                setImgSrc(SocketPng);
                break;
            default:
                setImgSrc(null);
                break;
        }
    }, []);

    console.log(date)

    return (
        <div onClick={props.onClick} className='blog-card'>
            <img src={imgSrc} alt={props.title} />
            <div className='inside-text'>
                <p className='title' >{props.title}</p>
                <div className='parags'>
                    <p>{date}</p>
                    <p>{props.minutes}</p>
                </div>
            </div>
        </div>
    )
}
