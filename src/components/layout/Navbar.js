import React from "react";

import {
    Typography,
    Toolbar,
    AppBar,
    withStyles,
} from "@material-ui/core";

import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const styles = theme => ({
    mainWrap: {
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    root: {
        flexGrow: 1,
        marginBottom: theme.spacing.unit * 8
    },
    grow: {
        flexGrow: 1
    }
});

const Navbar = (props) => {

    const { classes } = props;

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.mainWrap}>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        React FireBlog
                    </Typography>
                    <SignedOutLinks/>
                    <SignedInLinks/>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default withStyles(styles)(Navbar);
