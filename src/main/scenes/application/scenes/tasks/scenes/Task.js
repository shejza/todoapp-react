import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../services/actions";

export default function Task({ todo, deleteItem, selectItem, isSelected }) {
  const formDefaultValues = {
    title: todo.title,
    completed: todo.completed,
  };

  const dispatch = useDispatch();
  const [selectedTask] = useState(isSelected);
  const [formValues, setFormValues] = useState(formDefaultValues);
  const { title, completed } = formValues;

  const onTaskSelect = () => {
    selectItem(todo.id);
  };

  const handleChange = (e) => {
    const target = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.edit(formValues, todo.id));
  };

  const onCompletedChange = () => {
    const completed = !todo.completed ? 1 : 0;

    const _formValues = { ...formValues, completed };
    dispatch(actions.edit(_formValues, todo.id));
  };

  return (
    <div>
      <li
        className={
          "list-group-item hover" +
          (!!todo.completed ? " done" : selectedTask ? " editing active" : "")
        }
        onClick={onTaskSelect}
        key={todo.id}
      >
        <div className="view" id="task-4">
          <button
            className="destroy close hover-action"
            onClick={() => deleteItem(todo.id)}
          >
            ×
          </button>
          <form onSubmit={handleSubmit}>
            <div className="checkbox">
              <input
                className="toggle"
                type="checkbox"
                onChange={onCompletedChange}
                checked={!!todo.completed}
              />

              <span className="task-name"> {title}</span>
              <input
                className="edit form-control"
                type="text"
                value={title}
                name="title"
                onChange={handleChange}
              />
            </div>
          </form>
        </div>
      </li>
    </div>
  );
}
