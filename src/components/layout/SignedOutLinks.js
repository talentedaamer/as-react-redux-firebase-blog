import React from "react";
import { Link } from "react-router-dom";

import { Button } from "@material-ui/core";

const SignUpLink = props => <Link to="/signup" {...props} />
const SignInLink = props => <Link to="/signin" {...props} />

const SignedOutLinks = () => {
  return (
    <div>
      <Button component={SignUpLink} color="inherit">
        Sign Up
      </Button>
      <Button component={SignInLink} color="inherit">
        Sign In
      </Button>
    </div>
  );
};

export default SignedOutLinks;
