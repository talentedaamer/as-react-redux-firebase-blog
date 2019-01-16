import React from "react";

import {
    Card,
    CardContent,
    Typography,
    withStyles,
} from '@material-ui/core';

// widgets
import WidgetRecentPosts from '../blog/widgets/WidgetRecentPosts';
import WidgetSearchBar from '../blog/widgets/WidgetSearchBar';

const styles = theme => ({
    card: {
        marginBottom: theme.spacing.unit * 4,
        padding: theme.spacing.unit * 2,
    },
    widgetTitle: {
        marginBottom: theme.spacing.unit * 2,
    },
})

const SidebarWidgets = ( { classes } ) => {
    return (
        <div className="widgets-wrap">

            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.widgetTitle} variant="h6" component="h3">Search Blog</Typography>
                    <WidgetSearchBar/>
                </CardContent>
            </Card>

            <Card className={classes.card}>
                <WidgetRecentPosts/>
            </Card>
        </div>
    );
};

export default withStyles(styles)(SidebarWidgets);
