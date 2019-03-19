import React from "react";

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

// import layout components
import {
    Grid,
    Card,
    CardHeader,
    CardContent,
    Typography,
} from '@material-ui/core';

import SidebarWidgets from '../dashboard/SidebarWidgets';
import Loader from '../common/Loader';

const styles = {
    root: {
        flexGrow: 1,
        marginTop: 40,
        marginBottom: 40,
        maxWidth: 1100,
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 20
    },
    card: {
        marginBottom: 24,
    },
    loader: {
        display: 'flex',
        alignItems: 'center',
    }
};

const PostDetails = ( props ) => {
    const { post } = props;

    let showPost;
    if ( post ) {
        showPost = (
            <Card style={styles.card}>
                <CardHeader
                    title={post.postTitle}
                    subheader="September 14, 2016"
                />
                <CardContent>
                    <Typography component="p">
                        { post.postContent }
                    </Typography>
                </CardContent>
            </Card>
        )
    } else {
        showPost = (
            <Loader/>
        )
    }

    return (
        <div style={styles.root}>
            <Grid container={true} spacing={24}>
                <Grid item xs={8}>
                    { showPost }
                </Grid>
                <Grid item xs={4}>
                    <SidebarWidgets/>
                </Grid>
            </Grid>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    const { id } = ownProps.match.params;
    const blog = state.firestore.data.blog;
    const post = blog ? blog[id] : null;
    return {
        post: post
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {
            collection: 'blog'
        }
    ])
)(PostDetails);
