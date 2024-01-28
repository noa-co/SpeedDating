// Header.js
import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { googleLogout } from '@react-oauth/google';
import text_logo from '../../assets/flash-flirt-text.png'
import './header.css'
import {ExitToApp, Person, Phone} from "@mui/icons-material";


const Header = () => {
    // Placeholder logo
    // log out function to log the user out of google and set the profile array to null
    const logOut = () => {
        googleLogout();
        window.location.href = '/login'
    };

    return (
        <AppBar color="primary" className="header-main">
            <Toolbar className="header-toolbar">
                <div className="left-options">
                    <div className="header-logout">
                        <Button color="inherit" onClick={logOut} className="header-logout-btn">
                            <ExitToApp/>
                            Log Out
                        </Button>
                    </div>
                </div>
                <div className="header-text-logo">
                    <Button edge="start" color="inherit" aria-label="text-logo" className="text-logo-btn"
                            href="./homepage" style={{ backgroundColor: 'transparent' }}>
                        <img src={text_logo} className="text-logo"/>
                    </Button>
                </div>
                <div className="right-options">
                    <div className="header-edit-profile">
                        <Button color="inherit" href="/user-form" className="header-profile-btn">
                            <Person/>
                            Profile
                        </Button>
                    </div>
                    <div className="header-shared-details">
                        <Button color="inherit" href="/shared-details" className="header-shared-details-btn">
                            <Phone/>
                            Shared
                        </Button>
                    </div>

                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
