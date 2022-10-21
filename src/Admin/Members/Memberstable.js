import React from "react";
import "./Members.css";

const Memberstable = (props) => {
  return (
    <>
      {props.details.map((value, index) => (
        <div className={`member${value.id}`} key={index}>
          <div className="members-count">{value.sno}</div>
          <div className="members-date">{value.date}</div>
          <div className="members-funnel">{value.funnel}</div>
          <div className="members-tag">{value.tag}</div>
          <div className="members-name">{value.name}</div>
          <div className="members-email">{value.email}</div>
          <div className="members-phone">{value.phone}</div>
          <div className="members-training">{value.training}</div>
        </div>
      ))}
      ;
    </>
  );
};
export default Memberstable;
