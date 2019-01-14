import React from "react";

// import layout components
import {
    Grid,
    Card,
    CardHeader,
    CardContent,
    Typography,
} from '@material-ui/core';

import SidebarWidgets from '../dashboard/SidebarWidgets';

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
    }
};

const PostDetails = ( props ) => {

    const { id } = props.match.params;

    return (
        <div style={styles.root}>
            <Grid container={true} spacing={24}>
                <Grid item xs={8}>

                    <Card style={styles.card}>
                        <CardHeader
                            // avatar={
                            //     <Avatar aria-label="Recipe">
                            //         A
                            //     </Avatar>
                            // }
                            title="Shrimp and Chorizo Paella `{id}`"
                            subheader="September 14, 2016"
                        />
                        <CardContent>
                            <Typography component="p">
                                { id }
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fuga ipsa itaque iure maiores molestias necessitatibus nulla omnis porro, quidem quisquam, suscipit, voluptatibus? Aliquam delectus error nisi non quia quisquam.
                            </Typography>

                            <Typography component="p">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fuga ipsa itaque iure maiores molestias necessitatibus nulla omnis porro, quidem quisquam, suscipit, voluptatibus? Aliquam delectus error nisi non quia quisquam.
                            </Typography>

                            <Typography component="p">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fuga ipsa itaque iure maiores molestias necessitatibus nulla omnis porro, quidem quisquam, suscipit, voluptatibus? Aliquam delectus error nisi non quia quisquam.
                            </Typography>

                            <Typography component="p">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fuga ipsa itaque iure maiores molestias necessitatibus nulla omnis porro, quidem quisquam, suscipit, voluptatibus? Aliquam delectus error nisi non quia quisquam.
                            </Typography>
                        </CardContent>
                    </Card>

                </Grid>
                <Grid item xs={4}>
                    <SidebarWidgets/>
                </Grid>
            </Grid>
        </div>
    );
};

export default PostDetails;
