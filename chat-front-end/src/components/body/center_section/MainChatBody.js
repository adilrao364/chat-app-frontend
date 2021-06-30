import React from 'react'
import "./messages.css"

function MainChatBody() {
    return (
        <>            
            <div class="mesgs">
                    <div class="msg_history">
                        <div class="incoming_msg">
                        <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
                        <div class="received_msg">
                            <div class="received_withd_msg">
                            <p>Test which is a new approach to have all
                                solutions</p>
                            <span class="time_date"> 11:01 AM    |    June 9</span></div>
                        </div>
                        </div>
                        <div class="outgoing_msg">
                        <div class="sent_msg">
                            <p>Test which is a new approach to have all
                            solutions</p>
                            <span class="time_date"> 11:01 AM    |    June 9</span> </div>
                        </div>
                        <div class="incoming_msg">
                        <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
                        <div class="received_msg">
                            <div class="received_withd_msg">
                            <p>Test, which is a new approach to have</p>
                            <span class="time_date"> 11:01 AM    |    Yesterday</span></div>
                        </div>
                        </div>
                        <div class="outgoing_msg">
                        <div class="sent_msg">
                            <p>Apollo University, Delhi, India Test</p>
                            <span class="time_date"> 11:01 AM    |    Today</span> </div>
                        </div>
                        <div class="incoming_msg">
                            <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
                            <div class="received_msg">
                                <div class="received_withd_msg">
                                <p>We work directly with our designers and suppliers,
                                    and sell direct to you, which means quality, exclusive
                                    products, at a price anyone can afford.</p>
                                            <span class="time_date"> 11:01 AM    |    Today</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="type_msg">
                        <div class="input_msg_write">
                        <input type="text" class="write_msg" placeholder="Type a message" />
                        <button class="msg_send_btn" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cursor-fill" viewBox="0 0 16 16">
  <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"/>
</svg>
                                    </button>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default MainChatBody
