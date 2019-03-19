import React, {Component} from "react";

// material components
import {Grid} from "@material-ui/core";

import BlogList from "../blog/BlogList";
import SidebarWidgets from "./SidebarWidgets";

// connect app with redux store
import { connect } from 'react-redux';

import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Dashboard extends Component {
    render() {
        const { blog } = this.props;
        return (
            <div>
                <Grid container={true} spacing={24}>
                    <Grid item xs={8}>
                        <BlogList blog={blog}/>
                    </Grid>
                    <Grid item xs={4}>
                        <SidebarWidgets/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

// map redux store to props
const mapStateToProps = (state) => {
    // console.log( state.firestore.ordered.blog );
    return {
        blog: state.firestore.ordered.blog
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {
            collection: 'blog'
        }
    ])
)(Dashboard);
