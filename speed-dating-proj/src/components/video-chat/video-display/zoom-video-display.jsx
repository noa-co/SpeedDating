// VideoChatPage.js
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import ZoomVideo from '@zoom/videosdk';


const VideoZoomDisplay = () => {


    const client = ZoomVideo.createClient();
    let stream;

    const [meetingData, setMeetingData] = useState({
        sessionName : '',
        VIDEO_SDK_JWT : '',
        userName: '',
        sessionPasscode: ''
    });


    useEffect(() => {
        // Fetch meeting data from your server
        axios.get('https://your-server/api/meeting')
            .then(response => {
                setMeetingData(response.data);

                client.init('en-US', 'Global', {patchJsMedia: true}).then(() => {
                    client.join(meetingData.sessionName, meetingData.VIDEO_SDK_JWT,
                        meetingData.userName, meetingData.sessionPasscode).then(() => {
                        stream = client.getMediaStream()
                    }).then(() => {
                        if (stream.isRenderSelfViewWithVideoElement()) {
                            stream.startVideo({videoElement: document.querySelector('#my-self-view-video')}).then(() => {
                                // video successfully started and rendered
                            }).catch((error) => {
                                console.log(error)
                            })
                        } else {
                            stream.startVideo().then(() => {
                                stream.renderVideo(document.querySelector('#my-self-view-canvas'), client.getCurrentUserInfo().userId, 1920, 1080, 0, 0, 3).then(() => {
                                    // video successfully started and rendered
                                }).catch((error) => {
                                    console.log(error)
                                })
                            }).catch((error) => {
                                console.log(error)
                            })
                        }
                    });
                });

            })
            .catch(error => {
                console.error('Error fetching meeting data from server:', error);
            });
    });


    return (
        <div>
            <h1>Zoom Video Chat</h1>
            {/* Container for the video */}
            <div id="my-self-view-video"></div>
            <canvas id="my-self-view-canvas"></canvas>
        </div>
    );
};

export default VideoZoomDisplay;
