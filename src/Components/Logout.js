import React from 'react'
import Button from '@mui/material/Button';

export default function Logout({ setUser, setLoggedIn }) {
    function handleLogoutClick() {
      fetch("/logout", { method: "DELETE" }).then((res) => {
        if (res.ok) {
          setUser({});
          setLoggedIn(false)
        }
      });
    }

    return (
      <Button variant="contained" onClick={handleLogoutClick}>
        Logout
      </Button>
    );
}
