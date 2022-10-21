import React from "react";
import "./Registeredusers.css";

const Registereduserstable = (props) => {
   
  
  return (
    <>
      {props.details.map((value, index) => (
        <div className={`registeredusers${value.id}`} key={index}>
          <div className="registeredusers-count">{value.sno}</div>
          <div className="registeredusers-name">{value.name}</div>
          <div className="registeredusers-email">{value.email}</div>
          <div className="registeredusers-mobile">{value.mobile}</div>
          <div className="registeredusers-address">{value.address}</div>
          <div className="registeredusers-city">{value.city}</div>
          <div className="registeredusers-state">{value.state}</div>
          <div className="registeredusers-country">{value.country}</div>
          <div className="registeredusers-pincode">{value.pincode}</div>
          <div className="registeredusers-joining">{value.joining}</div>
          <div className="registeredusers-aid">{value.aid}</div>
          <div className="registeredusers-aidname">{value.aidname}</div>
          <div className="registeredusers-paidstatus">{value.paidstatus}</div>
          <div className="registeredusers-token">{value.token}</div>
          <div className="registeredusers-login">{value.login}</div>
          <div className="registeredusers-blocked">
          <button className="block"  >BLOCK</button>
          <button className="unblock" >UNBLOCK</button>
          </div>
        </div>
      ))}
      ;
    </>
  );
};
export default Registereduserstable;
