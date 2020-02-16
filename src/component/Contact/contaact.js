import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";
import Axios from 'axios';
class Contact extends React.Component {



constructor(){
    super()

    this.state = {
      name:'',
      email:'',
      message:'',
      redirect:false
    }
  }


  nameChangeHandler = (event) => {
    this.setState({name: event.target.value})
  }

  emailChangeHandler = (event) => {
    this.setState({email: event.target.value})
  }

  messageChangeHandler = (event) => {
    this.setState({message: event.target.value})
  }

  formSubmitHandler = (e) => {
  e.preventDefault()


var headers = {

'Content-Type':'application/json'
}

 
var data = {
  name:this.state.name,
  email:this.state.email,
  message:this.state.message

}

  Axios.post('http://localhost:3000/contact', data , headers)

.then((response) => {

  console.log(response.data)
 
   if(response.status === 200){

    this.setState({redirect:true})
  }
  
  }

)
.catch((err) => console.log(err.response))

}

  render (){
  return (
    <div>
    <container >
    <section className="my-5" style={{marginLeft:'350px'}}>
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Contact us
      </h2>
      <p className="text-center w-responsive mx-auto pb-5">
        Supermarket online
        .
      </p>
      <MDBRow>
        <MDBCol lg="5" className="my-12">
          <MDBCard>
            <MDBCardBody>
              <form onSubmit={this.formSubmitHandler}>
              <div className="form-header blue accent-1">
                <h3 className="mt-2">
                  <MDBIcon icon="envelope" /> Write to us:
                </h3>
              </div>
              <p className="dark-grey-text">
                We'll write rarely, but only the best content.
              </p>
              <div className="md-form">
                <MDBInput
                  icon="user"
                  label="Your name"
                  iconClass="grey-text"
                  value={
              this.state.name} onChange={this.nameChangeHandler}
                  type="text"
                  id="form-name"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="envelope"
                  label="Your email"
                  value={
              this.state.email} onChange={this.emailChangeHandler}
                  iconClass="grey-text"
                  type="text"
                  id="form-email"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="tag"
                  label="Message"
                  value={
              this.state.message} onChange={this.messageChangeHandler}
                  iconClass="grey-text"
                  type="text"
                  id="form-subject"
                />
              </div>
              
         
              <div className="text-center">
                <MDBBtn 
                type="submit"
                gradient="tempting-azure">Submit</MDBBtn>
              </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="7">
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "400px" }}
          >
            <iframe
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.359005888787!2d85.32784554976023!3d27.706199732066757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190a74aa1f23%3A0x74ebef82ad0e5c15!2sSoftwarica%20College%20Of%20IT%20%26%20E-Commerce!5e0!3m2!1sen!2snp!4v1581663648692!5m2!1sen!2snp"
              title="This is a unique title"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
          <br />
          <MDBRow className="text-center">
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="map-marker-alt" />
              </MDBBtn>
              <p>Kathmandu Nepal, 01745896</p>
              <p className="mb-md-0">Nepal</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="phone" />
              </MDBBtn>
              <p>+ 977 9840066517</p>
              <p className="mb-md-0">Mon - Fri, 8:00-22:00</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="envelope" />
              </MDBBtn>
              <p>info@gmail.com</p>
              <p className="mb-md-0">Supermarket@gmail.com</p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </section>
    </container>
    </div>
  );
  }
}

export default Contact;