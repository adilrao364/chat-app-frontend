import React from "react";
import "../Home.css";

import Avatar from "../../images/avatar.svg";

function List({ user}) {
  return (
    <>
      <div>
        <div
          style={{ backgroundColor: user.bgColor, boxShadow: "0 1px 11px 0 rgb(0 0 0 / 10%)" }}
          className=" singleList mb-3 d-flex justify-content-between rounded p-3 align-items-center"
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
                  color: user.textColor,
                  fontWeight: "bold",
                }}
              >
               { user.name}
              </span>
              <p
                style={{
                  fontSize: "13px",
                  letterSpacing: ".3px",
                  color: user.textColor,
                }}
              >
                {user.status}{" "}
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="#FFFFFF"
              color="#8895A7"
              className="bi bi-bell"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
            </svg>
            <span
              style={{ marginTop: "1.2rem", marginLeft: "1.5rem" }}
              className="translate-middle badge rounded-pill bg-info"
            >
              9<span className="visually-hidden">unread messages</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default List;
