import React from "react";
import SendWhatsAppBtn from "../send-whatsapp-button/send-whatsapp-button";
import './contact-details-card.css';
import person_avatar from '../../../assets/person-love.png'

const ContactDetailsCard = (props) => {

    return (
        <div className={"mycard details-card-container details-card-"+props.contact.name}>
        <header className="details-card-header">
                <img className="person-avatar" src={person_avatar} alt={props.contact.name} />
            </header>
            <h1 className="bold-text">
                {props.contact.name}
                <span className="normal-text">{props.contact.age}</span>
            </h1>
            <h2 className="normal-text">{props.contact.city}</h2>
            <div className="contact-details">
                <div className="phone-number">
                    <h1 className="bold-text">{props.contact.phone}</h1>
                </div>
                <div className="send-whatsapp">
                    <SendWhatsAppBtn phone={props.contact.phone}/>
                </div>
            </div>
        </div>
    );
};

export default ContactDetailsCard;