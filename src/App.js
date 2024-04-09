import "./App.css"
import React, { useState } from 'react';
import "./App.css"
function App() {
  const [tweetContent, setTweetContent] = useState("");

  return (
    <div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Contact Me</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
      </nav>

      <main className="twitter-body">
        <div className="twitter-feed">
          {/* Twitter feed content goes here */}
          <div className="tweet">
            <div className="tweet-header">
              <img src="profile-picture.jpg" alt="Profile Picture" className="profile-picture" />
              <div className="tweet-info">
                <h3 className="tweet-author">John Doe</h3>
                <p className="tweet-username">@johndoe</p>
              </div>
            </div>
            <p className="tweet-content">{tweetContent}</p>
            <div className="tweet-actions">
              <button className="like-button">Like</button>
              <button className="retweet-button">Retweet</button>
              <button className="reply-button">Reply</button>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <p>Website created with love by GitHub Copilot</p>
        <p>Harvard Tutorial Tags: React, JavaScript, HTML, CSS</p>
      </footer>
    </div>
  );
}



export default App;
