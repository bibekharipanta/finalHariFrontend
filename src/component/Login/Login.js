import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput, Link } from 'mdbreact';
import Axios from 'axios';
import {Redirect} from 'react-router-dom'
class Login extends React.Component{

  constructor(){
    super()

    this.state = {
      email:'',
      password:'',
      redirect:false
    }
  }

  emailChangeHandler = (event) => {
    this.setState({email: event.target.value})
  }

  passwordChangeHandler = (event) => {
    this.setState({password: event.target.value})
  }

  formSubmitHandler = (e) => {
  e.preventDefault()


var headers = {

'Content-Type':'application/json'
}

 
var data = {
  email:this.state.email,
  password:this.state.password

}

  Axios.post('http://localhost:3000/login', data , headers)

.then((response) => {

  console.log(response.data)
localStorage.setItem('token', response.data.token)
 
   if(response.status === 200){

    this.setState({redirect:true})
  }
  
  }

)
.catch((err) => console.log(err.response))
this.setState({email:'', password:''})

}

//})

  // console.log(this.state)


render(){

//what to render based in state

if(this.state.redirect === true){

return (
  <Redirect to='/product' />
  )

// toast message

}

  return (
   
    
     
        <MDBCol md="8" style={{marginLeft:'600px', marginTop:"100px"}}>
          <MDBCard>
          
            <div className="header pt-3 grey lighten-2">
              <MDBRow className="d-flex justify-content-start">
                <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                  Log in
                </h3>
              </MDBRow>
            </div>
            <MDBCardBody className="mx-4 mt-4">
            <form onSubmit={this.formSubmitHandler}>
              <MDBInput label="Your email" group type="text" validate value={
              this.state.email} onChange={this.emailChangeHandler} />
              <MDBInput
                label="Your password"
                group
                type="password"
                validate
                containerClass="mb-0"
                value={
              this.state.password} onChange={this.passwordChangeHandler}
              />
              
              <div className="text-center mb-4 mt-5">
                <MDBBtn
                  gradient="tempting-azure"
                  type="submit"
                  className="btn-block z-depth-2"
                >
                  Log in
                </MDBBtn>
              </div>
              <p className="font-small grey-text d-flex justify-content-center">
                Don't have an account?
                <a
                  href="#!"
                  className="dark-grey-text font-weight-bold ml-1"
                >
                <Link to ='/Registration'>
                  Sign up
                  </Link>
                </a>
              </p>
              </form>
            </MDBCardBody>
            
          </MDBCard>
        </MDBCol>
     
   
  );
}
};

export default Login;