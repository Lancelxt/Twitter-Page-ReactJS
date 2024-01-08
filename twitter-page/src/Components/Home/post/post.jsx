import React, { useState, useEffect } from 'react';
import Feed from '../feed/feed';
import './post.css'

const PostForm = () => {
  const [twitterData, setTwitterData] = useState(null);
  const [tweetText, setTweetText] = useState('');
  const [tweetedData, setTweetedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://sandbox.nextleap.app/page/fetch');
        const data = await response.json();
        setTwitterData(data);
      } catch (error) {
        console.error('Error fetching Twitter data:', error);
      }
    };

    fetchData();
  }, []);

  const handleTweetChange = (event) => {
    setTweetText(event.target.value);
  };

  const handlePostTweet = () => {
    const newTweet = {
      id: Date.now(),
      user: {
        userName: twitterData.loggedInUser.userName,
        userId: twitterData.loggedInUser.userId,
        imageData: twitterData.loggedInUser.imageData,
        blueTick: twitterData.loggedInUser.blueTick,
      },
      text: tweetText,
      tweetTime: Date.now(),
    };
  
    // Update the state to include the new tweet
    setTweetedData((prevTweets) => [newTweet, ...prevTweets]);
  
    // Clear the input field after posting the tweet
    setTweetText('');
  };
  

  if (!twitterData) {
    return <div>Loading...</div>;
  }

  return (
    <div className='post-form'>
      <img src={twitterData.loggedInUser.imageData.url} alt={twitterData.loggedInUser.imageData.alt} />
      <input
        type="text"
        placeholder="What's happening?"
        value={tweetText}
        onChange={handleTweetChange}
      />
      <div className='post-button'>
      <button onClick={handlePostTweet}>Tweet</button>
      </div>
      {/* Pass the tweetedData to the Feed component */}
      <Feed tweetedData={tweetedData} />
    </div>
  );
};

export default PostForm;
