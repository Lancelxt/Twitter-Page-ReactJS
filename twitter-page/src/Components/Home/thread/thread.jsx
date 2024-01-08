import React, { useState, useEffect } from 'react';
import bluetick from './bluetick.svg'
import replies from './replies.svg'
import likes from './like.svg'
import retweet from './Retweet.svg'
import share from './Share.svg'
import './thread.css'


const Threads = () => {
  const [tweetThreads, setTweetThreads] = useState([]);


   // Function to format numbers
   const formatNumber = (number) => {
    if (number >= 1000) {
      return (number / 1000).toFixed(1) + 'K';
    } else {
      return number.toString();
    }
  };



  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from your API link
        const response = await fetch('https://sandbox.nextleap.app/page/fetch');
        const data = await response.json();
        setTweetThreads(data.tweetThreads);
      } catch (error) {
        console.error('Error fetching tweet threads:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='tweet-container'>
      {tweetThreads.map((thread, index) => (
        <div key={index} className="tweets">
          <div className='pfp-container'>
            <img src={thread[0].user.imageData.url} alt="" />
          </div>
          <div className='tweet'>
            <div className='intro-container'>
            <p className='name'> {thread[0].user.userName}</p>
          <img src={bluetick} alt="" />
          <p className='user-id'>@{thread[0].user.userId}</p>
          <p className='dot'>.</p>
          <p className="date">{new Date(thread[0].tweetTime).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
          </div>
          <div className='tweet-content'>
          <p>{thread[0].textArea}</p>
          </div>
          <div className='action-button-container'>
            <div className='replies-button'>
              <img src={replies} alt="replies" />
              <p>{formatNumber(thread[0].replies)}</p>
            </div>
            <div className='retweet-button'>
              <img src={retweet} alt="retweet" />
              <p>{formatNumber(thread[0].reTweets)}</p>
            </div>
            <div className='like-button'>
              <img src={likes} alt="like" />
              <p>{formatNumber(thread[0].likes)}</p>
            </div>
            <div className='share-button'>
              <img src={share} alt="views" />
              <p>{formatNumber(thread[0].views)}</p>
            </div>
          </div>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default Threads;
