import React, {useEffect} from 'react';
import Button from "@mui/material/Button";
import loading_gif from '../../../assets/heart-loader.gif'
import './loading-video-chat.css'

const LoadingVideoChat = () => {
    useEffect(() => {
        // todo
        console.log('ask server for a video chat');

        fetch(" https://xab92hx6ih.execute-api.us-east-1.amazonaws.com/staging/findMatch",
            {
                headers : {
                    "Access-Control-Allow-Origin" : "*"
                }
            })
            .then(r => {
                if (!r.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = r.json();
                window.location.href = '/video-chat?token=' + data["token"] + "session_id=" + data["session_id"];
            })
            .catch(error => {
                throw new Error('Network response was not ok');
            });


    }, []); // The empty dependency array means the effect runs once when the component mounts

    return (
        <div className="loading-video-chat-main main-div">
            <div className="loading-video-chat-card mycard">
                <div>
                    <h2 className="loading-video-title">
                        Looking for a match...
                    </h2>
                </div>
                <div className="loading-video-loader">
                    <img className="loader" src={loading_gif} alt="Looking for a match..."/>
                </div>
                <div className="loading-video-cancel">
                    <Button href="./homepage" className="cancel-loading-btn"
                            style={{backgroundColor: '#fa3ac56b'}}>Cancel</Button>
                </div>
            </div>
        </div>
    );
};

export default LoadingVideoChat;