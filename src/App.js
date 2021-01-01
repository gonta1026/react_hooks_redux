import React, {useEffect, useState} from 'react';

const App = (props) => {
  const [state, SetState] = useState(props);
  console.log(state)
  const { name, price } = state 

  useEffect(() => {
    console.log("Didmount!!")
  }, [])

  const periot = () => {
    console.log("periot")
    return "。"
  }
  return (
    <>
      <div>
        現在の{name}は{price}です{periot()}
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
