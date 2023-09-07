import React, { Component } from 'react';
import "./home.css";

import user1 from './images/user1.jpg';
import user2 from './images/user2.jpg';

export default class Home extends Component {

    render() {
        return ( 
           
            <div>
        <section className="header">
          <nav>

          
            
            <div className="nav-links" id="nav-links">
              <i className="fa fa-times" onclick="hideMenu()" />
              <ul>
                <li><a href="/home">HOME</a></li>
                <li><a href="/agendas">Request</a></li> 
                <li><a href="/contact">FeedBack</a></li>
                <li><a href="/">LOGIN</a></li>  
              </ul>
            </div>
            <i className="fa fa-bars" onclick="showMenu()" />
          </nav>
          <div className="text-box">
            <h1>Tell Us You'r Problem</h1>
            
            
          </div>
        </section>
        {/*  Events --------- */}
        <section className="Event">
          <h1 style={{marginLeft:'30px'}}>Request List</h1>
          <p>
                You can see the request already Added and And you can give Feeddback .<br/>
                
          </p>
          <div className="row" style={{marginLeft:'30px'}}>
            
            <div className="Event-col">
              <h3>Request List</h3> 
              <p>already Added REquest<br />
                 Read Request List<br />
                
              </p>	
            <a href="/agendas"><button type="button" class="btn btn-info btn-lg">See more</button></a>
            </div>
            
            <div className="Event-col">
              <h3>User Account</h3>
              <p>Go back to Account<br />
                 <br />
                
              </p>
              <a href="#"><button type="button" class="btn btn-info btn-lg">See more</button></a>	
            </div>
            <div className="Event-col">
              <h3>FeedBack</h3>
              <p>Get FeedBack List<br />
                 <br />
                
              </p>
              <a href="#"><button type="button" class="btn btn-info btn-lg">See more</button></a>	
            </div>
          </div>
        </section>
        {/* -------Testimonoals----- */}
        <section className="testimonoals">
          <h1 style={{marginLeft:'30px'}}>Feeddback List</h1>
          <p>Add FeedBack  that support one main idea.<br />
           </p>
          <div className="row" style={{marginLeft:'200px'}}>
            <div className="testimonoals-col">
            <img src={user1} alt="user1"/>
              
              <div>
                <p>
                  A paragraph is a self-contained unit of discourse in writing<br />
                  dealing with a particular point or idea. A paragraph consists of
                </p>
                <h3>MIS.Kumari Perera</h3>
                <i className="fa fa-star" />  
                <i className="fa fa-star" /> 
                <i className="fa fa-star" /> 
                <i className="fa fa-star" /> 
                <i className="fa fa-star-half-0" /> 
              </div>	
            </div>
            <div className="testimonoals-col">
            <img src={user2} alt="user1"/>
            
              <div>
                <p>
                  A paragraph is a self-contained unit of discourse in writing<br />
                  dealing with a particular point or idea. A paragraph consists of
                </p>
                <h3>MR.Gihan Dilshan</h3>
                <i className="fa fa-star" />  
                <i className="fa fa-star" /> 
                <i className="fa fa-star" /> 
                <i className="fa fa-star" /> 
                <i className="fa fa-star-half-0" /> 
              </div>	
            </div>
          </div>
          <section>
         
            {/* footer */}
            <section className="footerhome">
              
            
              <p>Made  <i className="fa fa-heart-o" /> by Kumaranigha I.M.K.B.G.J.D</p>
            </section>
          </section></section></div>
    
        );
    }
}