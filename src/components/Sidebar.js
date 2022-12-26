import { Paper, Grid, Typography, Link, makeStyles } from '@material-ui/core'
import React from 'react'


const useStyles = makeStyles((theme) => ({
    sidebarAboutBox: {
      padding: theme.spacing(2),
    },
    sidebarSection: {
      marginTop: theme.spacing(3),
    },
  }));

const Sidebar = ({archives, description, title, social}) => {
    const classes= useStyles();
  return (
    <Grid item xs ={12} md={4}>
        <Paper elevation={0} className={classes.sidebarAboutBox}>
            <Typography variant='h6' gutterBottom>{title}</Typography> 
            <Typography>{description}</Typography> 
        </Paper>

        <Typography variant='h6' gutterBottom className={classes.sidebarSection}>Archives</Typography>
        {archives.map((post)=>(
            <Link display="block" varaint="body1" href={post.url} key={post.title}>{post.title}
                </Link>
        ))} 
        <Typography variant='h6' gutterBottom className={classes.sidebarSection}>Social</Typography>
        {social.map((soc)=>(
            <Link display="block" varaint="body1" href= '#' key={soc.name}>
                <Grid container direction="row" spacing={1} alignItems="center">
            <Grid item>
              <soc.icon />
            </Grid>
            <Grid item>{soc.name}</Grid>
          </Grid>
            </Link>
        ))}
    </Grid>
  )
}

export default Sidebar