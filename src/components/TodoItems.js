import React from "react";

function Todo(props) {
  const { items, handleEdit, setItems, setCompletedItems } = props;
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      const updatedItems = items.filter((item) => item.id !== id);
      setItems(updatedItems);
    }
  };
  const handleComplete = (id) => {
    const itemToComplete = items.find((item) => item.id === id);
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    setCompletedItems((prevCompletedItems) => [...prevCompletedItems, itemToComplete]);
  };
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.text} - created at {item.timestamp}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                className="button delete-button"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
              <button
                className="button edit-button"
                onClick={() => handleEdit(item.id)}
              >
                Edit
              </button>
              <button
                className="button complete-button"
                onClick={() => handleComplete(item.id)}
              >
                Complete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Todo;
