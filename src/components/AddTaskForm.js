import React from "react";

function AddTaskForm({handleSubmit,text,handleChange,editing}) {
  
  return (
    <div>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-9">
          <input
            type="text"
            value={text}
            onChange={handleChange}
            className="form-control"
            placeholder="Add a to-do item"
          />
        </div>
        <div className="col-3">
          <button className="btn btn-primary w-100" disabled={!text}>
            {editing ? "Save" : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTaskForm;