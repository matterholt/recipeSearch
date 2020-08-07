
import React, { useState, useEffect } from 'react';
import './App.css';
import RecipeTable from './component/RecipeTable'
import FetchingData from './component/FetchingData'
import WeeklyRecipeList from './component/WeeklyRecipeList'
import ActionBar from './component/ActionBar'


const reciKey = process.env.REACT_APP_KEY
const APIPath = `https://api.spoonacular.com/recipes/random?apiKey=${reciKey}&number=10`



function App() {

  // custom hooks
  const [isFetching, setIsFetching] = useState(false)
  const [foodList, updateFoodList] = useState([])
  const [selectedFood, updateSelectedFood] = useState([])


  function wklyRandomRecipe() {
    updateFoodList([])
    setIsFetching(true)
    fetch(APIPath)
      .then((response) => response.json())
      .then((data) => updateFoodList(data.recipes))
      .catch((e) => console.log(e))
    setIsFetching(false)
  }
  function clearRecipeLineUp() {
    // remove all recipes that have been selected to the list
    updateSelectedFood([])

    // change to allow the random button to "refresh"

  }
  function addToLikeed() {
    // add to the favorite recipe list
  }
  function removeSelectItemMainList(selectedItem) {
    const removedItem = foodList.filter(item => item.id !== selectedItem.id)
    updateFoodList(removedItem)
  }
  function selectRecipe(selectedItem) {
    removeSelectItemMainList(selectedItem)
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
        <WeeklyRecipeList choosenRecipes={selectedFood} />
      </header>
      <ActionBar wklyRandomRecipe={wklyRandomRecipe} clearRecipeLineUp={clearRecipeLineUp} />

      {isFetching ? <FetchingData /> : null}
      {/* no show on empty table */}
      {}
      < RecipeTable recipeList={foodList} selectRecipe={selectRecipe} />

    </div>
  );
}

export default App;
