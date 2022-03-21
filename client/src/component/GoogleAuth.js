import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn, signOut } from "../actions";
import Button from "@material-ui/core/Button";

function GoogleAuth() {
  const [auth, setAuth] = useState(null);

  const dispatch = useDispatch();
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);

  useEffect(() => {
    function handleAuthChange(isSignedIn) {
      if (isSignedIn) {
        dispatch(
          signIn(window.gapi.auth2.getAuthInstance().currentUser.get().getId())
        );
      } else {
        dispatch(
          signOut(window.gapi.auth2.getAuthInstance().currentUser.get().getId())
        );
      }
    }

    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "683580204463-4nfhg92lvh1hjefhsjqja8fp8n28a8q8.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          setAuth(window.gapi.auth2.getAuthInstance());
          handleAuthChange(
            window.gapi.auth2.getAuthInstance().isSignedIn.get()
          );
          window.gapi.auth2
            .getAuthInstance()
            .isSignedIn.listen(handleAuthChange);
        });
    });
  }, [dispatch]);

  const handleSignIn = () => {
    auth.signIn();
  };

  const handleSignOut = () => {
    auth.signOut();
  };

  const renderAuthButton = () => {
    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (
        <Button variant="contained" onClick={handleSignOut}>
          Sign Out
        </Button>
      );
    } else {
      return (
        <Button variant="contained" onClick={handleSignIn}>
          Sign In
        </Button>
      );
    }
  };

  return <>{renderAuthButton()}</>;
}

export default GoogleAuth;
