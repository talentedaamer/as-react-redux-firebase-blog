import React from "react";

// import layout components
import {
    Card,
    CardHeader,
    CardContent,
    Typography,
} from '@material-ui/core';

const styles = {
    card: {
        marginBottom: 24,
    }
};

const BlogSummary = () => {

    return (
        <Card style={styles.card}>
            <CardHeader
                // avatar={
                //     <Avatar aria-label="Recipe">
                //         A
                //     </Avatar>
                // }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />
            <CardContent>
                <Typography component="p">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fuga ipsa itaque iure maiores molestias necessitatibus nulla omnis porro, quidem quisquam, suscipit, voluptatibus? Aliquam delectus error nisi non quia quisquam.
                </Typography>
            </CardContent>
        </Card>
    );
};

export default BlogSummary;
