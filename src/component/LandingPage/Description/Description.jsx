import React from 'react'
import './Description.css'
import CheckIcon from '@mui/icons-material/Check';

const Description = () => {
    return (
        <section className="description-section">
            <h2>About this app</h2>
            <div className="desc-prose">
                <p className="desc-p">
                    TaskFlow Pro revolutionizes personal and team productivity with its intuitive interface and
                    powerful features. Built for professionals, students, and teams who demand excellence, this
                    application seamlessly integrates task management, project planning, and collaboration tools
                    into one cohesive platform.
                </p>
                <p className="desc-s">
                    Experience unprecedented control over your workflow with smart scheduling, automated
                    reminders, and real-time collaboration features that keep everyone aligned and productive.
                </p>

                <h3>Key Features</h3>
                <ul>
                    <li>
                        <CheckIcon />
                        <span>Smart task prioritization with AI-powered suggestions</span>
                    </li>
                    <li>
                        <CheckIcon />
                        <span>Real-time collaboration and team synchronization</span>
                    </li>
                    <li>
                        <CheckIcon />
                        <span>Cross-platform synchronization across all devices</span>
                    </li>
                    <li >
                        <CheckIcon />
                        <span>Advanced analytics and productivity insights</span>
                    </li>
                    <li>
                        <CheckIcon />
                        <span>Customizable workflows and automation rules</span>
                    </li>
                    <li>
                        <CheckIcon />
                        <span>Secure cloud storage with offline access</span>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Description