import React from 'react'
import NavBar from './NavBar.js'

export default function TopBar({ setUser }) {
    return (
        <>
            <NavBar setUser={setUser}/>
            <div>
                Welcome to Whisker Watchers
            </div>
        </>
    )
}
