import React from "react";
import { Fab, Action } from "react-tiny-fab";
import "react-tiny-fab/dist/styles.css";
import { BsPlus, BsImages, BsMic } from "react-icons/bs";

function FAButton() {
  return (
    <>
      <Fab
        icon={<BsPlus color="#FFF"/>}
        event="click"
        mainButtonStyles={{
          backgroundColor: "#05728F",
          height: 31,
          width: 31,
        borderRadius: 48,
        right:470, top:15
        }}
        alwaysShowTitle={false}
        // onClick={someFunctionForTheMainButton}
      >
        <Action  style={{width:"30px", height:"30px", backgroundColor: "#FFF", right:470,
         }} >
          <BsMic color="#05728F"/>
        </Action>

        <Action style={{width:"30px", height:"30px", backgroundColor: "#FFF", right:470}}>
          <BsImages color="#05728F"/>
        </Action>
      </Fab>
    </>
  );
}

export default FAButton;
