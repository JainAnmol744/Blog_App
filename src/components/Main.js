import { Divider, Grid, Typography } from '@material-ui/core'
import Markdown from 'markdown-to-jsx'
import React from 'react'
import { posts } from '../Data/Data'

const Main = ({title}) => {
  return (
    <Grid item xs={12} md={8}>
        <Typography variant='h5' gutterBottom>
            {title}
        </Typography>
        <Divider/>
        {
            posts.map((post) =>(
                <Markdown key={post.body}>{post.body}</Markdown>
            ))
        }
    </Grid>
  )
}

export default Main