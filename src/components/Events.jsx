import React from 'react';
import Event from '../components/Event';

const Events = ({ state }) => {
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
                    {state.map((event, index) => (<Event key={index} event={event} />))}
                </tbody>
            </table>
        </>
    );
}
export default Events;