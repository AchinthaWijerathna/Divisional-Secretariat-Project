import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import "./admin.css";
import myprofile from './images/my.jpg';

import Sidebar from "./sidebar";







const Request = props => ( <tr >
    <td > { props.Request.Requestname } </td> 
    <td > { props.Request.nic } </td>
    <td > { props.Request.name } </td>
    <td > { props.Request.contacnumber } </td> 
    <td > { props.Request.problemTopic } </td> 
    <td > { props.Request.problem } </td>
    <td > { props.Request.address } </td>

  
    <td ><Link to = { "/mailer/" + props.Request._id } > Feedback </Link> |<Link to = { "/edit/" + props.Request._id } > Edit </Link> | <a href=" " onClick={() => { props.deleteRequest(props.TimeTable._id) }}>Delete</a > </td > 
    </tr> 
)

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


    deleteRequest(id) {
        if (window.confirm("Are you sure?")) {
            axios.delete("http://localhost:5000/Request/" + id).then((response) => {
                console.log(response.data);
            });

            this.setState({
                Request: this.state.Request.filter((el) => el._id !== id),
            });
        }
    }


    RequestList() {
        return this.state.Request.map(currentRequest => {
            return <Request Request = { currentRequest }
            deleteRequest = { this.deleteRequest }
            key = { currentRequest._id }
            />;
        })
    }

    //Search

    handleSearchArea = (e) => {

        const searchKey = e.currentTarget.value;

        axios.get('http://localhost:5000/Request/').then(response => {


            const resultt = response.data
            const result = resultt.filter((props) =>
                props.Requestname.includes(searchKey)
            )

            this.setState({ Request: result })

        });

    }

    

    render() {return (
         <div className = "container-fluid" >
            
            <div>
              <Sidebar/>
             </div>
             
             <section className="home-section">
              
             <nav>
                <div className="sidebar-button">
                  <i className="bx bx-menu sidebarBtn" />
                  <span className="dashboard">Request</span>
                </div>
                <div className="search-box">
                  <input type="text" placeholder="Search..." onChange = { this.handleSearchArea }></input>
                  <i className="bx bx-search" />
                </div>
                <div className="profile-details">
                  <img src={myprofile} alt="myprofile"/>
                  <span className="admin_name">Kumaranigha</span>
                  <i className="bx bx-chevron-down" />
                </div>
              </nav>

              <div className='tablecontent'> 
                 <table  table class="table table-bordered">
                 <thead className = "thead-light" >
                <tr >
                   <th > Name </th> 
                   <th > nic </th> 
                   <th > contacnumber </th>
                   <th> problemTopic </th> 
                   <th> problem </th>
                   <th> Date </th> 
                   < th >  Action </th> 
                 </tr >
            </thead> <tbody > {this.state.Request.map(props =>
                    <tr key = { props.Requestname } >
                    <td > { props.Requestname } </td> 
                    <td > { props.nic } </td> 
                    <td > { props.contacnumber } </td> 
                    < td > { props.problemTopic } </td>
                    < td > { props.problem } </td>
                    < td > { props.date } </td>
                   
                     <td >

                     <div className="container">
                     <a className="btn btn-success" href={ "/feedback/" + props._id }>
                      <i class="fa fa-pencil-square-o"></i>&nbsp;Approved</a>  &nbsp;

                     <a className="btn btn-warning" href={ "/edit/" + props._id }>
                      <i class="fa fa-pencil-square-o"></i>&nbsp;Edit</a>  &nbsp;
                 <a className="btn btn-danger" href = "" onClick = {() => {this.deleteRequest(props._id);}} ><i class="fa fa-trash"></i>&nbsp;Reject</a> </div></td></tr>)

            }

            </tbody> </table >
            <button className="btn btn-success"><a href="/create" style={{textDecoration:'none',color:'white'}}><i class="fa fa-plus-circle">&nbsp;New Request</i></a></button><br/>
            <button className="btn btn-danger" style={{marginTop:'10px'}}><a href="/report" style={{textDecoration:'none',color:'white'}}><i class="fa fa-file-text">&nbsp;Report</i></a></button>

            
            </div>
              </section>
              


            
            
            </div>
            
        )
    }
}