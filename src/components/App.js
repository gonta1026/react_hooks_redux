import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = (props) => {

  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">タイトル</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">ボディ</label>
          <textarea className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-primary">イベントを作成</button>
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
