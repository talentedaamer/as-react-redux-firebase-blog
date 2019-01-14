import React from "react";
import { Link } from "react-router-dom";

import { Button } from "@material-ui/core";

const SignedOutLinks = () => {
  return (
    <div>
      <Button component={Link} to="/" color="inherit">
        Sign Up
      </Button>
      <Button component={Link} to="/" color="inherit">
        Sign In
      </Button>
    </div>
  );
};

export default SignedOutLinks;
