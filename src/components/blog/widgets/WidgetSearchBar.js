import React from 'react';

import {
    FormControl,
    Input,
    InputAdornment,
    withStyles,
} from '@material-ui/core';

import {
    Search
} from '@material-ui/icons';

const styles = theme => ({});

const WidgetSearchBar = ({classes}) => {
    return (
        <div>
            <FormControl fullWidth>
                <Input
                    id="adornment-amount"
                    startAdornment={
                        <InputAdornment position="start">
                            <Search />
                        </InputAdornment>
                    }
                />
            </FormControl>
        </div>
    )
}

export default withStyles(styles)(WidgetSearchBar);