import React from "react";

import { connect } from 'react-redux';
import { compose } from 'redux';

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
    const { classes, auth } = props;

    console.log( 'navbbar auth', auth );

    let links = auth.uid ? <SignedInLinks/> : <SignedOutLinks/>;

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.mainWrap}>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        React FireBlog
                    </Typography>
                    { links }
                </Toolbar>
            </AppBar>
        </div>
    );
};

const mapStateToProps = ( state ) => {
    console.log('navbar state', state );

    return {
        auth: state.firebase.auth
    }
}

export default compose(
    withStyles(styles),
    connect(mapStateToProps)
)(Navbar);
