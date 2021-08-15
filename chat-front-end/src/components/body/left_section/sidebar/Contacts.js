import React from "react";
import "../../Home.css";
import Searchbar from "../Searchbar";


import { allUserList} from "../../../../UserArray"
import Contact from "../Contact";

function Contacts() {
  return (
    <>
      <div>
        <h5 className="mb-4" style={{ color: "#8895A7" }}>
          <b>All Joined Users</b>
          <Searchbar />
        </h5>
              {
                  allUserList.map(contact => {
                      return (
                          <Contact key={contact.id} contact={ contact}/>
                      )
                  })
              }
      </div>
    </>
  );
}

export default Contacts;
