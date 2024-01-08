import React, { useState, useEffect } from 'react';
import './top-bar.css'
const TwitterTopBar = () => {
  const [twitterData, setTwitterData] = useState(null);
  const [activeTab, setActiveTab] = useState('For You');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from your API link
        const response = await fetch('https://sandbox.nextleap.app/page/fetch');
        const data = await response.json();
        setTwitterData(data);
      } 
      catch (error) {
        console.error('Error fetching Twitter data:', error);
      }
    };

    fetchData();
  }, []);

  if (!twitterData) {
    return <div>Loading...</div>;
  }

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // You can add additional logic here based on the clicked tab if needed
  };

  return (
    <div className='top-bar'>
      <h1 className='home-text'>{twitterData.headerData.title.text}</h1>
      <div className='top-tabs'>
        <div className='top-tabs-text'>
        <span
          onClick={() => handleTabClick('For You')}
          className={activeTab === 'For You' ? 'active' : ''}
        >
          For You
        </span>
        <span className="tab-space"></span>
        <span
          onClick={() => handleTabClick('Following')}
          className={activeTab === 'Following' ? 'active' : ''}
        >
          Following
        </span>
        </div>
      </div>
    </div>
  );
};

export default TwitterTopBar;
