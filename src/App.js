import React from 'react';
import { Item } from './components/Item';
import { useSelector } from 'react-redux';
import { ItemPhoto } from './components/ItemPhoto';

function App(props) {

  const item = useSelector(state => state.item)

  return (
    <>
      {item.length > 0
        ? <div className="App">
          <div className="item__wrapper">
            {item.map(el => <Item key={el.id} el={el} />)}
          </div>
          <div className="right__side">
            <ItemPhoto />
          </div>
        </div>
        :
        <div className="App">
          <div className="win__message">
            <span>Поздравляю, Вы победили!</span>
          </div>
        </div>
      }
    </>
  );
}

export default App;
