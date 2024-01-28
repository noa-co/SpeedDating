import Header from "../header/header";
import React from "react";
import ContactDetailsCard from "./contact-details-card/contact-details-card";
import './shared-details-page.css'

const SharedDetailsPage = () => {

    const mockContactData = [
    {'name': 'noa', 'phone': '0527799973', 'city':'TLV', 'age':22},
    {'name': 'michal', 'phone': '0527799973', 'city':'TLV', 'age':22},
    {'name': 'danny', 'phone': '0527799973', 'city':'TLV', 'age':22},
    {'name': 'ido', 'phone': '0527799973', 'city':'TLV', 'age':22},
    {'name': 'rotem', 'phone': '0527799973', 'city':'TLV', 'age':22},
    {'name': 'noa', 'phone': '0527799973', 'city':'TLV', 'age':22},
    {'name': 'bon', 'phone': '0527799973', 'city':'TLV', 'age':22},
    {'name': 'jovi', 'phone': '0527799973', 'city':'TLV', 'age':22},
    {'name': 'miki', 'phone': '0527799973', 'city':'DisneyLand', 'age':22},
    {'name': 'mouse', 'phone': '0527799973', 'city':'DisneyLand', 'age':22},
    {'name': 'cher', 'phone': '0527799973', 'city':'TLV', 'age':22},
        ];


    return (
        <div className="shared-details-page-main main-div">
            <div className={"header-part"}>
                <Header/>
            </div>
            <div className="shared-details-items">
                {mockContactData.map((contact) => (
                    <ContactDetailsCard contact={contact}/>
                ))}
            </div>
        </div>
    );
};

export default SharedDetailsPage;