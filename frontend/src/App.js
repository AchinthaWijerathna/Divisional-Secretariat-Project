import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";



import EditRequest from "./components/Edit-Request.component";
import CreateRequest from "./components/Create-Request.component";
import RequestList from "./components/list-Request.component";
import report from "./components/report";
import home from "./components/Home";
import Requests from "./components/Request";
import contact from "./components/mailer";














import "./components/app.css";



function App() {

    return ( <Router >
        <div className = "container-fluid" >
        
       
        
        <Route path = "/" exact component = { RequestList }/>
        <Route path = "/edit/:id" component = { EditRequest }/> 
        <Route path = "/create" component = { CreateRequest }/> 
        <Route path = "/report"  component={ report } />
        <Route path = "/home" component={ home } />
        <Route path = "/agendas" component={ Requests } />
        <Route path = "/contact"  component={ contact } />
      


       
      
      
        
     
   
       
       
        </div > 
    

     </Router>

     
    );
}

export default App;