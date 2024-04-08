import { useState } from "react";
import Modal from "./modal";
import "./modal.css";

export default function ModelTest() {
  const [showModelPopup, setShowModelPopup] = useState(false);

  function handleToggleModalPopup() {
    setShowModelPopup(!showModelPopup);
  }

  function onClose() {
    setShowModelPopup(false);
  }

  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open Model Popup</button>
      {showModelPopup && (
        <Modal
        id={"custom-id"}
          header={<h1>Customized Header</h1>}
          footer={<h1>Customized Footer</h1>}
          onClose={onClose}
          body={<div>Customized body</div>}
        />
      )}
    </div>
  );
}
