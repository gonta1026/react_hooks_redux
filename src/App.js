import React, {useState} from 'react';

const App = ({initName, initPrice}) => {
  const [name, SetName] = useState(initName);
  const [price, SetPrice] = useState(initPrice);
  return (
    <>
      <div>
        現在の{name}は{price}です。
      </div>
    </>
    
  );
}

App.defaultProps = {
  initName: "",
  initPrice: 1000
}

export default App;
