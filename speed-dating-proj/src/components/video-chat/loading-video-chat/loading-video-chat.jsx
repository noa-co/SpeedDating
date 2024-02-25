import React, {useEffect} from 'react';
import Button from "@mui/material/Button";
import loading_gif from '../../../assets/heart-loader.gif'
import './loading-video-chat.css'
import { get } from 'aws-amplify/api';

const LoadingVideoChat = () => {
    useEffect(() => {
        console.log('ask server for a video chat');

        try {
            const restOperation = get({
                apiName: 'matches',
                path: '/matches/find',
                options: {
                    headers: {
                        Authorization: 'test'
                    }
                }
            });
            const response = restOperation.response;
            console.log(response);
            // window.location.href = '/video-chat?token=' + response["token"] + "session_id=" + response["session_id"];
        } catch (error) {
            console.log('GET call failed: ', error);
        }


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