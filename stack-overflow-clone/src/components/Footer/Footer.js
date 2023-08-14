import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className='foot-main-container'>
                <div className='foot-container'>
                    <div className='foot-col'>
                        <b>STACK OVERFLOW</b>
                        <p>Questions</p>
                        <p>Help</p>
                    </div>
                    <div className='foot-col'>
                        <b>PRODUCTS</b>
                        <p>Teams</p>
                        <p>Advertising</p>
                        <p>Collectives</p>
                        <p>Talent</p>
                    </div>
                    <div className='foot-col'>
                        <b>COMPANY</b>
                        <p>About</p>
                        <p>Press</p>
                        <p>Work Here</p>
                        <p>Legal</p>
                        <p>Teams of Service</p>
                        <p>Contact Us</p>
                        <p>Cookie Settings</p>
                        <p>Cookie Policy</p>
                    </div>
                    <div className='foot-col'>
                        <b>COMPANY</b>
                        <p>Technology</p>
                        <p>Culture & recreation</p>
                        <p>Life & arts</p>
                        <p>Science</p>
                        <p>Professional</p>
                        <p>Business</p>

                    </div>
                    <div className='foot-col social-link'>
                        <div className='foot-col-social'>
                            <p>Blog</p>
                            <p>Facebook</p>
                            <p>Twitter</p>
                            <p>Linkdin</p>
                            <p>Instagram</p>
                        </div>
                        <div className='foot-col-copyright'>
                            <small>Site design / logo © 2023 Stack Exchange Inc; user contributions licensed under CC BY-SA.    rev 2023.8.9.43571</small>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer