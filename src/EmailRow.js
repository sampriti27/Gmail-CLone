import React from "react";
import "./EmailRow.css";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { Checkbox, IconButton } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "./features/mailSlice";
function EmailRow({ id, title, subject, description, time }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
      })
    );
    navigate("/mail");
  };
  return (
    <div className="emailRow" onClick={openMail}>
      <div className="emailRow_options">
        <Checkbox size="small" color="default" />

        <IconButton>
          <StarBorderOutlinedIcon fontSize="small" />
        </IconButton>
      </div>
      <p className="emailRow_title"> {title}</p>
      <div className="emailRow_subject">
        <p>
          {subject}
          <span className="emailRow_desc"> - {description}</span>
        </p>
      </div>
      <p className="emailRow_time">{time}</p>
    </div>
  );
}

export default EmailRow;
