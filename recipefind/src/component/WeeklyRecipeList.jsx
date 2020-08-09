import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
    Container: {
        display: 'flex',
        width: '100vw',
        margin: '5px',
        fontSize: '12px',
        backgroundColor: 'white',
        color: 'black',
    },
    selectedRecipes: {
        margin: '25px',
        background: 'gray',
        color: 'white',
        padding: '15px',
        borderRadius: '5px',
    }

})

const WeeklyRecipeList = ({ choosenRecipes }) => {
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
            {daily.map((dayEntry, index) =>
                <div key={index} className={weeklyRecipe.selectedRecipes}>
                    <h3>{dayEntry.day}</h3>
                    <div key={index}>
                        {choosenRecipes[index] ? <CardHeader title={choosenRecipes[index].title} /> : "no plans"}
                        <button>Recipe</button>
                    </div>
                </div>
            )}
        </div>
    )
}
export default WeeklyRecipeList