import React from "react";
import "./Schedulebooking.css";

const Schedulebookingtable = (props) => {
  return (
    <>
      {props.details.map((value, index) => (
        <div className={`booking${value.id}`} key={index}>
          <div className="booking-count">{value.sno}</div>
          <div className="booking-name">{value.name}</div>
          <div className="booking-date">{value.date}</div>

          <div className="booking-timing">{value.timing}</div>
          <div className="booking-advisorname">{value.advisorname}</div>
      
        </div>
      ))}
      ;
    </>
  );
};
export default Schedulebookingtable;
