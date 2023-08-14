import React from "react";
import './CSS/Header.css';
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import eventBus from "../Auth/EventBus";

function Header(){
    const handleSendTrue = () => {
        eventBus.emit('authEvent', true);
    };
    
    const handleSendFalse = () => {
        eventBus.emit('authEvent', false);
    };

    return <header>
        <div className="header-container">
            <div className="header-left">
                <Link className="logo" to ='/' >
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Stack_Overflow_logo.svg/220px-Stack_Overflow_logo.svg.png"
                    alt="logo" />
                </Link>
                <Link to ='/about'>
                    <h3>About</h3>
                </Link>
                <Link to = '/products'>
                    <h3>Products</h3>
                </Link>
                <Link to = '/forteams'>
                    <h3>For Teams</h3>
                </Link>
            </div>

            <div className="header-middle">
                <div className="header-search-container">
                    <SearchIcon />
                    <input type="text" placeholder="Search..." />
                </div>
            </div>

            <div className="header-right">
                <div className="header-right-container">
                    <Link className="login" to = "/auth"><button onClick={handleSendFalse}>Login</button></Link>
                    <Link className="signup" to = '/auth'><button onClick={handleSendTrue}>Sign up</button></Link>
                </div>
            </div>
        </div>
    </header>
    
}

export default Header;