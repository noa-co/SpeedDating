import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserForm from "./components/user-form/user-form";
import LoginPage from "./components/login-page/login-page";
import HomePage from "./components/homepage/homepage";
import VideoChatPage from "./components/video-chat/video-chat-page/video-chat-page";
import React from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import LoadingVideoChat from "./components/video-chat/loading-video-chat/loading-video-chat";
import FinishedVideoChat from "./components/video-chat/finished-video-chat/finished-video-chat";
import SharedDetailsPage from "./components/shared-details-page/shared-details-page";

const theme = createTheme({
    palette: {
        primary: {
            main: '#ffecdf'
        },
        secondary: {
            main: '#90243a'
        }
    }
});

const App = () => {
  return (
      <ThemeProvider theme={theme}>
          <Router>
            <div style={{height:'100%'}}>
              <Routes>
                  <Route path="/" element={<HomePage/>}/>
                  <Route path="/login" element={<LoginPage/>}/>
                  <Route path="/user-form" element={<UserForm/>}/>
                  <Route path="/homepage" element={<HomePage/>}/>
                  <Route path="/loading-chat" element={<LoadingVideoChat/>}/>
                  <Route path="/finished-chat" element={<FinishedVideoChat/>}/>
                  <Route path="/video-chat" element={<VideoChatPage/>}/>
                  <Route path="/shared-details" element={<SharedDetailsPage/>} />
              </Routes>
            </div>
          </Router>
      </ThemeProvider>
  );
};

export default App;
