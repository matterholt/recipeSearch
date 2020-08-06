import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const RecipeHeader = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell>Add</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Summary</TableCell>
            </TableRow>
        </TableHead>
    )
}

const RecipeRows = ({ recipeItem, selectRecipe }) => {
    const recipeName = { title: recipeItem.title, id: recipeItem.id }

    return (
        <TableRow>
            <TableCell><button onClick={() => selectRecipe(recipeName)}>ADD</button></TableCell>
            <TableCell>{recipeItem.title}</TableCell>
            <TableCell><img src={recipeItem.image} width="50px" alt='food cook in recipe' /></TableCell>
            <TableCell>{<span dangerouslySetInnerHTML={{ __html: recipeItem.summary }}>
            </span>}</TableCell>
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