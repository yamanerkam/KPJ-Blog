import React, { useEffect, useState } from 'react'
import useBlogs from '../../hooks/useBlogs';
import './Blog.css'
import BlogArea from './BlogArea';

import { useNavigate } from "react-router-dom";


export default function Blog() {
    const { blogs, loading } = useBlogs();
    const navigate = useNavigate()
    function estimateReadingTime(text) {
        const wordsPerMinute = 200;
        const wordCount = text.trim().split(/\s+/).length;
        const readingTimeMinutes = Math.ceil(wordCount / wordsPerMinute);
        return readingTimeMinutes;
    }
    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <>
                    <h1>Blogs</h1>
                    <p>
                        In total I've written {blogs.length} tutorials and posts on the internet.
                        This site is a collection of most of them.
                    </p>

                    {blogs.map((blog) => (
                        <BlogArea
                            onClick={((e) => navigate(`/blog/${blog._id}`))}
                            key={blog._id}
                            id={blog._id}
                            category={blog.category}
                            title={blog.title}
                            createdAt={blog.createdAt}
                            minutes={`• ${estimateReadingTime(blog.content)} minutes to read`}
                        />
                    ))}
                </>
            )}





        </div>
    )
}
