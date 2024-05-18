import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFormatDate from './useFormatDate';

const useFindBlogByID = (id) => {
    const [blogData, setBlogData] = useState('');
    const [loading, setLoading] = useState(true);
    const [date, setDate] = useState('')
    const { formatDate } = useFormatDate()
    const fetchTheBlogById = async () => {
        console.log(id)
        setLoading(true)
        try {
            const response = await fetch(`http://localhost:3000/api/blogs/${id}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setBlogData(data)
            setDate(formatDate(data.createdAt))
        } catch (error) {
            console.error('Error fetching blogs:', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchTheBlogById()
    }, [])


    return {
        blogData, date, loading
    }
}

export default useFindBlogByID;