import React, { useEffect, useState } from 'react';
import './Trending.css';

const Trending = () => {
  const [trending, setTrending] = useState([]);

  // Function to format numbers
  const formatNumber = (number) => {
    if (number >= 1000) {
      return (number / 1000).toFixed(1) + "K";
    } else {
      return number.toString();
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://sandbox.nextleap.app/page/fetch");
        const data = await response.json();
        setTrending(data.trendingData.trends);
      } catch (error) {
        console.error("Error fetching trends:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='trends-container'>
        <div className='wrapper'>
      <div className='heading'>What's happening</div>
      <div className='trends'>
        {/* Trend-1 */}
        <div className='trend'>
            <div className='content'>
          {trending.length > 0 && (
            <>
              <p className='country'>Trending in {trending[0].country}</p>
              <p className='trend-text'>{trending[0].text}</p>
              <p className='trend-sub-text'>{formatNumber(trending[0].tweets)} Tweets</p>
            </>
          )}
          </div>
        </div>

        {/* Trend-2 */}
        <div className='trend'>
        <div className='content'>
          {trending.length > 1 && (
            <>
              <p className='category'>{trending[1].category}<span>.</span>Trending</p>
              <p className='trend-text'>{trending[1].text}</p>
              <p className='trend-sub-text'>Trending with <span className='hashtags'>{trending[1].hashTags[0]} {trending[3].hashTags[1]}</span></p> 

            </>
          )}
          </div>
        </div>

        {/* Trend-3 */}
        <div className='trend'>
        <div className='content'>
            
          {trending.length > 2 && (
            <>
              <p className='category'>{trending[2].category}<span>.</span>Trending</p>
              <p className='trend-text'>{trending[2].text}</p>
              <p className='trend-sub-text'>{formatNumber(trending[2].tweets)} Tweets</p>
            </>
          )}
        </div>
            </div>
        {/* Trend-4 */}
        <div className='trend'>
        <div className='content'>

          {trending.length > 3 && (
            <>
              <p className='country'>{trending[3].category}<span>.</span>Trending</p>
              <p className='trend-text'>{trending[3].text}</p>
              <p className='trend-sub-text'>Trending with <span className='hashtags'>{trending[3].hashTags[0]} {trending[3].hashTags[1]}</span></p> 
            </>
          )}
        </div>
      </div>
      </div>
      <div className='show-more-button'>Show More</div>
      </div>
    </div>
  );
};

export default Trending;
