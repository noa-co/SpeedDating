import React from "react";
import './send-whatsapp-button.css'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import IconButton from "@mui/material/IconButton";


const SendWhatsAppBtn = (props) => {

    const onSendMessageClicked = (phone)=>{
        // todo send to server
    };


    return (
        <div className={ "whatsapp-main whatsapp-"+props.phone}>
            <div className="send-whatsapp-btn-main">
                <IconButton color="success" size="large" onClick={()=> onSendMessageClicked(props.phone)}>
                    <WhatsAppIcon />
                </IconButton>
            </div>
        </div>
    );
};

export default SendWhatsAppBtn;