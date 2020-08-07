import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/core/styles';


const useTableStyle = makeStyles({
    tableContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: ' 100vw',
    },
    table: {
        width: '90vw',
        backgroundColor: '#f6f6f6',
    },
    header: {
        textAlign: 'center',
        fontWeight: "900",
        backgroundColor: 'gray',
    }
})

const RecipeHeader = () => {
    const classes = useTableStyle()
    return (
        <TableHead className={classes.header}>
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
    const classes = useTableStyle()
    return (
        <TableContainer className={classes.tableContainer} >
            <Table className={classes.table}>
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