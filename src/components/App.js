import React, { useState, useReducer } from 'react';
import reducer from "../reducers";
import 'bootstrap/dist/css/bootstrap.min.css';
import EventForm from "./EventForm"
import Events from "./Events"
import AppContext from "../contexts/AppContext"
import { DELETE_EVENT, CREATE_EVENT, DELETE_ALL_EVENT } from "../actions";

console.log(AppContext);
const App = () => {
  const defaltEvent = { title: "", body: "" }
  const [event, setEvent] = useState(defaltEvent);
  const [state, dispatch] = useReducer(reducer, []);

  const addEvent = (e) => {
    e.preventDefault();
    dispatch({ type: CREATE_EVENT, event })
    setEvent(defaltEvent)
  }

  const handleClickDelete = (e, id) => {
    console.log(e, id)
    e.preventDefault();
    const result = window.confirm(`id=${id}を削除してもいいですか？`)
    if (result) {
      dispatch({ type: DELETE_EVENT, id })
    }
  }

  const handleClickAllDelete = (e) => {
    e.preventDefault();
    const result = window.confirm("全て削除してもいいですか？")
    if (result) {
      dispatch({ type: DELETE_ALL_EVENT })
    }
  }

  const formProps = {
    event,
    handleClickAllDelete,
    addEvent,
    setEvent,
    state
  }

  return (
    <AppContext.Provider value={{ formProps, state, handleClickDelete }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
      </div>
    </AppContext.Provider>
  );
}

export default App;
