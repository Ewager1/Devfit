import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button as BootstrapButton } from "react-bootstrap";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <BootstrapButton
      className="btn-red"
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      Log Out
    </BootstrapButton>
  );
};

export default LogoutButton;