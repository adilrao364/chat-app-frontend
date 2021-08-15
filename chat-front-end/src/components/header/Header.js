import React from "react";
import "./headers.css";

import Logo from "../images/logo.png";
import Profile from "../images/adilgood.png";

function Header() {
  return (
    <div className="container-fluid shadow-lg p-2">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <div className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center align-items-center mb-md-0">
          <img src={Logo} alt="mdo" width="90" height="70" />
          <h5 className="mt-3">
            super<i style={{fontWeight:"bold",color:"#05728F"}}>CHAT</i>
          </h5>
        </div>

        <div className="text-end d-flex align-items-center">
          <button
            type="button"
            className="btn btn-info btn-sm text-white"
            style={{ marginRight: "1rem" }}
          >
            Invite Friend
          </button>
          <button
            type="button"
            className="btn btn-sm position-relative"
            style={{ marginRight: "1rem", backgroundColor: "#05728F" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#FFFFFF"
              color="#FFFFFF"
              className="bi bi-bell"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
            </svg>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info">
              9<span className="visually-hidden">unread messages</span>
            </span>
          </button>
          <button
            type="button"
            className="btn btn-outline-info btn-sm"
            style={{ marginRight: "1rem" }}
          >
            Logout
          </button>

          <div>
            <div
              className="d-flex align-items-center"
              style={{ marginRight: "2rem", marginLeft: "2rem" }}
            >
              <img
                src={Profile}
                alt="status"
                className="rounded-circle img-fluid img-thumbnail"
                style={{ objectFit: "cover", height: "60px", width: "60px" }}
              />
              <div style={{ marginLeft: "1rem" }}>
                <span
                  style={{
                    fontSize: "15px",
                    color: "#8895A7",
                    fontWeight: "bold",
                  }}
                >
                  Adil Rao
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
