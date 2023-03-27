import React from "react";

function Completed({ completedItems, handleUndo }) {
    
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
