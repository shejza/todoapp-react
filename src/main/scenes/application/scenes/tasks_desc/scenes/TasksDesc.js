import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../services/actions";

export default function TasksDesc({ selectedId }) {
  const formDefaultValues = {
    description: "",
  };
  const dispatch = useDispatch();

  const [todosList, setToDosDec] = useState([]);

  const [formValues, setFormValues] = useState(formDefaultValues);
  const { description } = formValues;
  const { todosdesc } = useSelector((state) => state.todosdesc);

  useEffect(() => {
    dispatch(actions.getAllDesc(selectedId));
  }, [dispatch]);

  useEffect(() => {
    if (!!todosdesc) {
      setToDosDec(todosdesc);
    }
  }, [todosdesc]);

  const deleteTaskDesc = (todoDescId) => {
    console.log(todoDescId);
    dispatch(actions.deleteTaskDesc(todoDescId));
  };
  const taksDesc = todosList.map((tododesc) => {
    return (
      <div>
        <li className="list-group-item hover" key={tododesc.id}>
          <div className="view">
            <button
              className="destroy close hover-action"
              onClick={() => deleteTaskDesc(tododesc.id)}
            >
              ×
            </button>
            <div>
              <span>{tododesc.description}</span>
              <small className="text-muted block text-xs">
                <i className="fa fa-clock-o"></i> 21 hours ago
              </small>
            </div>
          </div>
        </li>
      </div>
    );
  });

  function handleChange(e) {
    const target = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.create(formValues, selectedId));
    setFormValues({ description: "" });
  };
  return (
    <React.Fragment>
      <aside className="col-lg-4 bg-white">
        <section className="vbox flex b-l" id="task-detail">
          <header className="header bg-light lt b-b">
            <p className="m-b">
              <span className="text-muted">Created:</span> May 10th, 12:48 am
            </p>
            <div className="lter pull-in b-t m-t-xxs">
              <textarea
                type="text"
                className="form-control form-control-trans scrollable"
                placeholder="Task description"
              ></textarea>
            </div>
          </header>
          <section>
            <section>
              <section>
                <section>
                  <ul
                    id="task-comment"
                    className="list-group no-radius no-border m-t-n-xxs"
                  >
                    {taksDesc}
                  </ul>
                </section>
              </section>
            </section>
          </section>
          <footer className="footer bg-light lter clearfix b-t">
            <div className="input-group m-t-sm">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="form-control input-sm"
                  id="task-c-input"
                  placeholder="Type a comment"
                  value={description}
                  name={"description"}
                  onChange={handleChange}
                />
              </form>
              <span className="input-group-btn">
                <button
                  className="btn btn-success btn-sm"
                  type="button"
                  id="task-c-btn"
                >
                  <i className="fa fa-pencil"></i>
                </button>
              </span>
            </div>
          </footer>
        </section>
      </aside>
    </React.Fragment>
  );
}
