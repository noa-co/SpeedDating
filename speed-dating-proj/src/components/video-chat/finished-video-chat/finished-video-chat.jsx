import Button from "@mui/material/Button";
import './finished-video-chat.css'
import  {useNavigate} from 'react-router-dom'

const FinishedVideoChat = () => {
    const navigate = useNavigate();

    const onShareClicked = ()=>{
        // todo send to server
        navigate('/loading-chat');
    };

    const onDontShareClicked = ()=>{
        // todo send to server
        navigate('/loading-chat');
    };

    return (
        <div className="finished-video-chat-main main-div">
            <div className="finished-video-chat-card mycard">
                <div>
                    <h2 className="finished-video-title">
                        Do you want to share your details?
                    </h2>
                </div>
                <div >
                    <div className="finished-video-button">
                        <Button className="share-details-button"
                                onClick={onShareClicked}
                                style={{backgroundColor:'#fa3ac56b'}} >

                            Yes
                        </Button>
                    </div>
                    <div className="finished-video-button">
                        <Button className="dont-share-details-button"
                                onClick={onDontShareClicked}
                                style={{backgroundColor:'rgba(250,0,29,0.75)'}}>
                            No
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinishedVideoChat;