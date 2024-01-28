import Header from "../header/header";
import React, {useState} from "react";
import ContactDetailsCard from "./contact-details-card/contact-details-card";
import './shared-details-page.css'
import SendMessage from "./send-whatsapp-button/send-message";

const SharedDetailsPage = () => {

    const mockContactData = [
    {'name': 'noa', 'phone': '0527799973', 'city':'TLV', 'age':22, 'id':1},
    {'name': 'michal', 'phone': '0527799973', 'city':'TLV', 'age':22, 'id':2},
    {'name': 'danny', 'phone': '0527799973', 'city':'TLV', 'age':22, 'id':3},
    {'name': 'ido', 'phone': '0527799973', 'city':'TLV', 'age':22, 'id':4},
    {'name': 'rotem', 'phone': '0527799973', 'city':'TLV', 'age':22, 'id':5},
    {'name': 'noa', 'phone': '0527799973', 'city':'TLV', 'age':22, 'id':6},
    {'name': 'bon', 'phone': '0527799973', 'city':'TLV', 'age':22, 'id':7},
    {'name': 'jovi', 'phone': '0527799973', 'city':'TLV', 'age':22, 'id':8},
    {'name': 'miki', 'phone': '0527799973', 'city':'DisneyLand', 'age':22, 'id':9},
    {'name': 'mouse', 'phone': '0527799973', 'city':'DisneyLand', 'age':22, 'id':10},
    {'name': 'cher', 'phone': '0527799973', 'city':'TLV', 'age':22, 'id':11},
        ];

    const togglePopUp = ()=>{
        setShowPopup(!showPopup);
    };

    const [showPopup, setShowPopup] = useState(true);
    const [sendToPhone, setSendToPhone] = useState('');

    const handleWhatsappClick = (phone)=>{
        setSendToPhone(phone);
        togglePopUp();
    }

    return (
        <div className="shared-details-page-main main-div">
            <div className={"header-part"}>
                <Header/>
            </div>
            <div className="shared-details-items">
                {mockContactData.map((contact) => (
                    <ContactDetailsCard key={contact.id} contact={contact} handleClick={()=>handleWhatsappClick(contact.phone)}/>
                ))}
            </div>

            <SendMessage show={showPopup} handleClose={togglePopUp} phone={sendToPhone}/>
        </div>
    );
};

export default SharedDetailsPage;