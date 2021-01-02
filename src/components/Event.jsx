import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';
const Event = ({ event, handleClickDelete }) => {
    console.log("Event Component render!!")
    // const { handleClickDelete } = useContext(AppContext)
    return (
        <tr>
            <td>{event.id}</td>
            <td>{event.title}</td>
            <td>{event.body}</td>
            <td><button type="buttion" className="btn btn-danger" onClick={(e) => handleClickDelete(e, event.id)}>削除</button></td>
        </tr>
    );
}
export default Event;