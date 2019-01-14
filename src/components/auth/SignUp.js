import React from 'react';
import {
    Paper,
    withStyles,
    Grid,
    TextField,
    Button,
} from '@material-ui/core';

import {Face, Email, Lock} from '@material-ui/icons'

const styles = theme => ({
    loginCard: {
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

class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
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
        console.log(this.state);
    }

    render() {
        const {classes} = this.props;
        return (
            <Paper className={classes.loginCard}>
                <form onSubmit={this.handleSubmit}>
                    <Grid container spacing={8} alignItems="flex-end" className={classes.inputWrap}>
                        <Grid item>
                            <Face/>
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField onChange={this.handleChange} id="firstname" label="First Name" type="text" fullWidth
                                       autoFocus required/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end" className={classes.inputWrap}>
                        <Grid item>
                            <Face/>
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField onChange={this.handleChange} id="lastname" label="Last Name" type="text" fullWidth
                                       autoFocus required/>
                        </Grid>
                    </Grid>
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
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField onChange={this.handleChange} id="password" label="Password" type="password"
                                       fullWidth required/>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" style={{marginTop: '10px'}}>
                        <Button type="submit" variant="outlined" color="primary"
                                style={{textTransform: "none"}}>Sign Up</Button>
                    </Grid>
                </form>
            </Paper>
        );
    }
}

export default withStyles(styles)(SignUp);