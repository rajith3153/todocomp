import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Todoform.css";
import AddTask from "./AddTask";
import Todo from "./Todo";
import Completed from "./Completed";

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
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      const updatedItems = items.filter((item) => item.id !== id);
      setItems(updatedItems);
    }
  };
  const handleEdit = (id) => {
    const itemToEdit = items.find((item) => item.id === id);
    setText(itemToEdit.text);
    setEditing(true);
    setEditItemId(id);
  };
  const handleComplete = (id) => {
    const itemToComplete = items.find((item) => item.id === id);
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    setCompletedItems(completedItems.concat(itemToComplete));
  };
  const [showCompletedTab, setShowCompletedTab] = useState(false);

  const handleUndo = (id) => {
    const itemToUndo = completedItems.find((item) => item.id === id);
    const updatedCompletedItems = completedItems.filter(
      (item) => item.id !== id
    );
    setCompletedItems(updatedCompletedItems);
    setItems(items.concat(itemToUndo));
  };
  const handleTodoList = () => {
    setActiveTab(activeTab === 0 ? 1 : 0);
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
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            handleComplete={handleComplete}
          />
        </Tab>
        <Tab eventKey={1} title="Completed Tasks">
          <Completed completedItems={completedItems} handleUndo={handleUndo} />
        </Tab>
      </Tabs>

    </div>
  );
}
export default TodoLayout;
