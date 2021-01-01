import React, {useState, useReducer} from 'react';
import reducer from "../reducers";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = (props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [state, dispatch] = useReducer(reducer, []);

  const addEvent = (e) => {
    e.preventDefault();
    console.log()
    dispatch({type: "CREATE_EVENT", title, body})
    setTitle("")
    setBody("")
  }

  console.log(state)
  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">タイトル</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={title}placeholder="title" onChange={(e) => setTitle(e.target.value)}/>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">ボディ</label>
          <textarea className="form-control" id="exampleInputPassword1" placeholder="Password" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
        </div>
        <button type="submit" className="btn btn-primary" onClick={(e) => addEvent(e)}>イベントを作成</button>
        <button type="submit" className="btn btn-danger">全てのイベントを削除</button>
      </form>

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
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    
  );
}

export default App;
