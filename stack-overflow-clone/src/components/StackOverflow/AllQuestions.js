import { Avatar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './CSS/AllQuestions.css'

const AllQuestions = () => {
    return (
        <div className='all-questions'>
            <div className='all-questions-container'>
                <div className='all-questions-left'>
                    <div className='all-options'>
                        <div className='all-option'>
                            <p>0</p>
                            <span>Votes</span>
                        </div>
                        <div className='all-option'>
                            <p>0</p>
                            <span>Answers</span>
                        </div>
                        <div className='all-option'>
                            <small>0 Views</small>
                        </div>
                    </div>
                </div>
                <div className='question-answer'>
                    <Link to = '/question'>How to use drag and drop in ant design ?</Link>
                    <div style={{
                        width: "90%"
                    }}>
                    <div>What I want is an example about how to make the drag and drop of my Table thta works properly,   but I cannot figure out how to make it works</div>   
                    </div>
                    <div style={{
                    display:"flex"
                    }}>
                        <span className='question-tags'>react</span>
                        <span className='question-tags'>Material Ui</span>
                        <span className='question-tags'>frontend</span>
                    </div>
                    <div className='author'>
                        <small>Timestamp</small>
                        <div className='author-details'>
                            <Avatar />
                            <p>User name</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllQuestions