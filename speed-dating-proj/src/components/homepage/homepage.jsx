// HomePage.js
import React from 'react';
import { Button } from '@mui/material';
import Header from "../header/header";
import "./homepage.css"
import start_dating from '../../assets/start-dating.png'

const HomePage = () => {
    return (
        <div className="main-div">
            <Header/>

            <div className="homepage-body main-div">
                <Button
                    className="start-dating-button"
                    variant="contained"
                    style={{borderRadius: 200, padding: 40}}
                    href="/loading-chat"
                >
                    <img src={start_dating} className="start-dating-image"/>
                    <div className="start-dating-text">Start Dating</div>
                </Button>
            </div>
        </div>
    );
};

export default HomePage;
