
import React, { useState, useEffect } from 'react';
import './App.css';
import FetchingData from './component/FetchingData'
import WeeklyRecipeList from './component/WeeklyRecipeList'
import ActionBar from './component/ActionBar'
import RandomRecipeContainer from './component/RandomRecipeContainer'


const reciKey = process.env.REACT_APP_KEY
const APIPath = `https://api.spoonacular.com/recipes/random?apiKey=${reciKey}&number=12`



function App() {
  const [isFetching, setIsFetching] = useState(false)
  const [foodList, updateFoodList] = useState([])
  const [selectedFood, updateSelectedFood] = useState([])
  const [recipesLiked, addRecipeLiked] = useState([])
  const [recipesSaved, addRecipeSaved] = useState([])


  function wklyRandomRecipe() {
    updateFoodList([])
    setIsFetching(true)
    fetch(APIPath)
      .then((response) => response.json())
      .then((data) => updateFoodList(data.recipes))
      .catch((e) => console.log(e))
    setIsFetching(false)
  }
  // functions below create custom hook using useReduce
  function clearRecipeLineUp() {
    // remove all recipes that have been selected to the list
    updateSelectedFood([])
  }
  function addToLiked(favRecipe) {
    addRecipeLiked([...recipesLiked, favRecipe])
  }
  function saveForLater(selectedItem) {
    addRecipeSaved([...recipesSaved, selectedItem])
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
      <ActionBar addToLiked={addToLiked} wklyRandomRecipe={wklyRandomRecipe} clearRecipeLineUp={clearRecipeLineUp} />
      {isFetching ? <FetchingData /> : null}
      <RandomRecipeContainer
        recipeList={foodList}
        selectRecipe={selectRecipe}
        saveForLater={saveForLater}
      />

    </div>
  );
}

export default App;
