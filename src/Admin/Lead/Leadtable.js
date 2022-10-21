import React from "react";
import "./Lead.css";

const Leadtable = (props) => {
  return (
    <>
      {props.details.map((value, index) => (
        <div className={`Lead${value.id}`} key={index}>
          <div className="Lead-count">{value.sno}</div>
          <div className="Lead-date">{value.date}</div>
          <div className="Lead-funnel">{value.funnel}</div>
          <div className="Lead-tag">{value.tag}</div>
          <div className="Lead-name">{value.name}</div>
          <div className="Lead-email">{value.email}</div>
          <div className="Lead-phone">{value.phone}</div>
          <div className="Lead-training">{value.training}</div>
        </div>
      ))}
      ;
    </>
  );
};
export default Leadtable;
