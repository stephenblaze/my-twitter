import React from 'react';
import './App.css';
import './Sidebar.css';
import Sidebar from "./Sidebar.js";
import Feed from './Feed';
import './SidebarOption.css';
import Widgets from "./Widgets.js";
import './Widgets.css';
import './Tweetbox.css';
import './Post.css';



function App() {
  return (
    //BEM
    <div className="app">
      <Sidebar />

      {/* Feed */}
      <Feed />

      {/* Widgets */}
      <Widgets />

      
    </div>
  );
}

export default App;
