import { FilterList } from '@mui/icons-material';
import React from 'react'
import { Link } from 'react-router-dom'
import AllQuestions from './AllQuestions';
import './CSS/Main.css';

const Main = () => {
    return (
        <div className='main'>
            <div className='main-container'>
                <div className='main-top'>
                    <h2>All Questions</h2>
                    <Link to = '/add-question'>
                        <button>Ask Question</button>
                    </Link>
                </div>
                <div className='main-dec'>
                    <p>All Question stat</p>
                    <div className='main-filter'>
                        <div className='main-tabs'>
                            <div className='main-tab'>
                                <Link className='link-1'>Newest</Link>
                            </div>
                            <div className='main-tab'>
                                <Link className='link-2'>Active</Link>
                            </div>
                            <div className='main-tab'>
                                <Link className='link-3'>More</Link>
                            </div>
                        </div>
                        <div className='main-filter-item'>
                            <FilterList />
                            <p>filter</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='questions'>
                <div className='question'>
                    <AllQuestions />
                    <AllQuestions />
                    <AllQuestions />
                    <AllQuestions />
                    <AllQuestions />
                    <AllQuestions />
                    <AllQuestions />
                    <AllQuestions />
                </div>
            </div>
        </div>
    );
}

export default Main