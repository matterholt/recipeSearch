import React, { useState } from 'react';
import './App.css';


const APIPath = "https://api.spoonacular.com/recipes/random"

const SearchList = () => {
  const [foodList, updateFoodList] = useState([])


  return (
    <div>



    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Recipe Planner</h1>
        <SearchList />
      </header>
    </div>
  );
}

export default App;
