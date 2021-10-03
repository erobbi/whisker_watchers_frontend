import React from 'react'
import potatoes from "../Images/potatoes.jpg";

export default function Footer() {
    return (
      <footer className="footer">
        <div className="footer_content">
          <div className="footer_columns">
            <div className="footer_column_each">
              <div className="logo">Whisker Watchers</div>
            </div>
            <div className="footer_column_each">
              <div>Developed by Eli Robbins © 2021</div>
            </div>
            <div className="footer_column_each">
              <img
                src={potatoes}
                alt="dedicated to the potatoes"
                className="potatoes"
              ></img>
            </div>
          </div>
        </div>
      </footer>
    );
}
