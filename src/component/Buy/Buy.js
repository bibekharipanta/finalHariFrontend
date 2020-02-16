import React from 'react'
import { 
  Form, Button
} from 'react-bootstrap'
import Axios from 'axios';
import { FormGroup, CustomInput } from 'reactstrap'
import 'mdbreact/dist/css/mdb.css'
import { Container,MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBView} from 'mdbreact';
import { Redirect } from 'react-router-dom';

class Buy extends React.Component {

constructor(props){
  super(props)

  this.state = {

    path:'',
    us:'',
   pname:'',
   pprice:'',
   pemail:'',
   selectedFile:'',
   ID:'',
    config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')} `}
            },
            selectedFile: null,
    redirect:false

  }
}
pnameChangehandler = (event) => {

this.setState({pname: event.target.value})
  
}
ppriceChangeHandler = (event) => {

this.setState({pprice: event.target.value})
  
}
pemailChangeHandler = (event) => {


  this.setState({pemail: event.target.value})
}

componentWillMount() {
  var usId= this.props.match.params.id;
  Axios.get("http://localhost:3000/my/" +usId ,this.state.config)
        .then(res=>{
            console.log(res.data)
            this.setState({
              us:res.data,
              path:'http://localhost:3000/uploads/',
              pname:res.data.name,
              pprice:res.data.price,
              pemail:res.data.pemail,
            
              ID: res.data._id

            })
        })
   
      
 }
     handleFileSelected = event => {
        this.setState({selectedFile: event.target.files[0]})
        //for image url
        let reader = new FileReader();

        reader.onloadend = () => {
            this.setState({imagePreviewUrl: reader.result});
        }

        reader.readAsDataURL(event.target.files[0])
    }
handleSubmit = event => {
        event.preventDefault();
       

            var headers = {
                'Content-Type': 'application/json'
            }

            
                    var data = {
                        pname: this.state.name,
                        pprice: this.state.price,
                  
                        pemail: this.state.pemail
                   
      
                     
                    }
                    Axios.post('http://localhost:3000/buy', data , headers)

.then( (response) => {
  console.log(response.data.status);
  if(response.status === 200){

    this.setState({redirect:true})
  }
 

})
.catch( (err) =>  {

})

}


render(){
  

if(this.state.redirect ){

   return(<Redirect to="/product"/>)
  
}
const {us} = this.state

    
  return(

<Container>
<div>
 <MDBContainer >
      <MDBRow>
      <MDBCol md="3">
        </MDBCol>
        <MDBCol md="12" style={{marginTop:"80px", marginLeft:"400px"}}>
          <MDBCard>
            <MDBCardBody>
              <form onSubmit={this.handleSubmit} >
                <p className="h4 text-center py-4">Buy Product</p>
                <div className="grey-text">
           
                  <MDBInput 
                    label="  Name" 
                    value={this.state.pname} 
                    onChange={this.pnameChangehandler}
                    group
                    type="text"
                    validate
                    id="pname"
                    name="pname"
                    error="wrong"
                    success="right"/>
                  <MDBInput
                  
                    label="Price"
                     value={this.state.pprice} 
                      onChange={this.ppriceChangeHandler}
                    
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"/>
                 
                  <MDBInput
                    label="Email" 
                    value={this.state.pemail} 
                   onChange={this.pemailChangeHandler}
                    
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"/>



                </div>
                <div className="text-center py-6 mt-6">
                 <MDBBtn
                  type="submit"
                  gradient="tempting-azure"
                  rounded
                  className="btn-block z-depth-1a"
                 >
                  BUY
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
}
};

export default Buy;