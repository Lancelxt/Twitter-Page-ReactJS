import React, { useState, useEffect } from 'react';
import './NavigationBar.css'
const NavigationBar = () => {
    const [sideNavigationButtons, setSideNavigationButtons] = useState([]);

    useEffect(() => {
        fetch('https://sandbox.nextleap.app/page/fetch')
            .then(response => response.json())
            .then(data => setSideNavigationButtons(data.sideNavigationButtons))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="navigation-bar">

            <ul className='side-list'>
                {sideNavigationButtons.map((button, index) => (
                    <li key={index} className='links'>
                        <a href={button.actionUrl}>
                            <img src={button.icon.url} alt={button.icon.alt} width="24.5" height="24.5" />
                            {button.buttonText}
                        </a>
                    </li>
                ))}
            </ul>
            <div className='post-button'>
        <button>Tweet</button>
      </div>
    </div>
      
    );
};

export default NavigationBar;
