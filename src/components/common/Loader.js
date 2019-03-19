import React from "react";

import { CircularProgress } from '@material-ui/core';

const Loader = () => {
    return (
        <div>
            <CircularProgress disableShrink/>
        </div>
    );
};

export default Loader;