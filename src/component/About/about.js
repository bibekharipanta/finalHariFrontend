import React from "react";
import {  MDBRow, MDBCol, MDBIcon, MDBBtn } from "mdbreact";

const Contact = () => {
  return (
    <container>
    <section className="my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        What is supermarket?
      </h2>
      <p className="lead grey-text w-responsive text-center mx-auto mb-5">
A supermarket is self-service shop offering a wide variety of food, beverages and household products, organized into sections. It is larger and has a wider selection than earlier grocery stores, but is smaller and more limited in the range of merchandise than a hypermarket or big-box market.
      </p>

      <MDBRow>
        <MDBCol md="4" className="md-0 mb-5">
          <MDBRow>
            <MDBCol lg="2" md="3" size="2">
              <MDBIcon icon="bullhorn" size="2x" className="blue-text" />
            </MDBCol>
            <MDBCol lg="10" md="9" size="10">
              <h4 className="font-weight-bold">Marketing</h4>
              <p className="grey-text">
              A supermarket is self-service shop offering a wide variety of food, beverages and household products, organized into sections. It is larger and has a wider selection than earlier grocery stores, but is smaller and more limited in the range of merchandise than a hypermarket or big-box market.
              </p>
              <MDBBtn color="primary" size="sm">
                Learn more
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBCol>
        <MDBCol md="4" className="md-0 mb-5">
          <MDBRow>
            <MDBCol lg="2" md="3" size="2">
              <MDBIcon icon="cogs" size="2x" className="pink-text" />
            </MDBCol>
            <MDBCol lg="10" md="9" size="10">
              <h4 className="font-weight-bold">Availability</h4>
              <p className="grey-text">
                It is online business platform from where people can order good wahterever they want through online and buy the product easily on short period of time.
              </p>
              <MDBBtn color="pink" size="sm">
                Learn more
              </MDBBtn>
            </MDBCol> 
          </MDBRow>
        </MDBCol>
        <MDBCol md="4" className="md-0 mb-5">
          <MDBRow>
            <MDBCol lg="2" md="3" size="2">
              <MDBIcon icon="tachometer-alt" size="2x" className="purple-text" />
            </MDBCol>
            <MDBCol lg="10" md="9" size="10">
              <h4 className="font-weight-bold">Support</h4>
              <p className="grey-text">
                The supermarket goods ordering system is very supportive every people from every age group can order all the material are available here it take no time for ordering the goods.
              </p>
              <MDBBtn color="purple" size="sm">
                Learn more
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </section>
    </container>
  );
}

export default Contact