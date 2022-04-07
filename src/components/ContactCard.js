import React from "react";
import a from "../image/goku.jpg";

const ContactCard = (props) => {
  // destructuring
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={a}></img>
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "9px" }}
      ></i>
    </div>
  );
};

export default ContactCard;
