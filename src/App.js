import { useState } from 'react';
import './App.css';
import { Cards } from './Component/Cards';

import imges from './Data/cardsData';

function App() {
  const[first, setFirst] = useState(imges.cover)
  const handleClick = () => {
    if (first === imges.cover){
      setFirst(imges.img);
    }else {
      setFirst(imges.cover)
    }
  }
  const imgeList = imges.map((imge, index)=> {
    return(
      <Cards imge={imge}/>
    )}
  )
  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button>New Game</button>
      <div className='container'>
        {imgeList}
      </div>
      <img onClick={handleClick} src={first}></img>
    </div>
    
  );
};
export default App;

