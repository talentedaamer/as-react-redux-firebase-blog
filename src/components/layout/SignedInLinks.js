import React, {Component} from "react";
import {Link} from "react-router-dom";

import {
    withStyles,
    Menu, MenuItem,
    IconButton,
} from "@material-ui/core";

import {
    AccountCircle,
} from '@material-ui/icons'

import { connect } from 'react-redux';
import { compose } from 'redux';
import { signOut } from '../../store/actions/AuthActions';


const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    }
});

const NewPostLink = props => <Link to="/create-post" {...props} />

class SignedInLinks extends Component {

    constructor(props) {
        super(props)

        this.state = {
            anchorEl: null
        }

        this.handleMenu = this.handleMenu.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };


    render() {
        const {signOut} = this.props;

        const { anchorEl } = this.state;

        const open = Boolean(anchorEl);

        return (
            <div>
                <IconButton
                    aria-owns={ open ? 'menu-appbar' : undefined }
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    color="inherit"
                >
                    <AccountCircle/>
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={open}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={this.handleClose} component={NewPostLink}>Create New Post</MenuItem>
                    <MenuItem onClick={signOut}>Sign Out</MenuItem>
                </Menu>
            </div>
        );
    }
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        signOut: () => dispatch( signOut() )
    }
}

export default compose(
    withStyles(styles),
    connect( null, mapDispatchToProps),
)(SignedInLinks);
