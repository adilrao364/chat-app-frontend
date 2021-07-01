import React, {useState} from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import {sibarItemArray} from "./TabDataArray"

function Sidebar() {

  const [activeIndex, setActiveIndex] = useState(1)

  const activeTabs = (id) => {
      setActiveIndex(id)
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
          {sibarItemArray.map((item, index) => {
           const activeClass = activeIndex === item.id ? "active" : "inactive"
           const activeColor = activeIndex === item.id ? "#FFF" : "#8895A7"
            return (
              <li class={`nav-item p-2 ${activeClass}`} onClick={()=>activeTabs(item.id)} key={item.id} style={{marginTop:"1rem", cursor:"pointer"}} data-tip={item.dataTip}>
                <NavLink
                  to={item.toRoute}
                  class="py-3"
                  aria-current="page"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={item.width}
                    height={item.height}
                    color={`${activeColor}`}
                    fill="#8895A7"
                    class={item.classIcon}
                    viewBox="0 0 16 16"
                  >
                    <path d={item.svgPath1} />
                    <path d={item.svgPath2} />
                  </svg>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;