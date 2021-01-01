import React, {useState} from 'react';

const App = (props) => {
  const [state, SetState] = useState(props);
  console.log(state)
  const { name, price } = state 
  return (
    <>
      <div>
        現在の{name}は{price}です。
      </div>
      <button onClick={() => SetState({...state, price: price + 1})}> +</button>
      <button onClick={() => SetState({...state, price: price - 1})}> -</button>
      <button onClick={() => SetState(props)}>リセット</button>
      <input type="text" value={name} onChange={(e) => SetState({...state, name: e.target.value})}/>
    </>
    
  );
}

App.defaultProps = {
  name: "",
  price: 1000
}

export default App;
