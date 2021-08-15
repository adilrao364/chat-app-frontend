import React from "react";
import GroupList from "./GroupList";
import { groupList } from "../../../../UserArray";

function Groups() {
  return (
    <div>
      <h5 style={{ color: "#8895A7" }}>
        <b>Create Groups</b>
      </h5>
      {groupList.map((user) => {
        return <GroupList user={user} key={user.id} />;
      })}
    </div>
  );
}

export default Groups;
