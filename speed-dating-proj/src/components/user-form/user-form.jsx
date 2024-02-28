import React, {useEffect, useState} from 'react';
import {
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Button
} from '@mui/material';
import Header from "../header/header";
import './user-form.css'
import { getCurrentUser } from 'aws-amplify/auth';


const locationList = ['North', 'Center', 'South'];
const attractionList = ['Female', 'Male', 'Both'];
const genderList = ['Male', 'Female', 'Other'];


const myAPI = "apiTest";
const path = "/test/1";


// todo noa: use this example to invoke lambdas when theres BE.
async function invokeLambda() {
    try {
        const restOperation = get({
            apiName: myAPI,
            path: path
        });
        const response = await restOperation.response;
        console.log('GET call succeeded: ', response);
    } catch (error) {
        console.log('GET call failed: ', error);
    }
}

const UserForm = () => {
    const [userId, setUserId] = useState(undefined);
    const [username, setUsername] = useState(undefined);

    useEffect(() => {
        currentAuthenticatedUser();
    });

    const currentAuthenticatedUser = ()=>
    {
        getCurrentUser().then(data=>{
            console.log(data);
            setUserId(data.userId);
            setUsername(data.username)

        }).catch(err=>{
            console.log(err);
        })
    };


    // todo here get from server current profile state.
    const [formData, setFormData] = useState({
        location: '',
        gender: '',
        attraction: '',
        dateOfBirth: '',
        phone: '',
    });



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform signup logic (send data to the server, etc.)
        console.log('Form Data:', formData);
    };

    return (
        <div className="user-form-main main-div">
            <div className="user-form-header-div">
                <Header/>
            </div>
            <div className="main-title-div mycard">
                <h2 className="form-title">Profile Details</h2>
            </div>
            <div className="main-form-div mycard  main-div">
                <div className="form-main">
                    <form onSubmit={handleSubmit} className="profile-form">
                        <div className="gender-field">
                            <FormControl required>
                                <InputLabel className="gender-title">Gender:</InputLabel>
                                <Select name="gender" value={formData.gender} onChange={handleChange}>
                                    {genderList.map((gender) => (
                                        <div className="gender-option">
                                            <MenuItem value={gender}>{gender}</MenuItem>
                                        </div>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                        <div className="attraction-field">
                            <FormControl required>
                                <InputLabel className="attraction-title">Attraction:</InputLabel>
                                <Select name="attraction" value={formData.attraction} onChange={handleChange}>
                                    {attractionList.map((attraction) => (
                                        <div className="attraction-option">
                                            <MenuItem value={attraction}>{attraction}</MenuItem>
                                        </div>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                        <div className="location-field">
                            <FormControl required>
                                <InputLabel className="location-title">Location:</InputLabel>
                                <Select name="location" value={formData.location} onChange={handleChange}>
                                    {locationList.map((location) => (
                                        <div className="location-option">
                                            <MenuItem value={location}>{location}</MenuItem>
                                        </div>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                        <div className="birthday-field">
                            <InputLabel className="birthday-title">Date of Birth:*</InputLabel>
                            <TextField
                                required
                                type="date"
                                name="dateOfBirth"
                                value={formData.dateOfBirth}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="phone-number-field">
                            <InputLabel className="phone-number-title">Phone number:</InputLabel>
                            <TextField
                                required
                                value={formData.phone}
                                name="phone"
                                onChange={handleChange}
                                type="tel"
                                pattern="[0-9]{10}"
                                defaultValue="Enter phone number"
                            />

                        </div>
                        <div className="save-btn-main">
                            <Button href='/homepage' type="submit" color="secondary" className="save-btn" size="large">Save</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserForm;
