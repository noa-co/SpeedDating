import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import {
    Typography,
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Slider,
    Checkbox,
    FormGroup,
    FormControlLabel,
    Button
} from '@mui/material';
import Header from "../header/header";
import {Circle} from "@mui/icons-material";
import './user-form.css'

const hobbiesList = ['Reading', 'Traveling', 'Cooking', 'Photography', 'Gardening'];
const attractionList = ['Female', 'Male', 'Both'];
const genderList = ['Male', 'Female', 'Other'];
const maritalStatusList = ['Single', 'Divorced', 'Widowed', 'Other'];



const UserForm = () => {
    // todo here get from server current profile state.
    const [formData, setFormData] = useState({
        location: { lat: 0, lng: 0 },
        radius: 5000, // Initial radius in meters
        gender: '',
        attraction: '',
        marital_status: '',
        dateOfBirth: '',
        hobbies: [],
    });

    const handleLocationChange = (latLng) => {
        setFormData((prevData) => ({
            ...prevData,
            location: {
                lat: latLng.lat(),
                lng: latLng.lng(),
            },
        }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleHobbiesChange = (e) => {
        const { value, checked } = e.target;
        setFormData((prevData) => {
            if (checked) {
                return {
                    ...prevData,
                    hobbies: [...prevData.hobbies, value],
                };
            } else {
                return {
                    ...prevData,
                    hobbies: prevData.hobbies.filter((hobby) => hobby !== value),
                };
            }
        });
    };

    const handleRadiusChange = (e) => {
        const radius = parseInt(e.target.value, 10);
        setFormData((prevData) => ({
            ...prevData,
            radius: isNaN(radius) ? 0 : radius,
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
                    <form onSubmit={handleSubmit}>
                        {/*<div className="location-field">*/}
                        {/*    <InputLabel className="location-title">Location:</InputLabel>*/}
                        {/*    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">*/}
                        {/*        <GoogleMap*/}
                        {/*            center={formData.location}*/}
                        {/*            onClick={(e) => handleLocationChange(e.latLng)}*/}
                        {/*        >*/}
                        {/*            <Marker position={formData.location} />*/}
                        {/*            <Circle*/}
                        {/*                center={formData.location}*/}
                        {/*                radius={formData.radius}*/}
                        {/*                options={{*/}
                        {/*                    strokeColor: '#FF0000',*/}
                        {/*                    strokeOpacity: 0.8,*/}
                        {/*                    strokeWeight: 2,*/}
                        {/*                    fillColor: '#FF0000',*/}
                        {/*                    fillOpacity: 0.35,*/}
                        {/*                }}*/}
                        {/*            />*/}
                        {/*        </GoogleMap>*/}
                        {/*    </LoadScript>*/}
                        {/*</div>*/}
                        <div className="radius-field">
                            <label className="radius-title">Radius (meters): {formData.radius}</label>
                            <Slider
                                color="secondary"
                                name="radius"
                                min="0"
                                max="10000"
                                value={formData.radius}
                                onChange={handleRadiusChange}
                                />
                        </div>
                        <div className="gender-field">
                            <FormControl>
                                <InputLabel className="gender-title">Gender:</InputLabel>
                                <Select name="gender" value={formData.gender} onChange={handleChange}>
                                    {genderList.map((gender) => (
                                        <div className="gender-option-{gender}">
                                            <MenuItem value={gender}>{gender}</MenuItem>
                                        </div>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                        <div className="attraction-field">
                            <FormControl>
                                <InputLabel className="attraction-title">Attraction:</InputLabel>
                                <Select name="attraction" value={formData.attraction} onChange={handleChange}>
                                    {attractionList.map((attraction) => (
                                        <div className="attraction-option-{gender}">
                                            <MenuItem value={attraction}>{attraction}</MenuItem>
                                        </div>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                        <div className="marital-status-field">
                            <FormControl>
                                <InputLabel className="marital-status-title">Attraction:</InputLabel>
                                <Select name="marital_status" value={formData.marital_status} onChange={handleChange}>
                                    {maritalStatusList.map((marital_status) => (
                                        <div className="attraction-option-{gender}">
                                            <MenuItem value={marital_status}>{marital_status}</MenuItem>
                                        </div>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>

                        <div className="birthday-field">
                            <InputLabel className="birthday-title">Date of Birth:</InputLabel>
                            <TextField
                                type="date"
                                name="dateOfBirth"
                                value={formData.dateOfBirth}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="hobbies-field">
                            <InputLabel className="hobbies-title">Hobbies:</InputLabel>
                            <FormGroup>
                            {hobbiesList.map((hobby) => (
                                <FormControlLabel key={hobby} label={hobby} control={
                                    <Checkbox
                                        name="hobby"
                                        value={hobby}
                                        checked={formData.hobbies.includes(hobby)}
                                        onChange={handleHobbiesChange}
                                    />
                                }/>
                            ))}
                            </FormGroup>
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
