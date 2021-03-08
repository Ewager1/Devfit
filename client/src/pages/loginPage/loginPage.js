import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import AdCarousel from "../../components/AdCarousel";
import AuthenticationButton from "../../components/authenticationButton";
import "./styles.css";
import "../../components/button/styles.css";
// import { useAuth0 } from "@auth0/auth0-react";
// import { Redirect } from "react-router";
// import UserContext from "../../utilities/userContext";
import "../../components/button/styles.css";
import DevBtn from "../../components/button/button";
import { Link } from "react-router-dom";
import "../../components/button/styles.css";

function LoginPage() {
  return (
    <>
      <Header />
      <Container className="loginPage">
        <Row>
          <Col className="align-self-stretch background-dark">
            <Container className="my-5 py-3">
              <Container className="text-center">
                <h1 className="text-red">Refactor your body!</h1>
                <AdCarousel
                  imgUrl1="/images/girlfeetwaterbottle.jpg"
                  altText1="Girl sitting on floor next to water bottle"
                  carouselHeader1="Stretching your mind"
                  carouselCaption1="but need to stretch your body?"
                  imgUrl2="/images/gym-coronavirus.jpg"
                  altText2="Man picking up weight from weight rack"
                  carouselHeader2="Found your inner strength"
                  carouselCaption2="but still discovering your outer
              strength?"
                />
              </Container>
            </Container>
          </Col>
          <Col className="align-self-stretch justify-content-center text-center background-red">
            <Container className="my-5 py-4">
              <h3 className="text-white">
                "Master your mindset <br />
                and <br />
                you'll master your body."
              </h3>
              <p className="text-white mb-5">-GYMQUOTES.CO</p>
              <Container className="background-dark align-content-center">
                <h4 className="py-3 text-red">Already a Member?</h4>
                <AuthenticationButton />
                <br />
                <br />
              </Container>
            </Container>
          </Col>
        </Row>
        <Row className=" align-items-center justify-content-center text-center">
          <Col className="align-self-stretch background-red">
            <Container className="my-5 py-3">
              <h2 className="py-5 text-white">
                Whatever your fitness needs, <br />
                we've got you covered. <br />
                Ready to become a member?
              </h2>
              <DevBtn styleClass="btn-dark">
                <Link className="text-white" to="/registration">
                  Sign up
                </Link>
              </DevBtn>
            </Container>
          </Col>
          <Col className="align-self-stretch background-dark">
            <Container className="my-5 py-3">
              <Container className="text-center">
                <h1 className="text-red">Increase Your Stamina!</h1>
                <AdCarousel
                  imgUrl1="/images/bench.jpg"
                  altText1="Man on weight bench"
                  carouselHeader1="Looking for personal training
                  facilities"
                  carouselCaption1="to help you meet your fitness goals?"
                  imgUrl2="/images/equipmentroom.jpg"
                  altText2="Equipment Room"
                  carouselHeader2="Looking for a clean, comfortable
                  atmosphere"
                  carouselCaption2="to work out and de-stress?"
                />
              </Container>
            </Container>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default LoginPage;
