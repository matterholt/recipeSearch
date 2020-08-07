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

export default function RecipeCard({ recipeInfo, selectRecipe }) {
    const classes = useStyles();

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
                        <span dangerouslySetInnerHTML={{ __html: recipeInfo.summary }} />
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={selectRecipe}>
                    ADD
        </Button>
                <Button size="small" color="primary" onClick={saveForLater}>
                    SAVE
        </Button>

                <Button size="small" color="primary">
                    DETAILS
        </Button>
            </CardActions>
        </Card >
    );
}
