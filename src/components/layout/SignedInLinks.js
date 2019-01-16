import React from "react";
import {Link} from "react-router-dom";

import {
    Button,
    withStyles,
} from "@material-ui/core";

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    }
});

const NewPostLink = props => <Link to="/create-post" {...props} />

const SignedInLinks = ({classes}) => {
    return (
        <div>
            <Button component={NewPostLink} className={classes.button} variant="contained" color="secondary" size="small">
                New Post
            </Button>
            <Button className={classes.button} color="inherit" size="small">
                Logout
            </Button>
        </div>
    );
};

export default withStyles(styles)(SignedInLinks);
