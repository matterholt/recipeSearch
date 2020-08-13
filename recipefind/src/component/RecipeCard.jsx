import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: '8px'
    },
    media: {
        height: 140,
    },
});

export default function RecipeCard({ recipeInfo, selectRecipe, saveForLater, removeItem }) {
    const selectedRecipe = { title: recipeInfo.title, id: recipeInfo.id }
    const classes = useStyles();


    function shortDescription() {
        // try to make it with closures
        // should check the word count not letter count
        const wordCount = 25
        const shortenSummary = recipeInfo.summary

        return function getShortenDescript(str) {

        }
    }


    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={recipeInfo.image}
                    title="food from recipe"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {recipeInfo.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <span dangerouslySetInnerHTML={{ __html: recipeInfo.summary.substr(0, 150) + '...' }} />
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={() => selectRecipe(selectedRecipe)}>ADD</Button>
                <Button size="small" color="primary" onClick={() => removeItem(selectedRecipe)}>DELETE</Button>
                <Button size="small" color="primary">DETAILS</Button>
            </CardActions>
        </Card >
    );
}
