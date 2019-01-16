import React from 'react';

// material ui components
import {
    withStyles,
    Typography
} from '@material-ui/core';

import { grey } from '@material-ui/core/colors';

const styles = theme => ({
    footer: {
        backgroundColor: grey[100],
        marginTop: theme.spacing.unit * 8,
        padding: `${theme.spacing.unit * 4}px 0`,
    },
});

const Footer = ( props ) => {

    const { classes } = props;

    return (
        <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
                React, Redux, Firebase Blog
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Cool Blog Created with React, Redux and Firebase.
            </Typography>
        </footer>
    )
}

export default withStyles(styles)(Footer);