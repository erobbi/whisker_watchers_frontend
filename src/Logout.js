import React from 'react'
import Button from "@mui/material/Button";

function Logout({setUser}) {
    function handleLogoutClick() {
        fetch("/logout", {method: "DELETE"}).then((res) => {
            if (res.ok) {
                setUser({})                    
            }
    })
}

    return (
    <Button variant="contained" onClick={handleLogoutClick}>Logout</Button>
    )
}

export default Logout
