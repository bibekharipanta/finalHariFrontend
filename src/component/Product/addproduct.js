import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';
import Axios from 'axios';
class AddProduct extends React.Component {

  constructor(){
  super()

  this.state = {

    
    name:'',
    price:'',
    imageproduct:'',
    validationMessage:'',
    redirect:false

  }
}

    handleFileSelected = event => {
        this.setState({imageproduct: event.target.files[0]})
        //for image url
        let reader = new FileReader();

        reader.onloadend = () => {
            this.setState({imagePreviewUrl: reader.result});
        }

        reader.readAsDataURL(event.target.files[0])
    }


nameChangeHandler = (event) => {

this.setState({name: event.target.value})
  
}
priceChangeHandler = (event) => {

this.setState({price: event.target.value})
  
}





formSubmitHandler = (e) => {
  e.preventDefault()


var headers = {

'Content-Type':'application/json'
}

 const fd = new FormData();
            const imageName = this
                .state
                .imageproduct
                .name
                .toLowerCase();
            fd.append('imageFile', this.state.imageproduct, imageName);
            Axios
                .post('http://localhost:3000/upload', fd)
                .then(res => {
                    console.log(res);

var data = {
  name:this.state.name,
  price:this.state.price,
  imageproduct:'imageFile-' + imageName

}

  Axios.post('http://localhost:3000/product', data , headers)

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

  return (
    <MDBContainer style={{marginRight:'-600px', marginTop:120}}>
      <MDBRow>
        <MDBCol md='6'>
         <form onSubmit={this.formSubmitHandler} >
          <MDBCard
         
            className='card-image'
            style={{
              backgroundImage:
                'url(https://media.istockphoto.com/photos/einkaufswagen-im-supermarkt-picture-id672450320?k=6&m=672450320&s=612x612&w=0&h=Q0V_Sd2RmLMI3HP5MPVJeETTF7jo8IG1yK1byTs19o0=)',
              width: '28rem'
            }}
          >
            <div className='text-white rgba-stylish-strong py-5 px-5 z-depth-4'>
              <div className='text-center'>
                <h3 className='white-text mb-5 mt-4 font-weight-bold'>
                  <strong>ADD PRODUCTS</strong>
                  <a  className='green-text font-weight-bold'>
                  
                  </a>
                </h3>
              </div>
              <MDBInput
                label='Product Name'
                group
                type='text'
                value={this.state.name} 
                    onChange={this.nameChangeHandler}
                validate
                labelClass='white-text'
              />
              <MDBInput
                label='Product Price'
                group
                type='text'
                value={this.state.price} 
                    onChange={this.priceChangeHandler}
                validate
                labelClass='white-text'
              />

               <MDBInput
                    type="file"
                                    inputProps={{
                                    accept: 'image/*'
                                }}
                                    name="avatar"
                                    onChange={this.handleFileSelected}
                                    ref={fileInput => this.fileInput = fileInput}/> 
                        
                  
              <div className='md-form pb-3'>
                
              </div>
              <MDBRow className='d-flex align-items-center mb-4'>
                <div className='text-center mb-3 col-md-12'>
                  <MDBBtn
                    gradient="tempting-azure"
                    rounded
                    type="submit"
                    className="btn-block z-depth-1"
                  >
                    ADD
                  </MDBBtn>
                </div>
              </MDBRow>
            
            </div>
           
          </MDBCard>
           </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
}
export default AddProduct;