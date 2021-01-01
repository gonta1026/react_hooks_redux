import React from 'react';
import Event from "./Event"

const Events = ({ state, handleClickDelete }) => {
    return (
        <>
            <h4 className="">イベント一覧</h4>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>タイトル</th>
                        <th>ボディ</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {state.map((event, index) => (<Event key={index} event={event} handleClickDelete={handleClickDelete} />))}
                </tbody>
            </table>
        </>
    );
}
export default Events;