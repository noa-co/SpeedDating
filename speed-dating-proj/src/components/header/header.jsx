// Header.js
import React, {useEffect, useState} from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import text_logo from '../../assets/flash-flirt-text.png'
import './header.css'
import {ExitToApp, Person, Phone} from "@mui/icons-material";
import { getCurrentUser, signOut } from 'aws-amplify/auth';
import {useNavigate} from 'react-router-dom'





const Header = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState(undefined);

    useEffect(() => {
        currentAuthenticatedUser();
    }, [navigate]);

    const currentAuthenticatedUser = ()=>
    {
        getCurrentUser().then(data=>{
            console.log(data);
            setUsername(data.username);

        }).catch(err=>{
            console.log(err);
        })
    };

    const handleSignOut= ()=>{
        signOut().then(()=>{
            navigate('/login');
        }).catch (error=>{
            console.log('error signing out: ', error);
        })
    };


    return (
        <AppBar color="primary" className="header-main">
            <Toolbar className="header-toolbar">
                <div className="left-options">
                    <div className="header-logout">
                        <Button color="inherit" onClick={handleSignOut} className="header-logout-btn">
                            <ExitToApp/>
                            Log Out {username}
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
