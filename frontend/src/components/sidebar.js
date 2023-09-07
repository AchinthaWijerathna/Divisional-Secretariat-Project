import React, { Component } from 'react';
import "./admin.css";

export default class Sidebar extends Component {

    render() {
        return ( 
        
          <div className="sidebar">
          <div className="logo-details">
          <i className="bx bxl-postgresql" />
          
            <span className="logo_name">Request</span>
          </div>
          <ul className="nav-links">
            <li>
              <a href="/">
                <i className="bx bx-grid-alt" />
                <span className="links_name">Request List</span>
              </a>
            </li>
          
            <li className="log_out">
              <a href="/home">
                <i className="bx bx-log-out" />
                <span className="links_name">Log out</span>
              </a>
            </li>
          </ul>
        </div>
     
            




        );
    }
}