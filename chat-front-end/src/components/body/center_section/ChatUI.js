import React from "react";

import MainChatBody from "./MainChatBody"
import Avatar from "../../images/adilgood.png";

function ChatUI() {
  return (
    <>
      <div
        style={{ backgroundColor: "#FFF" }}
        className="shadow-sm d-flex justify-content-between rounded p-3 align-items-center"
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
              style={{ fontSize: "15px", color: "#8895A7", fontWeight: "bold" }}
            >
              Adil Rao
            </span>
            <p
              style={{
                fontSize: "13px",
                letterSpacing: ".3px",
                color: "#8895A7",
              }}
            >
              Online
            </p>
          </div>
        </div>
        <div
          style={{ width: "90px" }}
          className=" d-flex flex-row justify-content-around"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            color="#8895A7"
            fill="currentColor"
            class="bi bi-camera"
            viewBox="0 0 16 16"
          >
            <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
            <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            color="#8895A7"
            fill="currentColor"
            class="bi bi-mic"
            viewBox="0 0 16 16"
          >
            <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
            <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z" />
          </svg>
        </div>
          </div>
          <div>
              <MainChatBody/>
          </div>
    </>
  );
}

export default ChatUI;
