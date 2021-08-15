import React from 'react'

import Avatar from "../../../components/images/avatar.svg";

function Contact({ contact}) {
    return (
        <div
          style={{ backgroundColor: contact.bgColor, boxShadow: "0 1px 11px 0 rgb(0 0 0 / 10%)" }}
          className="mb-3 singleList d-flex justify-content-between rounded p-3 align-items-center"
        >
          <div className="d-flex align-items-center">
            <img
              src={Avatar}
              alt="status"
              class="rounded-circle img-fluid img-thumbnail"
              style={{ objectFit: "cover", height: "60px", width: "60px" }}
            />
            <div style={{ marginLeft: "1rem" }}>
              <span
                style={{
                  fontSize: "15px",
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                {contact.name}
              </span>
              <p
                style={{
                  fontSize: "13px",
                  letterSpacing: ".3px",
                  color: "#000",
                }}
              >
                {contact.status}{" "}
              </p>
            </div>
          </div>
          <div>
            <p style={{ color: "#000" }}>{contact.time}</p>
          </div>
        </div>
    )
}

export default Contact
