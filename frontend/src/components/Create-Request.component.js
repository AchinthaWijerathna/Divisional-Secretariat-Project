import React, { Component } from 'react';
import axios from 'axios';
import swal from '@sweetalert/with-react'

import "./admin.css";
import myprofile from './images/my.jpg';


import Sidebar from "./sidebar";


import "react-datepicker/dist/react-datepicker.css";

export default class CreateRequest extends Component {
    constructor(props) {
        super(props);


        this.onChangeRequestname = this.onChangeRequestname.bind(this);
        this.onChangenic = this.onChangenic.bind(this);
        this.onChangecontacnumber = this.onChangecontacnumber.bind(this);
        this.onChangeproblemTopic = this.onChangeproblemTopic.bind(this);
        this.onChangeproblem = this.onChangeproblem.bind(this);
        this.onChangeaddress = this.onChangeaddress.bind(this);
        this.onChangedate = this.onChangedate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Requestname: '',
            nic: '',
            contacnumber: '',
            problemTopic: '',
            problem: '',
            address: '',
            date: '',
            Request: []
        }
    }


    onChangeRequestname(e) {
        this.setState({
            Requestname: e.target.value
        })
    }

   

    onChangenic(e) {
            this.setState({
                nic: e.target.value
            })
        }

   
        
        onChangecontacnumber(e) {
            this.setState({
                contacnumber: e.target.value
            })
        }

        onChangeproblemTopic(e) {
            this.setState({
                problemTopic: e.target.value
            })
        }

        onChangeproblem(e) {
            this.setState({
                problem: e.target.value
            })
        }

        onChangeaddress(e) {
            this.setState({
                address: e.target.value
            })
        }
        
    onChangedate(e) {
        this.setState({
            date: e.target.value
        })
    }

    



   

   
    onSubmit(e) {
        e.preventDefault();

        const Request = {
            Requestname: this.state.Requestname,
            nic: this.state.nic,
            contacnumber: this.state.contacnumber,
            problemTopic: this.state.problemTopic,
            problem: this.state.problem,
            address: this.state.address,
            date: this.state.date,
        }

        console.log(Request);

        axios.post('http://localhost:5000/Request/add', Request)
            .then(res => console.log(res.data));


        swal({
            Requestname: "Done!",
            nic: "Request Successfully Added",
            contacnumber: "success",
            catagary: "Okay!"
            })
            .then((value) => {
                swal(window.location = '/');
            });

        // window.location = '/create';

    }

    render() {
        return ( <div>

               <div className="home-section3">

                    <div>
                     <Sidebar/>
                     </div>

                   <nav>
                      <div className="sidebar-button">
                      <i className="bx bx-menu sidebarBtn" />
                      <span className="dashboard">Create Request</span>
                   </div>
   
                   <div className="profile-details">
                      <img src={myprofile} alt="myprofile"/>
                      <span className="admin_name">Kumaranigha</span>
                      <i className="bx bx-chevron-down" />
                   </div>
                </nav>
              </div>

             
          <div className='Requestform'>
             
            <h3  style={{marginLeft:'200px'}}> Create New Request </h3>
            <form onSubmit = { this.onSubmit } >

            
            <div className = "form-group">
            <label > Requestname : </label> 
            <input type = "text"
            required className = "form-control"
            name = "Requestname"
            placeholder = "Enter Requestname"
            value = { this.state.Requestname }
            onChange = { this.onChangeRequestname }/> </div > 

            <div className = "form-group" >
            <label > nic: </label> 
            <input type = "text"
            required className = "form-control"
            name = "nic"
            placeholder = "Enter nic"
            value = { this.state.nic }
            onChange = { this.onChangenic}/></div >


<div className = "form-group" >
            <label > contacnumber: </label> 
            <input type = "text"
            required className = "form-control"
            name = "contacnumber"
            placeholder = "Enter contacnumber"
            value = { this.state.contacnumber }
            onChange = { this.onChangecontacnumber}/></div >

<div className = "form-group" >
            <label > problemTopic: </label> 
            <input type = "text"
            required className = "form-control"
            name = "problemTopic"
            placeholder = "Enter problemTopic"
            value = { this.state.problemTopic }
            onChange = { this.onChangeproblemTopic}/></div >

<div className = "form-group" >
            <label > problem: </label> 
            <input type = "text"
            rows='4'
            required className = "form-control"
            name = "problem"
            placeholder = "Enter problem"
            value = { this.state.problem }
            onChange = { this.onChangeproblem}/></div >

<div className = "form-group" >
            <label > address: </label> 
            <input type = "text-box"
            required className = "form-control"
            name = "address"
            placeholder = "Enter address"
            value = { this.state.address }
            onChange = { this.onChangeaddress}/></div >

             <div className = "form-group" >
            <label > date: </label>
            <input type = "Date"
            required className = "form-control"
            name = "date"
            placeholder = "Enter date"
            value = { this.state.date }
            onChange = { this.onChangedate }/>
             </div >

            

            <div className = "form-group" >
            <input type = "submit"
            value = "Create"
            className = "btn btn-primary"/>
            </div>
            
             </form >
             </div>
              

            </div>
        )
    }
}