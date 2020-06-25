import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../services/actions";
import TasksDesc from "../../tasks_desc/scenes/TasksDesc";
import Task from "./Task";

export default function Tasks() {
  const dispatch = useDispatch();

  const { todos } = useSelector((state) => state.todos);
  const [todosList, setToDos] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const isMarkedAllSelected = !todosList.filter((todo) => !todo.completed)
    .length;

  useEffect(() => {
    dispatch(actions.getAll());
  }, [dispatch]);

  useEffect(() => {
    if (!!todos) {
      setToDos(todos);
    }
  }, [todos]);

  const deleteItem = (todoId) => {
    console.log(todoId);
    dispatch(actions.deleteTask(todoId));
  };

  const addElement = () => {
    const formValues = { title: "New Task" };
    dispatch(actions.create(formValues));
  };

  const selectItem = (selectedId) => {
    setSelectedId(selectedId);
  };

  const renderedToDos = todosList.map((todo, index) => (
    <Task
      key={todo.id + "-" + selectedId + "-" + todo.completed}
      todo={todo}
      deleteItem={deleteItem}
      selectItem={selectItem}
      isSelected={todo.id === selectedId || (!selectedId && index === 0)}
    />
  ));

  const onMarkAllChange = () => {
    const completed = isMarkedAllSelected ? 0 : 1;
    dispatch(actions.markAll(completed));
  };

  return (
    <React.Fragment>
      <section id="content">
        <section className="hbox stretch" id="taskapp">
          <aside>
            <section className="vbox">
              <header className="header bg-light lter bg-gradient b-b">
                <button
                  className="btn btn-success btn-sm pull-right btn-icon"
                  id="new-task"
                  onClick={() => addElement()}
                >
                  <i className="fa fa-plus"></i>
                </button>
                <p>Tasks</p>
              </header>
              <section className="bg-light lter w-f">
                <section className="hbox stretch">
                  <aside>
                    <section className="vbox">
                      <section className="scrollable wrapper">
                        <ul id="task-list" className="list-group list-group-sp">
                          {renderedToDos}
                        </ul>
                      </section>
                    </section>
                  </aside>
                </section>
              </section>
              <footer className="footer bg-white-only b-t">
                <p className="checkbox">
                  <label>
                    <input
                      id="toggle-all"
                      type="checkbox"
                      onChange={onMarkAllChange}
                      checked={isMarkedAllSelected}
                    />
                    Mark all as complete
                  </label>
                </p>
              </footer>
            </section>
          </aside>

          <TasksDesc key={selectedId} selectedId={selectedId} />
        </section>
      </section>
    </React.Fragment>
  );
}
