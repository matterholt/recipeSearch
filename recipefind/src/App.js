
import React, { useState, useEffect } from 'react';
import './App.css';

const reciKey = process.env.REACT_APP_KEY
const APIPath = `https://api.spoonacular.com/recipes/random?apiKey=${reciKey}&number=5`



const RecipeCard = ({ recipeInfo }) => {
  return (
    <li key={recipeInfo.id} className="recipe__card">
      <h2>{recipeInfo.title}</h2>
      <p>Time:{recipeInfo.readyInMinutes} mins</p>
      <div><img src={recipeInfo.image} width="150px" /></div>
      <div dangerouslySetInnerHTML={{ __html: recipeInfo.summary }} />
    </li>
  )
}

const SearchList = ({ recipeInfo }) => {
  return (
    <ul className="recipe__container">
      {recipeInfo.map(x => <RecipeCard recipeInfo={x} />)}
    </ul>
  )
}

function App() {
  const [isFetching, setIsFetching] = useState(false)
  const [foodList, updateFoodList] = useState([])

  function wklyRandomRecipe() {
    setIsFetching(true)
    fetch(APIPath)
      .then((response) => response.json())
      .then((data) => updateFoodList(data.recipes))
      .catch((e) => console.log(e))
    setIsFetching(false)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Recipe Planner</h1>
        <button onClick={wklyRandomRecipe}>Random</button>
      </header>
      {isFetching ? <p>fetching</p> : null}
      <SearchList recipeInfo={foodList} />
    </div>
  );
}

export default App;
