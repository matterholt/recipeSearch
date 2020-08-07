import React from 'react'
import RecipeCard from './RecipeCard'
import NoItem from './NoItem'

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'center'
    },
}));

function RandomRecipeContainer({ recipeList }) {
    const classes = useStyles();
    if (recipeList.length !== 0) {
        return (
            <Grid spacing={2} className={classes.root}>
                {recipeList.map((recipeInfo) => <RecipeCard recipeInfo={recipeInfo} />)}
            </Grid>

        )
    } else {
        return <NoItem />
    }
}
export default RandomRecipeContainer




