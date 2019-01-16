import React from 'react';

import {
    List,
    ListItem,
    ListItemText,
    Avatar,
    withStyles,
} from '@material-ui/core';

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    },
});

const WidgetRecentPosts = ( { classes } ) => {
    return (
        <List className={classes.root}>
            <ListItem>
                <Avatar>
                    A
                </Avatar>
                <ListItemText primary="Hello World post 1" secondary="Jan 9, 2014" />
            </ListItem>
            <ListItem>
                <Avatar>
                    S
                </Avatar>
                <ListItemText primary="Hello World post 2" secondary="Jan 7, 2014" />
            </ListItem>
            <ListItem>
                <Avatar>
                    AS
                </Avatar>
                <ListItemText primary="Hello World post 3" secondary="July 20, 2014" />
            </ListItem>
        </List>
    );
}

export default withStyles(styles)(WidgetRecentPosts);