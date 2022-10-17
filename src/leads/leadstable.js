import React from "react";
import  "./leads.css";

const Leadstable = (props) => {
    return(
        <>
            {props.details.map((value,index) => (
                <div className={`lead${value.id}`} key={index}>
                   <div className="leads-count">{value.sno}</div>
                   <div className="leads-date-time">
                   <p className="leads-date">{value.date}</p>
                   <p className="leads-time">{value.time}</p>
                   </div>
                   <div className="leads-tag">{value.tag}</div>
                   <div className="leads-name">{value.name}</div>
                   <div className="leads-email">{value.email}</div>
                   <div className="leads-phone">{value.phone}</div>
           
                </div>
            ))};
        </>
    );
};
export default  Leadstable;
