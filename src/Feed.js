import React from 'react';
import TweetBox from './Tweetbox';
import "./Feed.css";
import Post from './Post';

function Feed() {
  return (
    <div className='feed'>
        {/* Header */}
        <div className="feed_header">
        <h2>Home</h2>
        </div>

        {/* TweetBox */}
        <TweetBox />

        {/* Post */}
        <Post />

        {/* Post */}
        {/* Post */}
        {/* Post */}
        {/* Post */}
        {/* Post */}
        {/* Post */}
        {/* Post */}
    </div>
  )
}

export default Feed