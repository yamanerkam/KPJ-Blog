import React from 'react'
import './BlogID.css'
import { useParams } from 'react-router-dom';
import useFindBlogByID from '../../hooks/useFindBlogByID.JSX';
export default function BlogID() {
    const { id } = useParams();
    const { blogData, date, loading } = useFindBlogByID(id)
    console.log(blogData)
    function estimateReadingTime(text) {
        const wordsPerMinute = 200;
        const wordCount = text.trim().split(/\s+/).length;
        const readingTimeMinutes = Math.ceil(wordCount / wordsPerMinute);
        return readingTimeMinutes;
    }


    return (
        <div>
            {loading ? (

                <h1>loading</h1>) : (

                <>
                    <div className='up'>
                        <p>Published on {date}</p>
                        <p>{'• ' + estimateReadingTime(blogData.content) + ' minutes to read'}</p>
                    </div>
                    <h1>{blogData.title}</h1>
                    <p>{blogData.content}</p>
                </>)}



        </div>
    )
}
