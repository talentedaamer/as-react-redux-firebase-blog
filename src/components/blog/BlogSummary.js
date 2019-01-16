import React from "react";

// import layout components
import {
    Card,
    CardContent,
    Typography,
    withStyles,
} from '@material-ui/core';

const styles = theme => ({
    card: {
        marginBottom: theme.spacing.unit * 4,
        padding: theme.spacing.unit * 2,
    },
    postHeader: {
        marginBottom: theme.spacing.unit * 2,
    },
});

const BlogSummary = ( { classes, post } ) => {

    return (
        <Card className={classes.card}>
            <CardContent>
                <div className={classes.postHeader}>
                    <Typography variant="h6" component="h1">{post.postTitle}</Typography>
                    <Typography color="textSecondary" component="p">{post.postDate.toDateString()} - by Aamer</Typography>
                </div>

                <Typography component="p">{post.postContent}</Typography>
            </CardContent>
        </Card>
    );
};

export default withStyles(styles)(BlogSummary);
