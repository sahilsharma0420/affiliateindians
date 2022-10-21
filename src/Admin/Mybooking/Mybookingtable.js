import React from "react";
import "./Mybooking.css";

const Mybookingtable = (props) => {
  return (
    <>
      {props.details.map((value, index) => (
        <div className={`mybooking${value.id}`} key={index}>
          <div className="mybooking-count">{value.sno}</div>
          <div className="mybooking-name">{value.name}</div>
          <div className="mybooking-date">{value.date}</div>

          <div className="mybooking-timing">{value.timing}</div>
          <div className="mybooking-advisorname">{value.advisorname}</div>
      
        </div>
      ))}
      ;
    </>
  );
};
export default Mybookingtable;
