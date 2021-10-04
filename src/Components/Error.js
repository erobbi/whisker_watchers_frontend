import React from 'react'
import maxcat from '../Images/max_portrait.png'
export default function Error() {
    return (
      <div className="errorPage">
        <h1>Error! Page not found.</h1>
          <img src={maxcat} style={{height: "100px"}}/>
      </div>
    );
}
