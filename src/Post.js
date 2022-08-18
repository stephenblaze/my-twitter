import { Avatar } from '@mui/material';
import React from 'react';
import './Post.css'; 
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) {
  return (
    <div className='Post'>
    <div className='post_avatar'>
    <Avatar src="https://twitter.com/Ade_tigerEkun/photo" /> 
     </div>
        <div className='post_body'>
            <div className='post_header'>
                <div className='post_headerText'>
                    <h3>
                        Tope Adeyemi{''}
                        <span>
                            <VerifiedUserIcon className="post_badge" />
                        </span>
                    </h3>
                </div>
                <div className='post_headerDescription'>
                    <p>Ready for the new Premier League season???</p>
                </div>
            </div>
            <img src="https://media3.giphy.com/media/65ATdpi3clADjomz39/giphy.gif"
             alt=""/>
             
             <div className="post_footer">
                 <ChatBubbleOutlineIcon fontsize="small" />
                 <RepeatIcon fontsize="small" />
                 <FavoriteBorderIcon fontsize="small" />
                 <PublishIcon fontsize="small" />
                 
             </div>
        </div>
</div>
  )
}

export default Post