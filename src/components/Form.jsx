import React, { useState } from "react";

export default function Form(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    setInputText(event.target.value);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText}  placeholder="What do you want to do?"/>
      <button
        onClick={() => {
          props.addItem(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}
