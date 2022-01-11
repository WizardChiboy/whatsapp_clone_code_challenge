import React from "react";
import "./SideBar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge"
import MoreIcon from "@material-ui/icons/MoreVert"
import ChatIcon from "@material-ui/icons/Chat"
import {SearchOutlined} from  "@material-ui/icons"
 
import {Avatar, IconButton} from "@material-ui/core"

function SideBar() {
  
  return (
    <>
      <div className="sidebar">
        <div className="sidebar_header">
          <Avatar src=""/>
          <div className="sidebar_headerRight">

            <IconButton>
            <DonutLargeIcon/>
            </IconButton>

            <IconButton>
            <ChatIcon/>
            </IconButton>

            <IconButton>
            <MoreIcon/>
            </IconButton>
          </div>
          
        </div>

        <div className="sidebar-search"> 
        <div className="sidebar-searchContainer"> 

        <SearchOutlined/>
        <input type="text" placeholder="search or start new chat"/>
        </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
