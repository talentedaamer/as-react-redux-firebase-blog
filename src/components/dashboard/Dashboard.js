import React, {Component} from "react";

// material components
import {Grid} from "@material-ui/core";

import BlogList from "../blog/BlogList";
import SidebarWidgets from "./SidebarWidgets";

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Grid container={true} spacing={24}>
                    <Grid item xs={8}>
                        <BlogList/>
                    </Grid>
                    <Grid item xs={4}>
                        <SidebarWidgets/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Dashboard;
