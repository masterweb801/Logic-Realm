import React, { useEffect } from 'react'
import './css/Support.css'
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const Support = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])
    return (
        <div className="support-page">
            <div className="support-container">
                <h2>Welcome to Logic Realm Support Forum</h2>
                <p className='support-subtitle'>
                    If you have any questions or issues you can post them here and we will get back to you as soon as
                    possible. Please don't write any unwanted text otherwise we will delete them.
                </p>

                <label className="rct-txt">
                    <h3>&nbsp; Recent Posts</h3>
                </label>

                <ul className="posts">
                    <li>
                        <h4>Bug Reporting</h4>
                        <p className='post-message'>
                            If there are any bugs, please report me. I will fix that. The site is on its developing phrase.
                        </p>
                        <div className="post-bottom">
                            <p className="meta">Posted by MD Mobashshirul Karim on 2024-02-19</p>
                            <a href="reply.php?id=63"><button className="reply">Reply</button></a>
                        </div>
                    </li>
                    <li className="reply-txt">
                        <h4>Owner&nbsp; &nbsp; <TaskAltIcon /> </h4>
                        <p className='post-message'>
                            something!
                        </p>
                        <div className="post-bottom">
                            <p className="meta">Replied on 2024-02-19</p>
                        </div>
                    </li>
                    <li className="reply-txt">
                        <h4>Owner&nbsp; &nbsp; <TaskAltIcon /> </h4>
                        <p className='post-message'>
                            something!
                        </p>
                        <div className="post-bottom">
                            <p className="meta">Replied on 2024-02-19</p>
                        </div>
                    </li>
                    <li>
                        <h4>Bug Reporting</h4>
                        <p className='post-message'>
                            If there are any bugs, please report me. I will fix that. The site is on its developing phrase.
                        </p>
                        <div className="post-bottom">
                            <p className="meta">Posted by MD Mobashshirul Karim on 2024-02-19</p>
                            <a href="reply.php?id=63"><button className="reply">Reply</button></a>
                        </div>
                    </li>
                    <li className="reply-txt">
                        <h4>Owner&nbsp; &nbsp; <TaskAltIcon /> </h4>
                        <p className='post-message'>
                            something!
                        </p>
                        <div className="post-bottom">
                            <p className="meta">Replied on 2024-02-19</p>
                        </div>
                    </li>
                </ul>

                <label className="rct-txt">
                    <h3>&nbsp; Start a New Thread</h3>
                </label>

                <form method="post">
                    <fieldset>
                        <div className="bind">
                            <label htmlFor="name"><b>Name:- </b></label>
                            <input type="text" name="name" id="name" placeholder="Your Name" autoComplete='name' autoCapitalize='words' required />
                            <label htmlFor="subject"><b>Subject:- </b></label>
                            <input type="text" name="subject" id="subject" placeholder="Subject" required />
                            <label htmlFor="description"><b>Description:- </b></label><br />
                            <textarea id="description" name="description" placeholder="Describe Your Problems..." style={{ height: "150px" }} required=""></textarea>
                            <button type="submit" className="submit" name="submit">Post</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Support