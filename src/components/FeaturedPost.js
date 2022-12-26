import { Button, Card, CardActions, CardContent, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    title: {
        fontSize:40,
        fontFamily: "Montsrrat"
    },
    cover:{
        backgroundImage: `url(https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=900&t=st=1671802466~exp=1671803066~hmac=f7416442063a34b39c70b19a168a7db0311bbc94b39438312c478b0685c0d9c6)`,
        backgroundPosition:"center",
        padding: "35px 25px",
    },
})

const FeaturedPost = () => {
    const classes = useStyles();
  return (
    <Card className={classes.cover}>
        <CardContent className={classes.textContainer}>
            <Typography className={classes.title} gutterBottom>Title of a longer featured blog post</Typography>
            <Typography variant='h5'>
                Multiple lines of text that form the lede, informing new readers quickly and efficiently 
                about what's most interesting in this post's content.
            </Typography>
        </CardContent>
        
        <CardActions>
            <Button variant='text' className={classes.btn}>
                Read More...
            </Button>
        </CardActions>
    </Card>
  )
}

export default FeaturedPost