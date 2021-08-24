import React, { useState } from "react";

import ToDoItem from "./ToDoItem";
import Header from "./Header";
import Form from "./Form";

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <Header />

      <Form addItem={addItem} />

      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onCheck={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
