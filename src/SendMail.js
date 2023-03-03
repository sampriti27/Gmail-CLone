import React, { useState } from "react";
import "./sendMail.css";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import OpenInFullOutlinedIcon from "@mui/icons-material/OpenInFullOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { db } from "./firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import { useForm } from "react-hook-form";

function SendMail() {
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm();

  const [recipient, setRecipient] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  const handleSubmit = () => {
    if (!recipient || !subject || !message) {
      alert("Please fill");
    }

    const data = { to: recipient, subject: subject, msg: message };
    console.log(data);
    db.collection("emails").add({
      to: data.to,
      subject: data.subject,
      message: data.msg,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    dispatch(closeSendMessage());
  };
  const dispatch = useDispatch();
  return (
    <div className="sendMail">
      <div className="sendMail_header">
        <h4> New Message</h4>
        <div className="sendMail_headerTools">
          <RemoveOutlinedIcon fontSize="small" />
          <OpenInFullOutlinedIcon fontSize="small" />
          <CloseOutlinedIcon
            fontSize="small"
            className="sendMail_close"
            onClick={() => dispatch(closeSendMessage())}
          />
        </div>
      </div>
      <form>
        <input
          name="to"
          type="email"
          placeholder="Recipients"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}

          // {...register({ required: "Required" })}
        />
        <input
          name="subject"
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          // {...register({ required: "Required" })}
        />
        <input
          name="message"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="sendMail_msg"
          // {...register({ required: "Required" })}
        />

        <div className="sendMail_option">
          <Button onClick={handleSubmit} className="sendMail_send">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
