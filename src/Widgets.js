import React from 'react';
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
  }  from "react-twitter-embed";

import SearchIcon from '@mui/icons-material/Search';

function Widgets() {
  return (
    <div className="Widgets">
    <div className='widgets_input'>
      <SearchIcon className="widgets_searchIcon" />
      <input placeholder='Search Twitter' type="text" />
    </div>

    <div className='widgets_widgetContainer'>
      <h2>What's happening</h2>

      <TwitterTweetEmbed tweetId={"858551177860055040"} />

      <TwitterTimelineEmbed
      sourceType='profile'
      screenName='stephenblaze'
      options={{ height: 400}}
      />

      <TwitterShareButton 
      url= {"https://web.facebook.com/adeyemi.stephen.779"}
      options={{ text: "#reactjs is awesome, via: Adeyemi Stephen"}}
      />
    </div>
    </div>
  );
}

export default Widgets;