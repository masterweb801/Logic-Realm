import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const AppLandingPage = () => {
    const { slug } = useParams();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [slug]);

    return (
        <div>App Landing Page</div>
    )
}

export default AppLandingPage