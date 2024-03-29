import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TwitterTopBar from './Components/Home/Top bar/top-bar';
import Threads from './Components/Home/thread/thread';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import SideBar from './Components/SideBar/SideBar';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>

  <NavigationBar/>
  <div className='feed-wrapper'>  
  
    <TwitterTopBar/>
    <App />


    <Threads/>
    </div>
    <div className='sidebar'>
    <SideBar/>
    </div>
    
    
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
