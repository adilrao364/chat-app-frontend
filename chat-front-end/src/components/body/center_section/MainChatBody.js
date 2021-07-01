import React from "react";
import "./messages.css";

import 'react-tiny-fab/dist/styles.css';

import OtherMessage from "../center_section/OtherMessage"
import MyMessage from "../center_section/MyMessage"
import FAButton from "./FAButton";

function MainChatBody() {
  return (
    <>
      <div class="mesgs">
        <div class="msg_history">
          <OtherMessage/>
          <MyMessage/>
        </div>
        <div class="type_msg">
          <div class="input_msg_write">

            <div>
                <FAButton/>
            </div>
            
            <input type="text" class="write_msg" placeholder="Type a message" />
            <button class="msg_send_btn" style={{marginRight:"1rem"}} type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-cursor-fill"
                viewBox="0 0 16 16"
              >
                <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainChatBody;
