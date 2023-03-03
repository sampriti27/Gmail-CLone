import React, { useState, useEffect } from "react";
import "./EmailList.css";
import { Checkbox, IconButton, Button } from "@material-ui/core";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import InboxIcon from "@mui/icons-material/Inbox";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import Section from "./Section";
import EmailRow from "./EmailRow";
import { db } from "./firebase";

function EmailList() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="EmailList">
      <div className="emailList_settings">
        <div className="emailList_settingsLeft">
          <div className="selectList">
            <Checkbox size="small" color="default" />
            <IconButton>
              <ArrowDropDownOutlinedIcon fontSize={"small"} />
            </IconButton>
          </div>
          <IconButton>
            <RefreshOutlinedIcon fontSize={"small"} />
          </IconButton>
          <IconButton>
            <MoreVertOutlinedIcon fontSize={"small"} />
          </IconButton>
        </div>
        <div className="emailList_settingsRight">
          <Button className="stats">1-50 of 167</Button>
          <IconButton>
            <KeyboardArrowLeftOutlinedIcon />
          </IconButton>
          <IconButton>
            <KeyboardArrowRightOutlinedIcon />
          </IconButton>
        </div>
      </div>
      <div className="emailList_sections">
        <Section Icon={InboxIcon} title={"Primary"} selected />
        <Section Icon={LocalOfferOutlinedIcon} title={"Promotions"} />
        <Section Icon={PeopleAltOutlinedIcon} title={"Social"} />
        <Section Icon={InfoOutlinedIcon} title={"Updates"} />
        <Section Icon={QuestionAnswerOutlinedIcon} title={"Forums"} />
      </div>
      <div className="emailList_list">
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
        <EmailRow
          title="Dummy"
          subject="This is a test mail"
          description="This is a dummy email for trial."
          time="20:00"
        />
      </div>

      <EmailRow
        title="Dummy"
        subject="This is a test mail"
        description="This is a dummy email for trial."
        time="19:08"
      />
    </div>
  );
}

export default EmailList;
