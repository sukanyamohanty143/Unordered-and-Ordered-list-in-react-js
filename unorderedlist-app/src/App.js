import './App.css';
import {React, useState} from 'react';

function App() {
  const [allData, setAllData]=useState([ { name: 'John', age: 23 }, { name: 'Albert', age: 28 }, { name: 'Gladly', age: 35 } ]);
  const data=allData
  data.sort((firstItem, secondItem) =>  secondItem.price - firstItem.price);
  console.log(data)
  return (
    <div>
      
    </div>
  );
}

export default App;
