import React from 'react'

function Todo(props) {
    const {items,handleDelete,handleEdit,handleComplete} = props;
  return (
    <div>
      <ul>
            {items.map((item) => (
              <li key={item.id}>
                {item.text} - created at {item.timestamp}
                <div style={{ display: "flex", justifyContent: "center" }} >
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
  )
}

export default Todo
