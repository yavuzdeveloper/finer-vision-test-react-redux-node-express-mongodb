import React from 'react';
import { Card, CardMedia, Typography } from '@material-ui/core';

import useStyles from './styles';


const Post = (post) => {
    const classes = useStyles();

    return(
        <Card className={classes.card}>
            <CardMedia className={classes.media}/>
            <div className={classes.overlay}>
                <Typography variant="h6">User information</Typography>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary" component="h2">First Name: {post.post.firstName}</Typography>
                <Typography variant="body2" color="textSecondary" component="h2">Surname: {post.post.surName}</Typography>
                <Typography variant="body2" color="textSecondary" component="h2">Email Address: {post.post.email}</Typography>
                <Typography variant="body2" color="textSecondary" component="h2">Telephone number: {post.post.telephoneNumber}</Typography>
                <Typography variant="body2" color="textSecondary" component="h2">Gender: {post.post.gender}</Typography>
                <Typography variant="body2" color="textSecondary" component="h2">Date of birth: {post.post.dateOfBirth}</Typography>
                <Typography variant="body2" color="textSecondary" component="h2">Comments: {post.post.comments}</Typography>
            </div>
        </Card>
    );
}

export default Post;