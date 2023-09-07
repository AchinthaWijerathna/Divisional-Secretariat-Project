import React, { Component } from 'react';
import "./Request.css";


import axios from 'axios';

export default class RequestList extends Component {
    constructor(props) {
        super(props);


        this.state = {
            Request: []
        };
    }


    componentDidMount() {
        axios.get('http://localhost:5000/Request/')
            .then(response => {
                this.setState({ Request: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    getPosts() {
        axios.get('http://localhost:5000/Request/')
            .then(response => {
                this.setState({ Request: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (

            
       <div className='container-fluid'>
            
             <div className='header2'>
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
        <h1>Approved RequestList </h1>

             </div>

             <div className='tablecontent'> 
                 <table  table class="table table-bordered">
                 <thead className = "thead-light" >
                <tr >
                   <th > Requestname </th> 
                   <th > nic </th> 
                   <th > contacnumber </th>
                   <th> problem Topic </th> 
                   <th> problem  </th> 
                  
                 </tr >
            </thead> <tbody > {this.state.Request.map(props =>
                    <tr key = { props.Requestname } >
                    <td > { props.Requestname } </td> 
                    <td > { props.nic } </td> 
                    <td > { props.contacnumber } </td> 
                    < td > { props.problemTopic } </td>
                    < td > { props.problem } </td>
                   
                   <td> 
                   <div className="container">
                     <a className="btn btn-success" href={ "/contact/" + props._id }>
                      <i class="fa fa-pencil-square-o"></i>&nbsp;Add FeedBack</a>  &nbsp; </div>
                   </td>
                     </tr>)

            }

            </tbody> </table >
           
            
            </div>


           
            
           <section className="footer2">
                  <h4>About US</h4>
	              <p>A paragraph is a self-contained unit of discourse in writing dealing</p>
	              
	 
	         <p>Made with <i class="fa fa-heart-o"></i> by Kumaranigha I.M.K.B.G.J.D</p>
           </section>

    </div>


      


        )
    }
}