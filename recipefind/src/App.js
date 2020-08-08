
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import FetchingData from './component/FetchingData'
import WeeklyRecipeList from './component/WeeklyRecipeList'
import ActionBar from './component/ActionBar'
import RandomRecipeContainer from './component/RandomRecipeContainer'


const reciKey = process.env.REACT_APP_KEY
const tempDataDesign = {
  title: "Grilled Chicken Banh Mi",
  summary: "You can never have too many Vietnamese recipes, so give Grilled Chicken Banh Mi a try. Watching your figure? This dairy free recipe has <b>481 calories</b>, <b>28g of protein</b>, and <b>14g of fat</b> per serving. For <b>$2.6 per serving</b>, this recipe <b>covers 24%</b> of your daily requirements of vitamins and minerals. This recipe serves 6. 43 people have tried and liked this recipe. It works best as a main course, and is done in around <b>around 45 minutes</b>. If you have sub rolls, chicken breasts, rice vinegar, and a few other ingredients on hand, you can make it. It will be a hit at your <b>The Fourth Of July</b> event. It is brought to you by Foodista. With a spoonacular <b>score of 69%</b>, this dish is solid. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/grilled-chicken-bnh-m-41554\">Grilled Chicken Bánh Mì</a>, <a href=\"https://spoonacular.com/recipes/grilled-chicken-banh-mi-41528\">Grilled Chicken Banh Mi</a>, and <a href=\"https://spoonacular.com/recipes/grilled-chicken-banh-mi-41560\">Grilled-Chicken Banh Mi</a>.",
  id: 645634,
  image: "https://spoonacular.com/recipeImages/645634-556x370.jpg",
  imageType: "jpg",
  dishTypes: [
    "lunch",
    "main course",
    "main dish"
  ]
}
function App() {
  const [isFetching, setIsFetching] = useState(false)
  const [isError, setIsError] = useState({ status: false, msg: '' })
  const [foodList, updateFoodList] = useState([])
  const [selectedFood, updateSelectedFood] = useState([])
  const [recipesLiked, addRecipeLiked] = useState([])
  const [recipesSaved, addRecipeSaved] = useState([])

  useEffect(() => {
    if (foodList.length <= 11) {
      wklyRandomRecipe()
    }
    console.log(foodList)
  }, [foodList])



  function wklyRandomRecipe() {
    const quantity = 12 - foodList.length
    const APIPath = `https://api.spoonacular.com/recipes/random?apiKey=${reciKey}&number=${quantity}`
    const fetchRecipes = async () => {
      try {
        setIsFetching(true)
        const response = await axios.get(APIPath);
        let recipeListFetched = response.data.recipes
        let compiledFoodList = [...foodList, recipeListFetched]
        updateFoodList(compiledFoodList.flat())
        setIsFetching(false)
      } catch (e) {
        console.log(e)
      }
    }
    fetchRecipes()
  }

  function newRandomGeneration() {
    updateFoodList([])
  }


  function removeSelectItemMainList(selectedItem) {
    const removedItem = foodList.filter(item => item.id !== selectedItem.id)
    updateFoodList(removedItem)
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
    removeSelectItemMainList(selectedItem)
  }
  function selectRecipe(selectedItem) {
    if (selectedFood.length < 5) {
      updateSelectedFood([...selectedFood, selectedItem])
      removeSelectItemMainList(selectedItem)

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
      <ActionBar addToLiked={addToLiked} wklyRandomRecipe={newRandomGeneration} clearRecipeLineUp={clearRecipeLineUp} />
      {isFetching ? <FetchingData /> : null}
      <RandomRecipeContainer
        recipeList={foodList}
        selectRecipe={selectRecipe}
        saveForLater={saveForLater}
        removeItem={removeSelectItemMainList}
      />

    </div>
  );
}


export default App;
