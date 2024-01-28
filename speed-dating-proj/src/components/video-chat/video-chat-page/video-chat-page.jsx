// VideoChatPage.js
import React, { useState, useEffect } from 'react';
import { Typography, Button } from '@mui/material';

const VideoChatPage = () => {
    const initialTimer = 10 * 60; // 10 minutes in seconds
    const [timer, setTimer] = useState(initialTimer);

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
        }, 1000);

        return () => clearInterval(timerInterval);
    }, []);

    const handleNextConversation = () => {
        // Implement logic to move to the next conversation
        console.log('Moving to the next conversation');
    };

    const handleRequestAnother10Minutes = () => {
        setTimer(initialTimer); // Reset timer to 10 minutes
        // Implement logic to request another 10 minutes
        console.log('Requesting another 10 minutes');
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    };

    return (
        <div>

            <Typography variant="h4">Video Chat</Typography>
            <div>
                <Typography variant="h5">Timer: {formatTime(timer)}</Typography>
                <Button variant="contained" color="primary" onClick={handleNextConversation}>
                    Next Conversation
                </Button>
                <Button variant="contained" color="secondary" onClick={handleRequestAnother10Minutes}>
                    Request Another 10 Minutes
                </Button>
            </div>
            {/* Add video chat component here */}
        </div>
    );
};

export default VideoChatPage;
