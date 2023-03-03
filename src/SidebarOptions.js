import React from "react";
import "./SidebarOptions.css";

function SidebarOptions({ Icon, title, number, selected }) {
  return (
    // if the sidebar option is selected,if selected prop is true then the classname sidebar--active will get activated.
    <div className={`SidebarOptions ${selected && "sidebarOption--active"}`}>
      <Icon />
      <h3>{title}</h3>
      <p> {number}</p>
    </div>
  );
}

export default SidebarOptions;
