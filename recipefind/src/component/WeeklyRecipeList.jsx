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
        fontSize: '12px'
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
                <div key={index}>
                    <h3>{dayEntry.day}</h3>
                    <Card key={index}>
                        <CardContent>
                            {choosenRecipes[index] ? <CardHeader title={choosenRecipes[index].title} /> : "no plans"}
                        </CardContent>
                    </Card>
                </div>
            )}
        </div>
    )
}
export default WeeklyRecipeList