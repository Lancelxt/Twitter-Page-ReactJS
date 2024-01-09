import React, { useState } from "react";
import PostForm from "./Components/Home/post/post";
import "./App.css";
// Import your image assets here
import bluetick from "./Components/Home/thread/bluetick.svg";
import replies from "./Components/Home/thread/replies.svg";
import retweet from "./Components/Home/thread/Retweet.svg";
import likes from "./Components/Home/thread/like.svg";
import share from "./Components/Home/thread/Share.svg";

const App = () => {
  const [tweets, setTweets] = useState([]);

  const handlePostTweet = (newTweet) => {
    setTweets((prevTweets) => [...prevTweets, newTweet]);
  };

  const handleLike = (index) => {
    setTweets((prevTweets) => {
      const updatedTweets = [...prevTweets];
      updatedTweets[index].likes = (updatedTweets[index].likes || 0) + 1;
      return updatedTweets;
    });
  };

  return (
    <>
      <PostForm onPostTweet={handlePostTweet} />
      <div className="new-tweet-container">
        {tweets
          .slice(0)
          .reverse()
          .map((tweet, index) => (
            <div key={index} className="tweets">
              <div className="pfp-container">
                <img src={tweet.user.imageData.url} alt="" />
              </div>
              <div className="tweet">
                <div className="intro-container">
                  <p className="name">{tweet.user.userName}</p>
                  <img src={bluetick} alt="" />
                  <p className="user-id">@{tweet.user.userId}</p>
                  <p className="dot">.</p>
                  <p className="date">
                    {new Date(tweet.tweetTime).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <div className="tweet-content">
                  <p>{tweet.text}</p>
                </div>
                <div className="action-button-container">
                  <div className="replies-button">
                    <img src={replies} alt="replies" />
                    <p>0</p>
                  </div>
                  <div className="retweet-button">
                    <img src={retweet} alt="retweet" />
                    <p>0</p>
                  </div>
                  <div
                    className="like-button"
                    onClick={() => handleLike(index)}
                  >
                    <img src={likes} alt="like" />
                    <p>{isNaN(tweet.likes) ? 0 : tweet.likes}</p>
                  </div>

                  <div className="share-button">
                    <img src={share} alt="views" />
                    <p>0</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default App;
