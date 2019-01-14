import React from "react";
import { Link } from "react-router-dom";

import { Button, IconButton } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";

const SignedInLinks = () => {
  return (
    <div>
        <Button component={Link} to="/" variant="outlined" color="inherit" size="small">
        New Post
      </Button>
      <Button component={Link} to="/" variant="outlined" color="inherit" size="small">
        Logout
      </Button>
      {/*<IconButton*/}
        {/*aria-haspopup="true"*/}
        {/*// onClick={this.handleMenu}*/}
        {/*color="inherit"*/}
      {/*>*/}
        {/*<AccountCircle />*/}
      {/*</IconButton>*/}
    </div>
  );
};

export default SignedInLinks;
