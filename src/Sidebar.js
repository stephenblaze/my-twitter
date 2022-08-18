import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailIcon from '@mui/icons-material/Mail';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonIcon from '@mui/icons-material/Person';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';     
import { Button } from 'react-bootstrap';
function Sidebar() {
    return (
        <div className="sidebar">
            {/* Twitter icon */}
            <TwitterIcon />
            


            <SidebarOption Icon={HomeIcon} text="Home" />
            <SidebarOption Icon={SearchIcon} text="Explore" />
            <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
            <SidebarOption Icon={MailIcon} text="Messages"/>
            <SidebarOption Icon={BookmarkIcon} text="Bookmarks"/>
            <SidebarOption Icon={ListAltIcon} text="Lists" />
            <SidebarOption Icon={PersonIcon} text="Profile" />
            <SidebarOption Icon={MoreHorizIcon} text="More" />
            

            {/* Button -> Tweet */}
            <Button
             variant="outlined"
             
             className="sidebar_tweet"> Tweet
             
             
                  
                  </Button>
        </div>
    );
}

export default Sidebar;