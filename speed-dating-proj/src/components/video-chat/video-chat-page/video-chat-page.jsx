// VideoChatPage.js
import React, { useState, useEffect } from 'react';
import { Typography, Button } from '@mui/material';
import './video-chat-page.css';
import Meeting from "../video-display/meeting";
import {useNavigate} from 'react-router-dom'


const VideoChatPage = () => {
    const navigate = useNavigate();

    const initialTimer = 5 * 60; // 10 minutes in seconds
    const [timer, setTimer] = useState(initialTimer);
    const [didExtendTime, setDidExtendTime] = useState(false);

    useEffect(() => {
        if (timer <= 0) {
            handleTimerEnd();
        }
    }, [timer]);

    const handleTimerEnd = ()=>{
        console.log('timer ended, chat finished');
        navigate('/finished-chat');
    };


    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
        }, 1000);

        return () => clearInterval(timerInterval);
    }, []);

    const handleNextConversation = () => {
        // Implement logic to move to the next conversation
        console.log('Moving to the next conversation');
        navigate('/finished-chat')
    };

    const handleRequestAnother10Minutes = () => {
        setDidExtendTime(true);
        setTimer(timer + 10*60); // Reset timer to 10 minutes
        // Implement logic to request another 10 minutes
        console.log('Requesting another 10 minutes');
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    };

    return (
        <div className="video-chat-page-main main-div">
            <div className="video-chat-card mycard">
                {/*<Typography variant="h5" color="primary" className="video-chat-title">Talking to Yoav</Typography>*/}
                <div className="video-chat-container">
                    <Meeting/>
                </div>
            </div>
            <div className="video-chat-actions-card mycard">
                <div className="video-chat-timer">
                    <Typography variant="h5">Time left: {formatTime(timer)}</Typography>
                </div>
                <div className="video-chat-action-btns">
                    <div className="next-conversation-btn">
                        <Button variant="contained" color="secondary" onClick={handleNextConversation}>
                            Next Conversation
                        </Button>
                    </div>
                    <div className="add-time-btn">
                        <Button variant="contained" color="secondary" disabled={didExtendTime} onClick={handleRequestAnother10Minutes}>
                            Lets keep talking
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoChatPage;
