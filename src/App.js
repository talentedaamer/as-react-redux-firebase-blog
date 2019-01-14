import React, {Component} from "react";

// react router
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {
    withStyles
} from '@material-ui/core';

// components
import Navbar from "./components/layout/Navbar";
import Dashboard from './components/dashboard/Dashboard';
import PostDetails from './components/blog/PostDetails';
import Footer from './components/layout/Footer';
// auth components
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

const styles = theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
});

class App extends Component {

    render() {

        const { classes } = this.props;

        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar/>

                    <div className={classes.layout}>
                        <Switch>
                            <Route exact path="/" component={Dashboard}/>
                            <Route path="/post/:id" component={PostDetails}/>
                            <Route path="/signin" component={SignIn}/>
                            <Route path="/signup" component={SignUp}/>
                        </Switch>
                    </div>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}

export default withStyles(styles)(App);
