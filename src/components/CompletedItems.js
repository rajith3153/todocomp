import React from "react";


function Completed(props) {
  const {completedItems,setCompletedItems,items,setItems}= props

  const handleUndo = (id) => {
    const itemToUndo = completedItems.find((item) => item.id === id);
    const updatedCompletedItems = completedItems.filter(
      (item) => item.id !== id
    );
    setCompletedItems(updatedCompletedItems);
    setItems(items.concat(itemToUndo));
  };
    
  return (
    <div>
      <ul className="completed-tasks">
        {completedItems.map((item) => (
          <li key={item.id}>
            {item.text} - created at {item.timestamp}
            <button
              className="button undo-button"
              onClick={() => handleUndo(item.id)}
            >
              Undo
              
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Completed;
