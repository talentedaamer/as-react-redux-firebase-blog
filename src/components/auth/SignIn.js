import React from 'react';

import { signIn } from '../../store/actions/AuthActions';

import {
    Paper,
    withStyles,
    Grid,
    TextField,
    Button,
    // FormControlLabel,
    // Checkbox
} from '@material-ui/core';

import {Email, Lock} from '@material-ui/icons'

import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

const styles = theme => ({
    signupCard: {
        marginTop: theme.spacing.unit * 8,
        padding: `${theme.spacing.unit * 4}px ${theme.spacing.unit * 4}px`,
        [theme.breakpoints.up(600 + theme.spacing.unit * 8 * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    inputWrap: {
        marginBottom: theme.spacing.unit * 2
    }
});

class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        // console.log(this.props);
        this.props.signIn( this.state );
    }

    render() {
        const { classes, auth, authError } = this.props;

        if ( auth.uid ) {
            return <Redirect to={'/'} />
        }

        return (
            <Paper className={classes.signupCard}>
                <form onSubmit={this.handleSubmit}>
                    <Grid container spacing={8} alignItems="flex-end" className={classes.inputWrap}>
                        <Grid item>
                            <Email/>
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField onChange={this.handleChange} id="email" label="Email" type="email" fullWidth
                                       autoFocus required/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end" className={classes.inputWrap}>
                        <Grid item>
                            <Lock/>
                        </Grid>
                        <Grid item md={true} sm={true} xs={true} className={classes.inputWrap}>
                            <TextField onChange={this.handleChange} id="password" label="Password" type="password"
                                       fullWidth required/>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" className={classes.inputWrap}>
                        <Button type="submit" variant="outlined" color="primary"
                                style={{textTransform: "none"}}>Sign In</Button>
                    </Grid>

                    {/* display message */}
                    { authError ? <p>{authError}</p> : null }
                </form>
            </Paper>
        );
    }
}

const mapStateToProps = ( state ) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth,
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}


export default compose(
    withStyles(styles),
    connect( mapStateToProps, mapDispatchToProps)
)(SignIn);