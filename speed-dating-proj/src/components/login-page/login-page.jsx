import React, { useState, useEffect } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

function LoginPage() {
    const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);
    // profile has {picture, name, email}

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(
        () => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setProfile(res.data);
                    })
                    .catch((err) => console.log(err));
            }
        },
        [ user ]
    );


    const logoUrl = 'https://example.com/logo.png'; // Replace with your actual logo URL

    return (
        <div>
            <div className={"logo"}>
                <img alt="" src={logoUrl}/>
            </div>
            <div>
            {profile ? (
                <div>
                    hi {profile.name}
                </div>
            ) : (
                <button onClick={() => login()}>Sign in with Google</button>
            )}
            </div>
        </div>
    );
}
export default LoginPage;
