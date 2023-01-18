import './styles.css';
import { CardItem } from './components/CardItem';
import { useState } from 'react';

function HomeApp() {

  const [arrayCards, setArrayCards] = useState([...Array(7).keys()]);

  const addItem = () => {
    setArrayCards(prevState => [...prevState, (prevState.length)])
  }

  const removeItem = () => {
    setArrayCards(arrayCards.slice(0, -1))
  }


  return (
    <div>
      <div className="cards">
        {
          arrayCards.map( element => (<CardItem key={element}/>))
        }
      </div>

      <div className='buttons-section'>
        <button className='button-basic' onClick={addItem}>Add Item</button>
        <button className='button-basic btn-red' onClick={removeItem}>Remove Item</button>
      </div>
    </div>
  );
}

export default HomeApp;
