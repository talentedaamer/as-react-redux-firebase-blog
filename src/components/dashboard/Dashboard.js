import React, {Component} from "react";

// material components
import {Grid} from "@material-ui/core";

import BlogList from "../blog/BlogList";
import SidebarWidgets from "./SidebarWidgets";

// connect app with redux store
import { connect } from 'react-redux';

class Dashboard extends Component {
    render() {

        const { blog } = this.props;

        console.log( 'dashboard blog ', blog );

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
    return {
        blog: state.blog.posts
    }
}

export default connect(mapStateToProps)(Dashboard);
