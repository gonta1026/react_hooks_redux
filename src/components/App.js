import React, { useState, useReducer, useCallback, useMemo } from 'react';
import reducer from "../reducers";
import 'bootstrap/dist/css/bootstrap.min.css';
import EventForm from "./EventForm"
import Events from "./Events"
// import AppContext from "../contexts/AppContext"
import { DELETE_EVENT, CREATE_EVENT, DELETE_ALL_EVENT } from "../actions";

const App = () => {
  const defaltEvent = { title: "", body: "" }
  const [event, setEvent] = useState(defaltEvent);
  const initialState = {
    events: [],
    operationLogs: []
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  const addEvent = useCallback((e) => {
    e.preventDefault();
    dispatch({ type: CREATE_EVENT, event })
    setEvent(defaltEvent)
  }, [defaltEvent, event])

  const handleClickDelete = useCallback((e, id) => {
    e.preventDefault();
    const result = window.confirm(`id=${id}を削除してもいいですか？`)
    if (result) {
      dispatch({ type: DELETE_EVENT, id })
    }
  }, [])

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
    <>
      <div className="container-fluid">
        <EventForm formProps={formProps} />
        <Events handleClickDelete={handleClickDelete} state={state} />
      </div>
    </>
  );
}

export default App;
