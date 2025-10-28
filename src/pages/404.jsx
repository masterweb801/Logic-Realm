import React, { useEffect, useRef } from 'react'
import './css/404.css'


const ErrorPage = () => {
    const eyeRef = useRef(null);
    const eyeballRef = useRef(null);

    function eyeball() {
        let eye = eyeRef.current;
        let eyeball = eyeballRef.current;

        if (!eye || !eyeball) return;

        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
        let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);


        let radian = Math.atan2(event.pageX - x, event.pageY - y);

        let rot = (radian * (180 / Math.PI) * -1) + 270;
        eye.style.transform = "rotate(" + rot + "deg)";
    }

    const handleMouseOver = () => {
        const eyeball = eyeballRef.current;
        if (eyeball) eyeball.style.left = '50%';
    };

    const handleMouseOut = () => {
        const eyeball = eyeballRef.current;
        if (eyeball) eyeball.style.left = '36%';
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });

        document.addEventListener("mousemove", eyeball);
        const eyeballEl = eyeballRef.current;
        if (eyeballEl) {
            eyeballEl.addEventListener('mouseover', handleMouseOver);
            eyeballEl.addEventListener('mouseout', handleMouseOut);
        }

        return () => {
            document.removeEventListener("mousemove", eyeball);
            if (eyeballEl) {
                eyeballEl.removeEventListener('mouseover', handleMouseOver);
                eyeballEl.removeEventListener('mouseout', handleMouseOut);
            }
        }
    }, []);
    return (
        <div className='container_404'>
            <div className="text_404">
                <h1>4</h1>
                <div className="eye" ref={eyeRef}>
                    <div className="eyeball" ref={eyeballRef}></div>
                </div>
                <h1>4</h1>
            </div>
            <p className='description_404'>
                Oops! Page not found.
            </p>
        </div>
    )
}

export default ErrorPage