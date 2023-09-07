import React from 'react';

import axios from 'axios';

import ReactToPrint from 'react-to-print';




export default class RequestReport extends React.Component{
    constructor(props) {
        super(props);


        this.state = {
            Request: []
        };
    }



    componentDidMount() {
        axios.get('http://localhost:5000/Request/')
            .then(response => {
                this.setState({ Request : response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    getPosts() {
        axios.get('http://localhost:5000/Request/')
            .then(response => {
                this.setState({ Request : response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }
   
    render() {return (

         <div className = "container" >
            <div className = "row" >
            <div className = "col-lg-9 mt-2 mb-2" >
          
            </div >
            
            </div> 
            <div  ref ={el=>(this.componentRef =el)}>
            <table class="table table-bordered" >
            <thead className = "thead-light" >
               
            <div>
            
            
            <h3 style={{textAlign:'center'}}>Request LIST</h3>
            </div>

            
            <tr >
            <th > Requestname </th> 
            <th > nic </th> 
            <th > contacnumber </th>
            <th> problemTopic </th> 
            <th> problem </th> 
            <th> Date </th> 
             </tr >
            </thead> <tbody > {this.state.Request.map(props =>
                       <tr key = { props.Requestname } >
                       <td > { props.Requestname } </td> 
                       <td > { props.nic } </td> 
                       <td > { props.contacnumber } </td> 
                       < td > { props.problemTopic } </td>
                       < td > { props.problem } </td>
                       < td > { props.date } </td>
                    
                     </tr>
                )

            }

            </tbody> </table ></div>


           <div className = "container" >
                <ReactToPrint trigger={()=> {
                  return<button style={{backgroundColor:'red',width:'100px',height:'30px',borderRadius:'25px',border:'none',color:'white'}}>Print</button>
                }}
                content = {() => this.componentRef}
                documentTitle ='new document'
                pageStyle ="print"
                />
            </div>

        {/* footer */}
        <center>
          <section className="reportfooter">
           
            <p>Made  <i className="fa fa-heart-o" /> by Kumarasingha I.M.K.B.G.J.D</p>
          </section>
        </center>
            
            </div>
        )
    }
}