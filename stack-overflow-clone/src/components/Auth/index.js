import React, { useState , useEffect} from 'react'
import eventBus from './EventBus';
import './index.css'


function Index() {
    const [register,setRegister] = useState(null)

    useEffect(() => {
        const eventListener = eventBus.on('authEvent', (value) => {
            setRegister(value);
        })});

    return (
        <div className='auth'>
            <div className='auth-container'>
                <p>Add another way to login using any of the following services</p>
                <div className='sign-options'>
                    <div className='single-option'>
                        <img src="https://img.icons8.com/?size=512&id=17949&format=png" alt="google" />
                        <p>Login with Google</p>
                    </div>
                </div>
                <div className='auth-login'>
                    <div className='auth-login-container'>
                        {register ? (
                            <>
                                <div className='input-field'>
                                    <p>Username</p>
                                    <input type='text' />
                                </div>
                                <div className='input-field'>
                                    <p>Email</p>
                                    <input type='text' />
                                </div>
                                <div className='input-field'>
                                    <p>Password</p>
                                    <input type='text' />
                                </div>
                                <button>Register</button>
                            </>
                        ) : (
                            <>
                                <div className='input-field'>
                                <p>Email</p>
                                <input type='text' />
                                </div>
                                <div className='input-field'>
                                <p>Password</p>
                                <input type='text' />
                                </div>
                                <button>Login</button>
                            </>
                            )
                        }
                        <p
                            onClick={()=>setRegister(!register)}
                        
                        >{register ? "login" : "Register"}
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index