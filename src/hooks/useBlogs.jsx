import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFormatDate from './useFormatDate';

const useBlogs = () => {
    const [blogs, setBlogs] = useState(null);
    const [loading, setLoading] = useState(true);
    const fetchBlogs = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:3000/api/blogs');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setBlogs(data);
        } catch (error) {
            console.error('Error fetching blogs:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);



    return {
        blogs, loading
    }
}

export default useBlogs;
