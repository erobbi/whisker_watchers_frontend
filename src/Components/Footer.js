import React from "react";
import { Link } from 'react-router-dom'
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
            <h3>Developed by Eli Robbins © 2021</h3>
          </div>
          <div className="footer_column_each">
            <Link to="/potatoesForever">
              <img
                src={potatoes}
                alt="dedicated to the potatoes"
                className="potatoes"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
