import React, { useState } from "react";
import "./sidebar.css";
import { NavLink, useLocation } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import { sibarItemArray } from "./TabDataArray";

function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(1);

  const activeTabs = (id) => {
    setActiveIndex(id);
  };

  return (
    <>
      <ReactTooltip effect="solid" backgroundColor="#05728F" />
      <div
        className="d-flex flex-column shadow"
        style={{
          backgroundColor: "#ffffff",
          height: "91.1vh",
          width: "4.3rem",
        }}
      >
        <ul
          class="nav nav-pills nav-flush flex-column mb-auto text-center"
          style={{ marginTop: "12rem" }}
        >
          {sibarItemArray.map((item) => {
            const activeClass =
              item.id === activeIndex
                ? "active"
                : "inactive";
            const activeColor =
              item.id === activeIndex ? "#FFF" : "#8895A7";
            return (
              <NavLink
                to={item.toRoute}
                aria-current="page"
                className={`nav-item ${activeClass}`}
                  onClick={() => activeTabs(item.id)}
                  key={item.id}
                  style={{ marginTop: "1rem", cursor: "pointer", height:"3.3rem" }}
                  data-tip={item.dataTip}
              >
                <li
                  class={`pt-3`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={item.width}
                    height={item.height}
                    color={`${activeColor}`}
                    fill="#8895A7"
                    class={item.classIcon}
                    viewBox="0 0 16 16"
                    style={{ backgroundColor: "none" }}
                  >
                    <path d={item.svgPath1} />
                    <path d={item.svgPath2} />
                  </svg>
                </li>
              </NavLink>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
