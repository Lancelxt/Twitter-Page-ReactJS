import React from 'react';
import bluetick from './bluetick.svg';
import Thread from '../thread/thread';

const Feed = ({ tweetedData }) => {
  return (
    <div>
      {tweetedData && tweetedData.length > 0 ? (
        tweetedData.map((tweet) => (
          <div key={tweet.id} className="tweet-container">
            <div className="tweet-user-info">
              <img src={tweet.user.imageData.url} alt={tweet.user.imageData.alt} />
              <div>
                <p>
                  {tweet.user.userName} {tweet.user.blueTick && <span><img src={bluetick} alt="bluetick" /></span>}
                </p> 
                <p>@{tweet.user.userId}</p>
                <p className="tweet-date">{new Date(tweet.tweetTime).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
              </div>
            </div>
            <p className="tweet-text">{tweet.text}</p>
          </div>
        ))
      ) : (
        <Thread/>
      )}
    </div>
  );
};

export default Feed;
