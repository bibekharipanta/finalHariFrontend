import React from "react";
import { Container, MDBRow, Link, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBBadge, MDBBtn,MDBTooltip,MDBIcon } from "mdbreact";
import axios from 'axios';


class Product extends React.Component {

  
     constructor() {
        super()
    
        this.state = {
             product:[],
             path:'',
        }
    }
    componentDidMount()
    {
         axios.get("http://localhost:3000/product")
        .then(res=>{
            console.log(res)
            this.setState({product:res.data,path:'http://localhost:3000/uploads/'})
        })
       
        .catch(err=>{
            console.log(err)
        })
    }

    
    render() {
          //this.state.posts
          const{product}=this.state
          return(

    <section className="text-center my-5">
    
      <h2 className="h1-responsive font-weight-bold text-center my-5">
       Products
      </h2>
      <MDBRow > {product.map(product => (
        <MDBCol lg="5" md="6" className="mb-lg-0 mb-4" key={product.id}>
          <MDBCard className="align-items-center" style={{height:"500px", marginBottom:"30px", marginLeft:"100px"}}>
            <MDBCardImage  style={{height:"200px"}}
           
                className="img-fluid"
                src={this.state.path+product.imageproduct}
                alt="img"
              />
            <MDBCardBody className="text-center">
              <a className="grey-text">
                <p>
                    {product.description}
                  </p>
                 
              </a>
              <h5>
                <strong>
                  <a className="dark-grey-text">
                  
                   <p>
                  {product.price}
                  </p>
                    <MDBBadge pill >
                        
                    </MDBBadge>
                  </a>
                </strong>
              </h5>
              <h4 className="font-weight-bold blue-text">
                 <p>
                    {product.name}
                  </p>
              </h4>


              <Link to={`/buy/my/${product._id}`}>
              <MDBBtn rounded gradient="tempting-azure" className="mb-3 mt-3" >
               Buy Now  
              </MDBBtn>
              </Link>

              
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
           ))}
      </MDBRow>
    </section>
 
  );
}
};

export default Product;