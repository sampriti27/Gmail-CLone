import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AppsIcon from "@mui/icons-material/Apps";
import TuneIcon from "@mui/icons-material/Tune";
import { Avatar, IconButton } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };
  return (
    <div className="header">
      <div className="header_left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg"
          alt=""
        />
      </div>
      <div className="header_middle">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input placeholder="Search mail" type="Text" />
        {/* <ArrowDropDownIcon className="header_inputCaret" /> */}
        <IconButton>
          <TuneIcon />
        </IconButton>
      </div>
      <div className="header_right">
        <IconButton>
          <HelpOutlineOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <Avatar
          style={{ marginLeft: "10px", cursor: "pointer" }}
          src={user?.photoUrl}
          onClick={signOut}
        />
      </div>
    </div>
  );
}

export default Header;
