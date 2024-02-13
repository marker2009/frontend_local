import React from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

export default function MainScreen1() {
    const submit = () => {
        confirmAlert({
          title: "Confirm to submit",
          message: "Are you sure to do this.",
          buttons: [
            {
              label: "Yes",
              onClick: () => alert("Click Yes")
            },
            {
              label: "No",
              onClick: () => alert("Click No")
            }
          ]
        });
      };

  return (
    <div>
      <button onClick={submit}>Confirm dialog</button>
    </div>
  );
}