import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const SignupButton = () => {

  const { loginWithRedirect } = useAuth0();

  return (
        <button className="btn btn-outline-dark ms-2"
        onClick={() =>
            loginWithRedirect({
            screen_hint: 'signup',
            })
        }
        ><i className="fa fa-user-plus me-1"></i>
        Sign Up
        </button>
  );
};

export default SignupButton;