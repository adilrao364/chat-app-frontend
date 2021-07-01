import React from "react";
import Profile from "../../images/adilgood.png";

function OtherUserProfile() {
  return (
    <>
      <div
        style={{ backgroundColor: "#FFF" }}
        className="container mb-3 d-flex flex-column justify-content-between rounded p-3 align-items-center"
      >
        <div className="d-flex flex-column align-items-center">
          <img
            src={Profile}
            alt="status"
            class="rounded-circle img-fluid img-thumbnail"
            style={{ objectFit: "cover", height: "100px", width: "100px" }}
          />
          <div
            style={{
              marginLeft: "1rem",
              textAlign: "center",
              marginTop: "1rem",
            }}
          >
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
              Software Engineer{" "}
            </p>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundColor: "#FFF" }}
        className="container mb-3 rounded p-3"
      >
        <p
          style={{
            fontWeight: "bold",
            color: "#8895A7",
            fontSize: "17px",
            marginBottom: "1.5rem",
          }}
        >
          Personal Information
        </p>

        {/* ============ */}
        <div className="d-flex justify-content-between rounded align-items-center">
          <div className="d-flex align-items-center">
            <div>
              <span
                style={{
                  fontSize: "15px",
                }}
              >
                Country
              </span>
              <p
                style={{
                  fontSize: "13px",
                  letterSpacing: ".3px",
                  color: "#8895A7",
                }}
              >
                Bahawalnagar, Pakistan{" "}
              </p>
            </div>
          </div>
          <div>
            <p style={{ color: "#8895A7" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18.5"
                height="18.5"
                fill="currentColor"
                class="bi bi-house-door"
                viewBox="0 0 16 16"
              >
                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
              </svg>
            </p>
          </div>
        </div>
        {/* ============ */}
        <div className="d-flex justify-content-between rounded align-items-center">
          <div className="d-flex align-items-center">
            <div>
              <span
                style={{
                  fontSize: "15px",
                }}
              >
                Phone
              </span>
              <p
                style={{
                  fontSize: "13px",
                  letterSpacing: ".3px",
                  color: "#8895A7",
                }}
              >
                +92 304-7968878{" "}
              </p>
            </div>
          </div>
          <div>
            <p style={{ color: "#8895A7" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-telephone"
                viewBox="0 0 16 16"
              >
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
              </svg>
            </p>
          </div>
        </div>
        {/* ============ */}
        <div className="d-flex justify-content-between rounded align-items-center">
          <div className="d-flex align-items-center">
            <div>
              <span
                style={{
                  fontSize: "15px",
                }}
              >
                Email
              </span>
              <p
                style={{
                  fontSize: "13px",
                  letterSpacing: ".3px",
                  color: "#8895A7",
                }}
              >
                reactevolution364@gmail.com{" "}
              </p>
            </div>
          </div>
          <div>
            <p style={{ color: "#8895A7" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                fill="currentColor"
                class="bi bi-envelope"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
              </svg>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default OtherUserProfile;
