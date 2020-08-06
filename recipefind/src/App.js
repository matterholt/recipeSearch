
import React, { useState, useEffect } from 'react';
import './App.css';
import RecipeTable from './component/RecipeTable'
import FetchingData from './component/FetchingData'
import WeeklyRecipeList from './component/WeeklyRecipeList'

import Button from '@material-ui/core/Button'




const reciKey = process.env.REACT_APP_KEY
const APIPath = `https://api.spoonacular.com/recipes/random?apiKey=${reciKey}&number=5`



const ItemCheck = (props) => {
  return (
    <div>
      <Button> Remove</Button>
      <Button> Info</Button>
    </div>
  )
}
function App() {
  const [isFetching, setIsFetching] = useState(false)
  const [foodList, updateFoodList] = useState([])
  const [selectedFood, updateSelectedFood] = useState([])


  function wklyRandomRecipe() {
    setIsFetching(true)
    fetch(APIPath)
      .then((response) => response.json())
      .then((data) => updateFoodList(data.recipes))
      .catch((e) => console.log(e))
    setIsFetching(false)
  }
  function clearRecipeLineUp() {
    updateFoodList([])
    updateSelectedFood([])
  }
  function removeSelectItemMainList(selectedItem) {
    const removedItem = foodList.filter(item => item.id !== selectedItem.id)
    updateFoodList(removedItem)
  }

  function selectRecipe(selectedItem) {
    removeSelectItemMainList(selectedItem)
    // remove id from the main food list filter foodlist return the what is still there
    if (selectedFood.length < 5) {
      updateSelectedFood([...selectedFood, selectedItem])
    } else {
      alert("Too many recipes this week ")
    }

  }

  return (
    <div >
      <header className="App-header">
        <h1>Recipe Planner</h1>
        <div>
          <Button variant="contained" color="primary" onClick={wklyRandomRecipe}>Random</Button>
          <Button variant="contained" color="secondary" onClick={clearRecipeLineUp}>Clear</Button>
        </div>
        <WeeklyRecipeList choosenRecipes={selectedFood} />
      </header>
      <h2>Recipe List</h2>
      {isFetching ? <FetchingData /> : null}
      < RecipeTable recipeList={foodList} selectRecipe={selectRecipe} />
    </div>
  );
}

export default App;
