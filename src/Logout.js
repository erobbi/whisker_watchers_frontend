import React from 'react'

function Logout({setUser}) {
    function handleLogoutClick() {
        fetch("/logout", {method: "DELETE"}).then((res) => {
            if (res.ok) {
                setUser({})                    
            }
    })
}

    return (<button onClick={handleLogoutClick}>Log Out</button>)
}

export default Logout
