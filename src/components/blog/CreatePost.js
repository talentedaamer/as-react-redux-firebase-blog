import React from 'react';
import {
    Paper,
    withStyles,
    Grid,
    TextField,
    Button,
} from '@material-ui/core';

import createBlogPost from '../../store/actions/blogActions';

import { connect } from 'react-redux';

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

class CreatePost extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            postTitle: '',
            postContent: '',
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
        // console.log(this.state);
        this.props.createBlogPost(this.state);
    }

    render() {
        const {classes} = this.props;
        return (
            <Paper className={classes.loginCard}>
                <form onSubmit={this.handleSubmit}>
                    <Grid container alignItems="flex-end" className={classes.inputWrap}>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField onChange={this.handleChange} id="postTitle" label="Post Title" type="text" fullWidth autoFocus required/>
                        </Grid>
                    </Grid>
                    <Grid container alignItems="flex-end" className={classes.inputWrap}>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField onChange={this.handleChange} id="postContent" label="Post Content" type="text" fullWidth
                                       autoFocus required/>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" style={{marginTop: '10px'}}>
                        <Button type="submit" variant="outlined" color="primary" style={{textTransform: "none"}}>Create Post</Button>
                    </Grid>
                </form>
            </Paper>
        );
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        createBlogPost: ( post ) => {
            dispatch( createBlogPost(post) )
        }
    }
}
export default connect(null, mapDispatchToProps)(withStyles(styles)(CreatePost));