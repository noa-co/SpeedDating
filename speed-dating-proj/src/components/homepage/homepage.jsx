// HomePage.js
import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import Header from "../header/header";
import "./homepage.css"
import start_dating from '../../assets/start-dating.png'
import { get } from 'aws-amplify/api';

const myAPI = "apiTest";
const path = "/test/1";


async function invokeLambda() {
    try {
        const restOperation = get({
            apiName: myAPI,
            path: path
        });
        const response = await restOperation.response;
        console.log('GET call succeeded: ', response);
    } catch (error) {
        console.log('GET call failed: ', error);
    }
}



const HomePage = () => {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(true);
    }
    useEffect(() => {
        if(clicked) {
            invokeLambda();
        }
    }, [clicked]);

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
                <div>
                    <button onClick={handleClick}>invoke lambda</button>
                </div>
            </div>

        </div>
    );
};

export default HomePage;
