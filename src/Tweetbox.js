import React from 'react';
import './Tweetbox.css';
import { Avatar, Button, Input } from "@mui/material";



function Tweetbox() {
  return ( <div className='tweetBox'>
      <form>
          <div className="tweetBox_input">
            <Avatar src="https://twitter.com/Ade_tigerEkun/photo"/>
            <input placeholder="What's happening?" type="text" />
          </div>
    
        
          
          <Button className="tweetBox_tweetButton">Tweet</Button>
      </form>
  </div>
  );
}

export default Tweetbox;