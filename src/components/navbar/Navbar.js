import React, { useContext } from "react";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ListIcon from "@mui/icons-material/List";
import { DarkModeContext } from "../../context/darkModeContext";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon className="icon" />
        </div>

        <div className="items">
          <div className="item">
            <LanguageIcon className="item-icon" />
            <p> English</p>
          </div>
          <div className="item">
            <DarkModeIcon
              className="item-icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <FullscreenExitIcon className="item-icon" />
          </div>
          <div className="item">
            <NotificationsIcon className="item-icon" />
            <div className="counter">5</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineIcon className="item-icon" />
            <div className="counter">3</div>
          </div>
          <div className="item">
            <ListIcon className="item-icon" />
          </div>
          <div className="item">
            <img
              src="data:image/png;base64,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"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
