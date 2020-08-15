import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import RecipeSearch from './RecipeSearch'

const actionBar = makeStyles({
    utilityBar: {
        padding: '10px',
        display: 'flex',
        justifyContent: ' space-evenly',
    }

})

function ActionBar({ wklyRandomRecipe, clearRecipeLineUp }) {
    const [isOpen, setIsOpen] = useState(false)
    const classes = actionBar()

    return (
        <div className={classes.utilityBar}>
            <Button variant="contained" color="primary" onClick={wklyRandomRecipe}>Random</Button>
            <Button variant="contained" onClick={() => setIsOpen(!isOpen)}>Search</Button>
            <Button variant="contained" color="secondary" onClick={clearRecipeLineUp}>Clear</Button>
            {isOpen ? <RecipeSearch /> : null}
        </div>
    )
}

export default ActionBar