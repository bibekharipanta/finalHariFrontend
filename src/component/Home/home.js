import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";

const Home = () => {
  return (
    <MDBCard className="my-5 px-5 pb-5">
      <MDBCardBody>
        <MDBRow>
          <MDBCol md="12">
            <MDBCard reverse>
              <MDBView hover cascade waves>
                <img
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(142).jpg"
                  alt=""
                  className="img-fluid"
                />
                <MDBMask overlay="white-slight" className="waves-light" />
              </MDBView>
              <MDBCardBody cascade className="text-center">
                <h2 className="font-weight-bold">
                  <a href="#!">Title</a>
                </h2>
                <p>
                  Written by
                  <a href="#!">
                    <strong>Bibek Panta</strong>
                  </a>
                  , 15/02/2020
                </p>
                <MDBBtn className="btn-fb waves-light">
                  <MDBIcon fab icon="facebook-f" className="pr-2" />
                  Facebook
                </MDBBtn>
                <span className="counter">46</span>
                <MDBBtn className="btn-tw waves-light">
                  <MDBIcon fab icon="twitter" className="pr-2" />
                  Twitter
                </MDBBtn>
                <span className="counter">22</span>
                <MDBBtn className="btn-gplus waves-light">
                  <MDBIcon fab icon="google-plus-g" className="pr-2" />
                  Google
                </MDBBtn>
                <span className="counter">31</span>
                <MDBBtn color="default" className="waves-light">
                  <MDBIcon icon="comments" className="pr-2" />
                  Comments
                </MDBBtn>
                <span className="counter">18</span>
              </MDBCardBody>
            </MDBCard>
            <MDBContainer className="mt-5">
              <p>
                A supermarket is self-service shop offering a wide variety of food, beverages and household products, organized into sections. It is larger and has a wider selection than earlier grocery stores, but is smaller and more limited in the range of merchandise than a hypermarket or big-box market.
              </p>
              <p>
                A supermarket is self-service shop offering a wide variety of food, beverages and household products, organized into sections. It is larger and has a wider selection than earlier grocery stores, but is smaller and more limited in the range of merchandise than a hypermarket or big-box market.
              </p>
            </MDBContainer>
          </MDBCol>
        </MDBRow>
        <hr className="mb-5 mt-4" />
        <MDBRow>
          <MDBCol md="12">
            <MDBCard reverse>
              <MDBView hover cascade waves>
                <img
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(146).jpg"
                  alt=""
                  className="img-fluid"
                />
                <MDBMask overlay="white-slight" className="waves-light" />
              </MDBView>
              <MDBCardBody cascade className="text-center">
                <h2 className="font-weight-bold">
                  <a href="#!">Title of the news</a>
                </h2>
                <p>
                  Written by
                  <a href="#!">
                    <strong>Bibek Panta</strong>
                  </a>
                  , 15/02/2020
                </p>
                <MDBBtn className="btn-fb waves-light">
                  <MDBIcon fab icon="facebook-f" className="pr-2" />
                  Facebook
                </MDBBtn>
                <span className="counter">87</span>
                <MDBBtn className="btn-tw waves-light">
                  <MDBIcon fab icon="twitter" className="pr-2" />
                  Twitter
                </MDBBtn>
                <span className="counter">73</span>
                <MDBBtn className="btn-gplus waves-light">
                  <MDBIcon fab icon="google-plus-g" className="pr-2" />
                  Google
                </MDBBtn>
                <span className="counter">91</span>
                <MDBBtn color="default" className="waves-light">
                  <MDBIcon icon="comments" className="pr-2" />
                  Comments
                </MDBBtn>
                <span className="counter">67</span>
              </MDBCardBody>
            </MDBCard>
            <MDBContainer className="mt-5">
              <p>
                A supermarket is self-service shop offering a wide variety of food, beverages and household products, organized into sections. It is larger and has a wider selection than earlier grocery stores, but is smaller and more limited in the range of merchandise than a hypermarket or big-box market.
              </p>
              <p>
                people can buy good in nepal very easily with the help of supermarket shopping.
              </p>
            </MDBContainer>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
}

export default Home;