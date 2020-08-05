import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

// const recipeObject____temp = (
//     <li key={recipeInfo.id} className="recipe__card">
//         <h2>{recipeInfo.title}</h2>
//         <p>Time:{recipeInfo.readyInMinutes} mins</p>
//         <div><img src={recipeInfo.image} width="150px" /></div>
//         <div dangerouslySetInnerHTML={{ __html: recipeInfo.summary }} />
//     </li>
// )
const RecipeHeader = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell>Add</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Summary</TableCell>
                <TableCell>Detail</TableCell>
            </TableRow>
        </TableHead>
    )
}

const RecipeRows = ({ recipeItem, selectRecipe }) => {
    const recipeName = { title: recipeItem.title }
    return (
        <TableRow>
            <TableCell><button onClick={() => selectRecipe(recipeName)}>ADD</button></TableCell>
            <TableCell>{recipeItem.title}</TableCell>
            <TableCell><img src={recipeItem.image} width="50px" alt={`recipeItem.title`} /></TableCell>
            <TableCell>{<span dangerouslySetInnerHTML={{ __html: recipeItem.summary }}>
            </span>}</TableCell>
            <TableCell>Detail</TableCell>
        </TableRow >
    )
}

const RecipeTable = ({ recipeList, selectRecipe }) => {
    return (
        <TableContainer>

            <Table>
                <RecipeHeader />
                <TableBody>
                    {recipeList.map((recipeData) =>
                        <RecipeRows recipeItem={recipeData} selectRecipe={selectRecipe} />)}
                </TableBody>

            </Table>
        </TableContainer>

    )
}

export default RecipeTable