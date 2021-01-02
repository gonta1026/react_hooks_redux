import React, { memo } from 'react';
import Event from '../components/Event';
// import AppContext from '../contexts/AppContext';


const Events = memo(({ handleClickDelete, state }) => {
    // const { state } = useContext(AppContext)
    console.log("Events Component render!!")
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
                    {state.events.map((event, index) => (<Event key={index} event={event} handleClickDelete={handleClickDelete} />))}
                </tbody>
            </table>
        </>
    );
});

export default Events;