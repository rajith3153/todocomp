import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Todoform.css";
import AddTask from "./AddTaskForm";
import Todo from "./TodoItems";
import Completed from "./CompletedItems";

function TodoLayout() {
  const [items, setItems] = useState([]);
  const [completedItems, setCompletedItems] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editItemId, setEditItemId] = useState(null);
  const [text, setText] = useState("");
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!text.length) {
      return;
    }
    if (editing) {
      const updatedItems = items.map((item) => {
        if (item.id === editItemId) {
          return {
            ...item,
            text: text,
          };
        }
        return item;
      });
      setItems(updatedItems);
      setText("");
      setEditing(false);
      setEditItemId(null);
    } else {
      const newItem = {
        text: text,
        id: Date.now(),
        timestamp: new Date().toLocaleString(),
      };
      setItems(items.concat(newItem));
      setText("");
    }
  };

  const handleEdit = (id) => {
    const itemToEdit = items.find((item) => item.id === id);
    setText(itemToEdit.text);
    setEditing(true);
    setEditItemId(id);
  };
  return (
    <div className="todo-list">
      <AddTask
        handleSubmit={handleSubmit}
        text={text}
        handleChange={handleChange}
        editing={editing}
      />
      <Tabs activeKey={activeTab} onSelect={(e) => setActiveTab(e)}>
        <Tab eventKey={0} title="To-Do List">
          <Todo
            items={items}
            setItems={setItems}
            handleEdit={handleEdit}
            setCompletedItems={setCompletedItems}
          />
        </Tab>
        <Tab eventKey={1} title="Completed Tasks">
          <Completed
            completedItems={completedItems}
            setCompletedItems={setCompletedItems}
            items={items}
            setItems={setItems}
          />
        </Tab>
      </Tabs>
    </div>
  );
}
export default TodoLayout;
