import React from 'react'
import { 
  Form, Button
} from 'react-bootstrap'
import Axios from 'axios';
import 'mdbreact/dist/css/mdb.css'
import { Container,MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBView} from 'mdbreact';
import { Redirect } from 'react-router-dom';

class Registration extends React.Component {

constructor(){
  super()

  this.state = {

    
    fullname:'',
    address:'',
    phone:'',
    email:'',
    password:'',
    image:'',
    validationMessage:'',
    redirect:false

  }
}

    handleFileSelected = event => {
        this.setState({image: event.target.files[0]})
        //for image url
        let reader = new FileReader();

        reader.onloadend = () => {
            this.setState({imagePreviewUrl: reader.result});
        }

        reader.readAsDataURL(event.target.files[0])
    }


fullnameChangeHandler = (event) => {

this.setState({fullname: event.target.value})
  
}
addressChangeHandler = (event) => {

this.setState({address: event.target.value})
  
}
phoneChangeHandler = (event) => {


  this.setState({phone: event.target.value})
}

emailChangeHandler = (event) => {

/*if(event.target.value.length < 6){
  this.setState({validationMessage:'Username Cannot be less than 6 chars '})
}*/

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

 const fd = new FormData();
            const imageName = this
                .state
                .image
                .name
                .toLowerCase();
            fd.append('imageFile', this.state.image, imageName);
            Axios
                .post('http://localhost:3000/upload', fd)
                .then(res => {
                    console.log(res);

var data = {
  fullname:this.state.fullname,
  address:this.state.address,
  phone:this.state.phone,
  email:this.state.email,
 
  password:this.state.password,
  image:'imageFile-' + imageName

}

  Axios.post('http://localhost:3000/signup', data , headers)

.then( (response) => {
  console.log(response.data.status);
  if(response.status === 200){

    this.setState({redirect:true})
  }

})
.catch( (err) =>  {

})

})

  // console.log(this.state)
}

render(){

//what to render based in state

if(this.state.redirect === true){

return (
  <Redirect to='/login' />
  )

// toast message

}



  return(

//if(this.state.redirect == true){ 

//   //actual redirect work

// }
<Container>
<div>
 <MDBContainer style={{
  paddingLeft:"20px",backgroundImage:'url(assets/kk.jpg)',backgroundSize:'cover', marginLeft:365, marginTop:20}}>
      <MDBRow>
      <MDBCol md="6">
        </MDBCol>
        <MDBCol md="12" style={{marginTop:20}}>
          <MDBCard>
            <MDBCardBody>
              <form onSubmit={this.formSubmitHandler} >
                <p className="h4 text-center py-4">Sign Up</p>
                <div className="grey-text">
                
                  <MDBInput 
                    label=" Fullname" value={this.state.fullname} 
                    onChange={this.fullnameChangeHandler}
                    
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                  
                    label="Address" value={this.state.address} onChange={this.addressChangeHandler}
                    
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Phone Number" value={this.state.phone} onChange={this.phoneChangeHandler}
                    
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Email" 
                    value={this.state.email} 
                    onChange={this.emailChangeHandler}
                    
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                 
                  <MDBInput
                    label="Password" value={this.state.password} onChange={this.passwordChangeHandler}
                    
                    group
                    type="password"
                    validate
                  />

                  <MDBInput
                    type="file"
                                    inputProps={{
                                    accept: 'image/*'
                                }}
                                    name="avatar"
                                    onChange={this.handleFileSelected}
                                    ref={fileInput => this.fileInput = fileInput}/> 
                        
                  
                
                </div>
                <div className="text-center py-6 mt-6">
                 <MDBBtn
                  type="submit"
                  gradient="tempting-azure"
                  rounded
                  className="btn-block z-depth-1a"
                 >
                  Register
                </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

      </MDBRow>
    </MDBContainer>

    
      </div>
      </Container>
  );
}};

export default Registration;