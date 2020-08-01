
import React from 'react';

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

export default RecipeCard