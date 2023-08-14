import { Bookmark, History, Padding } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { useState } from "react";
import ReactQuill from "react-quill";
import { Link } from "react-router-dom";
import 'react-quill/dist/quill.snow.css'    // qull ka css hai
// import { TagsInput } from 'react-tag-input-component'
import './index.css'

function MainQuestion() {
    const [show,setShow] = useState(false)
    return (
        <div className="main">
            <div className="main-container">
                <div className="main-top">
                    <h2 className="main-question">This is Question title</h2>
                    <Link to = '/add-question'>
                        <button>Ask Question</button>
                    </Link>
                </div>
                    <div className="main-desc">
                        <div className="info">
                            <p>Timestamp</p>
                            <p>Active<span>today</span></p>
                            <p>Viewed<span>43 times</span></p>
                        </div>            
                    </div>
                <div className="all-questions">
                    <div className="all-questions-container">
                        <div className="all-questions-left">
                            <div className="all-options">
                            <p className="arrow"><i>▲</i></p>
                            <p className="num"><strong>0</strong></p>
                            <p className="arrow"><i>▼</i></p>
                            <Bookmark />
                            <History />
                            </div>
                        </div>
                        <div className="question-answer">
                            <p>This is Question body</p>
                            <div className="author">
                                <small>asked "Timestamp"</small>
                                <div className="auth-details">
                                    <Avatar />
                                    <p>Author name</p>
                                </div>
                            </div>
                            <div className="comments">
                                <div className="comment">
                                    <p>This is comment -<span>User name</span><small>Timestamp</small></p>
                                </div>
                                <p onClick={()=> setShow(!show)}>Add a comment</p>
                                {
                                    show && (<div className="title" >
                                        <textarea type='text' placeholder="Add your comment..." rows={5}
                                        style={{
                                            margin: "5px 0px",
                                            Padding: "10px",
                                            border: "1px solid rgba(0,0,0,0.2)",
                                            borderRadius: "3px",
                                            outline: "none",
                                            
                                        }}></textarea>
                                        <button style={{
                                            maxWidth: "fit-content",
                                        }}>Add comment</button>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="all-questions">
                    <p>No. of answers</p>
                    <div className="all-questions-container">
                        <div className="all-questions-left">
                            <div className="all-options">
                            <p className="arrow"><i>▲</i></p>
                            <p className="num"><strong>0</strong></p>
                            <p className="arrow"><i>▼</i></p>
                            <Bookmark />
                            <History />
                            </div>
                        </div>
                        <div className="question-answer">
                            <p>This is Question body</p>
                            <div className="author">
                                <small>asked "Timestamp"</small>
                                <div className="auth-details">
                                    <Avatar />
                                    <p>Author name</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div  className="main-answer">
                <h3>Your Answer</h3>
                <ReactQuill className="react-quill" theme="snow" style={{
                    height: "200px"
                }} />
            </div>
            <button style={{
                maxWidth: "fit-content",
                marginTop: "100px"
            }}>Post your answer</button>
        </div>
    );
}

export default MainQuestion;