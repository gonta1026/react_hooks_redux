import React, { useContext, memo } from 'react';
import AppContext from '../contexts/AppContext';

const Event = memo(({ formProps }) => {
    console.log("EventForm Component render!!")
    // const { formProps } = useContext(AppContext)
    const { addEvent, event, handleClickAllDelete, setEvent, state } = formProps;
    const { title, body } = event;

    const onCreatble = event.title === "" | event.body === "";
    const onAllDeletable = !state.events.length;

    return (
        <>
            <h4>イベント作成フォーム</h4>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">タイトル</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={title} placeholder="title" onChange={(e) => setEvent({ ...event, title: e.target.value })} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">ボディ</label>
                    <textarea className="form-control" id="exampleInputPassword1" placeholder="Password" value={body} onChange={(e) => setEvent({ ...event, body: e.target.value })}></textarea>
                </div>
                <button type="submit" className="btn btn-primary" disabled={onCreatble} onClick={(e) => addEvent(e)}>イベントを作成</button>
                <button type="submit" className="btn btn-danger" disabled={onAllDeletable} onClick={(e) => handleClickAllDelete(e)}>全てのイベントを削除</button>
            </form>
        </>
    );
});
export default Event;