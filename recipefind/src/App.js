
import React, { useState, useEffect } from 'react';
import './App.css';
import RecipeTable from './component/RecipeTable'
import RecipeCard from './component/RecipeCard'
import FetchingData from './component/FetchingData'
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  Container: {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '100vw',
    alignItems: 'center',
    margin: '5px'
  }
})

const reciKey = process.env.REACT_APP_KEY
const APIPath = `https://api.spoonacular.com/recipes/random?apiKey=${reciKey}&number=5`


const EmptyCardRecipe = ({ choosenRecipes }) => {
  const daily = [
    { day: 'Monday', dayValue: 1, recipe: [] },
    { day: 'Tuesday', dayValue: 2, recipe: [] },
    { day: 'Wednesday', dayValue: 3, recipe: [] },
    { day: 'Thursday', dayValue: 4, recipe: [] },
    { day: 'Friday', dayValue: 5, recipe: [] },
  ];
  const weeklyRecipe = useStyles()

  return (
    <div className={weeklyRecipe.Container}>
      {daily.map((dayEntry) =>
        <div>
          <h3>{dayEntry.day}</h3>
          <Card key={dayEntry.dayValue}><p>No items added</p></Card>
        </div>
      )}
    </div>
  )
}



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
  }
  function selectRecipe(selectedItem) {
    // remove id from the main food list
    if (selectedFood.length < 5) {
      updateSelectedFood([...selectedFood, selectedItem])
      console.log(selectedItem)
    } else {
      alert("Too many recipes this week ")
    }

  }
  useEffect(() => {
    console.log(selectedFood)
  }, [selectedFood])

  return (
    <div >
      <header className="App-header">
        <h1>Recipe Planner</h1>
        <div>
          <Button variant="contained" color="primary" onClick={wklyRandomRecipe}>Random</Button>
          <Button variant="contained" color="secondary" onClick={clearRecipeLineUp}>Clear</Button>
        </div>
        <EmptyCardRecipe />
      </header>
      <h2>Recipe List</h2>
      {isFetching ? <FetchingData /> : null}
      < RecipeTable recipeList={foodList} selectRecipe={selectRecipe} />
    </div>
  );
}

export default App;
