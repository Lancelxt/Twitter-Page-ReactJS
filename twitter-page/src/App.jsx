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

  const [likedTweets, setLikedTweets] = useState([]);

  const handleLike = (index) => {
    setTweets((prevTweets) => {
      const updatedTweets = [...prevTweets];
      updatedTweets[index].likes = updatedTweets[index].likes === 1 ? 0 : 1;
      return updatedTweets;
    });

    setLikedTweets((prevLikedTweets) => {
      const updatedLikedTweets = [...prevLikedTweets];
      updatedLikedTweets[index] = !updatedLikedTweets[index];
      return updatedLikedTweets;
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
                    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="Comment Stroke Icon" fill-rule="evenodd" clip-rule="evenodd" d="M7 10.25C7.27614 10.25 7.5 10.4739 7.5 10.75V12.7079C10.2487 11.1024 11.9025 9.96659 12.8999 8.97494C13.4787 8.39946 13.7971 7.9087 13.982 7.44074C14.1679 6.97021 14.25 6.44448 14.25 5.75C14.25 3.26472 12.2353 1.25 9.75 1.25H6.25C3.76472 1.25 1.75 3.26472 1.75 5.75C1.75 8.23528 3.76472 10.25 6.25 10.25H7ZM7.5 14.1529C14.1641 10.3177 15.5 8.74691 15.5 5.75C15.5 2.57436 12.9256 0 9.75 0H6.25C3.07436 0 0.5 2.57436 0.5 5.75C0.5 8.92564 3.07436 11.5 6.25 11.5V14.0086C6.25 14.3911 6.66196 14.6318 6.9943 14.4424C7.16618 14.3445 7.33473 14.248 7.5 14.1529Z" fill="#72767A"/>
</svg>

                    <p>0</p>
                  </div>
                  <div className="retweet-button">
                  <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Retweet Stroke Icon">
<path d="M4.35355 0.969689C4.15829 0.774427 3.84171 0.774427 3.64645 0.969689L1.05806 3.55808C0.813981 3.80216 0.813981 4.19788 1.05806 4.44196C1.30214 4.68604 1.69786 4.68604 1.94194 4.44196L3.375 3.0089V10.5C3.375 12.2259 4.77411 13.625 6.5 13.625H10.5C10.8452 13.625 11.125 13.3452 11.125 13C11.125 12.6548 10.8452 12.375 10.5 12.375H6.5C5.46447 12.375 4.625 11.5356 4.625 10.5V3.0089L6.05806 4.44196C6.30214 4.68604 6.69786 4.68604 6.94194 4.44196C7.18602 4.19788 7.18602 3.80216 6.94194 3.55808L4.35355 0.969689Z" fill="#72767A"/>
<path d="M15.2714 13.6553C15.4667 13.8506 15.7833 13.8506 15.9786 13.6553L18.5669 11.0669C18.811 10.8228 18.811 10.4271 18.5669 10.183C18.3229 9.93896 17.9271 9.93896 17.6831 10.183L16.25 11.6161V4.12498C16.25 2.39909 14.8509 0.999981 13.125 0.999981H9.125C8.77982 0.999981 8.5 1.2798 8.5 1.62498C8.5 1.97016 8.77982 2.24998 9.125 2.24998H13.125C14.1605 2.24998 15 3.08945 15 4.12498V11.6161L13.5669 10.183C13.3229 9.93896 12.9271 9.93896 12.6831 10.183C12.439 10.4271 12.439 10.8228 12.6831 11.0669L15.2714 13.6553Z" fill="#72767A"/>
</g>
</svg>

                    <p>0</p>
                  </div>
                  <div
                    className={`like-button ${likedTweets[index] ? "liked" : ""}`}
                    onClick={() => handleLike(index)}
                  >
                    
                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="Heart Stroke Icon" fill-rule="evenodd" clip-rule="evenodd" d="M3.301 0.116975C4.20936 -0.110107 5.16825 -0.00392529 6.00114 0.412501L6.34439 0.584118C6.75885 0.791337 7.12315 1.07457 7.42092 1.41413C7.46262 1.46168 7.53738 1.46168 7.57908 1.41413C7.87685 1.07457 8.24115 0.791337 8.65561 0.584118L8.99886 0.412501C9.83175 -0.00392529 10.7906 -0.110107 11.699 0.116975C12.572 0.335201 13.3339 0.844888 13.8627 1.54996L14.0553 1.80682C14.6706 2.62707 15 3.61989 15 4.6363V4.92317C15 5.37799 14.9442 5.83129 14.8338 6.27303L14.7666 6.54171C14.5139 7.55255 14.0612 8.50474 13.4332 9.34191L13.0419 9.86374C12.7272 10.2833 12.3829 10.6803 12.0115 11.0517L11.6146 11.4486C10.6621 12.401 9.56086 13.1951 8.35236 13.7993C7.81719 14.0669 7.18281 14.0669 6.64764 13.7993C5.43914 13.1951 4.33786 12.401 3.38544 11.4486L2.98849 11.0517C2.61709 10.6803 2.27281 10.2833 1.95814 9.86374L1.56675 9.34191C0.938842 8.50474 0.486109 7.55255 0.233388 6.54171L0.166213 6.27303C0.0557751 5.83129 0 5.37799 0 4.92317V4.6363C0 3.61989 0.329438 2.62707 0.944651 1.80682L1.1373 1.54996C1.66613 0.844888 2.42805 0.335201 3.301 0.116975ZM5.42056 1.42404C4.85999 1.14377 4.22215 1.07469 3.6191 1.22544C3.03787 1.37074 2.51507 1.71404 2.14454 2.20805L1.95189 2.46491C1.48501 3.08738 1.22951 3.84931 1.22951 4.6363V4.92317C1.22951 5.29055 1.27457 5.65634 1.36356 6.01226L1.43073 6.28095C1.64855 7.15217 2.03785 7.96901 2.57399 8.68382L2.96537 9.20565C3.24739 9.58165 3.55551 9.93686 3.88731 10.2686L4.28426 10.6656C5.14673 11.528 6.14105 12.2442 7.22822 12.7878C7.40072 12.874 7.59928 12.874 7.77178 12.7878C8.85895 12.2442 9.85327 11.528 10.7157 10.6656L11.1127 10.2686C11.4445 9.93686 11.7526 9.58165 12.0346 9.20565L12.426 8.68382C12.9621 7.96901 13.3515 7.15217 13.5693 6.28095L13.6364 6.01226C13.7254 5.65634 13.7705 5.29055 13.7705 4.92317V4.6363C13.7705 3.84931 13.515 3.08738 13.0481 2.46491L12.8555 2.20805C12.4849 1.71404 11.9621 1.37074 11.3809 1.22544C10.7779 1.07469 10.14 1.14377 9.57944 1.42404L9.23619 1.59566C8.7923 1.8176 8.42422 2.18181 8.19478 2.64068C7.78499 3.46022 7.21238 3.45495 6.80522 2.64068C6.57578 2.18181 6.2077 1.8176 5.76381 1.59566L5.42056 1.42404Z" fill="#72767A"/>
</svg>

                    <p>{isNaN(tweet.likes) ? 0 : tweet.likes}</p>
                  </div>

                  <div className="share-button">
                    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="Share Stroke icon" fill-rule="evenodd" clip-rule="evenodd" d="M7.27145 0.146447C7.46671 -0.0488154 7.78329 -0.0488157 7.97855 0.146446L11.5669 3.73484C11.811 3.97891 11.811 4.37464 11.5669 4.61872C11.3229 4.8628 10.9271 4.8628 10.6831 4.61872L8.25 2.18566V9.67678C8.25 10.022 7.97018 10.3018 7.625 10.3018C7.27982 10.3018 7 10.022 7 9.67678V2.18566L4.56694 4.61872C4.32286 4.8628 3.92714 4.8628 3.68306 4.61872C3.43898 4.37464 3.43898 3.97891 3.68306 3.73484L7.27145 0.146447ZM0.625 8.05178C0.970178 8.05178 1.25 8.3316 1.25 8.67678V12.6768C1.25 13.16 1.64175 13.5518 2.125 13.5518H13.125C13.6082 13.5518 14 13.16 14 12.6768V8.67678C14 8.3316 14.2798 8.05178 14.625 8.05178C14.9702 8.05178 15.25 8.3316 15.25 8.67678V12.6768C15.25 13.8504 14.2986 14.8018 13.125 14.8018H2.125C0.951395 14.8018 0 13.8504 0 12.6768V8.67678C0 8.3316 0.279822 8.05178 0.625 8.05178Z" fill="#72767A"/>
</svg>

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
