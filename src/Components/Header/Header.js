import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h1>Peoples' Salary Manage</h1>

            <nav>
                <a href="/home">Home</a>
                <a href="/profile">Profile</a>
                <a href="/manage">Manage</a>
            </nav>
        </div>

        
        
    );
};

export default Header;