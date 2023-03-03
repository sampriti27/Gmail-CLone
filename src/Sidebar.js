import React from "react";
import "./Sidebar.css";
import { Button } from "@material-ui/core";
import EditIcon from "@mui/icons-material/Edit";
import SidebarOptions from "./SidebarOptions";
import InboxIcon from "@mui/icons-material/Inbox";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";
function Sidebar() {
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <Button
        startIcon={<EditIcon />}
        className="sidebar_compose"
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>
      <SidebarOptions
        Icon={InboxIcon}
        title="Inbox"
        number={54}
        selected={true}
      />
      <SidebarOptions
        Icon={StarBorderOutlinedIcon}
        title="Starred"
        number={5}
      />
      <SidebarOptions
        Icon={AccessTimeOutlinedIcon}
        title="Snoozed"
        number={2}
      />
      <SidebarOptions Icon={SendOutlinedIcon} title="Sent" number={10} />
      <SidebarOptions
        Icon={InsertDriveFileOutlinedIcon}
        title="Drafts"
        number={1}
      />
      <SidebarOptions Icon={ExpandMoreOutlinedIcon} title="More" number={1} />
    </div>
  );
}

export default Sidebar;
