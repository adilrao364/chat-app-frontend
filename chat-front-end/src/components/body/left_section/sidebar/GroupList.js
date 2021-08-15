import React, { useState } from "react";
import "../../Home.css";

import Avatar from "../../../images/avatar.svg";

function GroupList({ user}) {

  const [toggle, setToggle] = useState(false)

  return (
    <>
      <div>
        <div
          style={{ backgroundColor: user.bgColor, cursor:"pointer", boxShadow: "0 1px 11px 0 rgb(0 0 0 / 10%)" }}
          className=" singleList mb-3 d-flex justify-content-between rounded p-3 align-items-center"
        >
          <div className="d-flex align-items-center">
            <img
              src={Avatar}
              alt="status"
              class="rounded-circle img-fluid img-thumbnail"
              style={{ objectFit: "cover", height: "60px", width: "60px" }}
            />
            <div style={{ marginLeft: "1rem"}}>
              <span
                style={{
                  fontSize: "15px",
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
               { user.name}
              </span>
              <p
                style={{
                  fontSize: "13px",
                  letterSpacing: ".3px",
                  color: "#000",
                }}
              >
                {user.status}{" "}
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div className="form-check form-switch" onClick={ ()=>setToggle(!toggle)}>
              <input className="form-check-input" style={{cursor:"pointer"}} type="checkbox" checked={ toggle}/>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GroupList
