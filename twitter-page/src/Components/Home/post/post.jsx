import React, { useState, useEffect } from 'react';
import './post.css';

const PostForm = ({ onPostTweet }) => {
  const [twitterData, setTwitterData] = useState(null);
  const [tweetText, setTweetText] = useState('');

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
    if (tweetText.trim() !== '') {
      onPostTweet({
        id: Date.now(),
        user: {
          userName: twitterData.loggedInUser.userName,
          userId: twitterData.loggedInUser.userId,
          imageData: twitterData.loggedInUser.imageData,
          blueTick: twitterData.loggedInUser.blueTick,
        },
        text: tweetText,
        tweetTime: Date.now(),
      });
      setTweetText('');
    }
  };

  if (!twitterData) {
    return <div>Loading...</div>;
  }

  return (
    <div className='post-form'>
      <div className='form-wrapper'>
      <img src={twitterData.loggedInUser.imageData.url} alt={twitterData.loggedInUser.imageData.alt} />
      <input
        type="text"
        placeholder="What's happening?"
        value={tweetText}
        onChange={handleTweetChange}
      />
      </div>
      <div className='button'>
      <div className='post-button'>
        <button onClick={handlePostTweet}>Tweet</button>
      </div>
      </div>
    </div>
  );
};

export default PostForm;
