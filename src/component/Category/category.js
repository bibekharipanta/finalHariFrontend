import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";

const Category = () => {
  return (
    <MDBCard className="my-5 px-5 pb-5">
      <MDBCardBody>
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Recent posts
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
          This is supermarket shop. people can order goods and other material from this shop.
        </p>
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <a href="#!" className="green-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="utensils" className="pr-2" />
                Food
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Title of the news</strong>
            </h3>
            <p>
              If you look roughly into the Nepali cuisine, you may feel that Nepal lacks varieties other than the so-called staple “Dal bhat”. But, when you look deeper into the Nepali kitchen you will discover a new dish in every home for every occasion..
            </p>
            <p>
              by
              <a href="#!">
                <strong>Bibek Panta</strong>
              </a>
              , 14/02/2020
            </p>
            <MDBBtn color="success" size="md" className="waves-light ">
              Read more
            </MDBBtn>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBRow>
          <MDBCol lg="7">
            <a href="#!" className="pink-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="image" className="pr-2" />
                Shopping 
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Title of the news</strong>
            </h3>
            <p>
              You can find some of the best things to shop in Nepal such as Statues and masks, Hemp Bags, Thangka Paintings, Pashmina, Rice Paper items, Traditional Jewelry, Khukuri, Tea, Handicrafts, Singing Bowls etc.
            </p>
            <p>
              by
              <a href="#!">
                <strong>Bibek Panta</strong>
              </a>
              , 14/02/2020
            </p>
            <MDBBtn
              color="pink"
              size="md"
              className="mb-lg-0 mb-4 waves-light"
            >
              Read more
            </MDBBtn>
          </MDBCol>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/img%20(34).jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/img (28).jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <a href="#!" className="indigo-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="suitcase" className="pr-2" />
                Food
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Title of the news</strong>
            </h3>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro qui dolorem ipsum quia
              sit amet.
            </p>
            <p>
              by
              <a href="#!">
                <strong>Carine Fox</strong>
              </a>
              , 11/08/2018
            </p>
            <MDBBtn color="indigo" size="md" className="waves-light ">
              Read more
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
}

export default Category;