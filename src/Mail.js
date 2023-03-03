import React from "react";
import "./Mail.css";
import { IconButton, Button, Avatar } from "@material-ui/core";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import DriveFileMoveOutlinedIcon from "@mui/icons-material/DriveFileMoveOutlined";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import LaunchOutlinedIcon from "@mui/icons-material/LaunchOutlined";
import TurnLeftOutlinedIcon from "@mui/icons-material/TurnLeftOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectOpenMail } from "./features/mailSlice";

function Mail() {
  const navigate = useNavigate();
  const selectedMail = useSelector(selectOpenMail);
  return (
    <div className="Mail">
      <div className="mail_tools">
        <div className="mail_toolsLeft">
          <IconButton>
            <ArrowBackOutlinedIcon
              fontSize="small"
              onClick={() => navigate("/")}
            />
          </IconButton>
          <IconButton>
            <ArchiveOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <ReportGmailerrorredOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <DeleteOutlineOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <EmailOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <AccessTimeOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <AddTaskOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <DriveFileMoveOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <LabelOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <MoreVertOutlinedIcon fontSize="small" />
          </IconButton>
        </div>
        <div className="mail_toolsRight">
          <Button className="stats">1 of 167</Button>
          <IconButton>
            <KeyboardArrowLeftOutlinedIcon />
          </IconButton>
          <IconButton>
            <KeyboardArrowRightOutlinedIcon />
          </IconButton>
        </div>
      </div>
      <div className="mail_body">
        <div className="mail_bodyHeader">
          <h2>{selectedMail?.subject}</h2>
          <div className="mail_option">
            <IconButton>
              <LocalPrintshopOutlinedIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <LaunchOutlinedIcon fontSize="small" />
            </IconButton>
          </div>
        </div>
        <div className="mail_bodyHeaderDetails">
          <div className="mail_bhDetailsLeft">
            <div className="senderAvatar">
              <Avatar style={{ marginLeft: "10px" }} />
            </div>
            <div className="bhMAilIds">
              <div className="bhSender">
                <div className="bhUsername">
                  <p> UserName</p>
                </div>
                <div className="bhUseremail">
                  &lt; {selectedMail?.title} &gt;
                </div>
              </div>
              <div className="bhreciever">
                <p>to me</p>
                <ArrowDropDownOutlinedIcon fontSize="small" />
              </div>
            </div>
          </div>
          <div className="mail_bhDetailsRight">
            <div className="div_bhTime">
              <p className="bhTime"> {selectedMail?.time} </p>
            </div>
            <div className="bhTools">
              <IconButton>
                <StarBorderOutlinedIcon fontSize="small" />
              </IconButton>
              <IconButton>
                <TurnLeftOutlinedIcon fontSize="small" />
              </IconButton>
              <IconButton>
                <MoreVertOutlinedIcon fontSize="small" />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="mailBody">
          <div className="mail_msg">
            <p> {selectedMail?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mail;
