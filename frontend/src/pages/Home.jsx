import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";

import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import Subtitle from "../shared/Subtitle";

import experience from "../assets/images/experience.png";

import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/images-gallery/MasonryImagesGallery";

import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  
                
                </div>
                <h1>
                India Glider - {" "}
                  <span className="highlight">
                  Your Gateway to Unforgettable Indian Journeys
                  </span>
                </h1>
                <p>
                India Glider is a premier travel platform dedicated to providing seamless 
                exploration of India's diverse landscapes and vibrant cultures. From the 
                towering peaks of the Himalayas to the pristine beaches of Goa, from the 
                dynamic markets of Delhi to the tranquil backwaters of Kerala, India Glider
                 offers expertly curated travel experiences that cater to every adventurer's 
                 dream. Our comprehensive services ensure that your journey is not only memorable
                  but also effortlessly smooth, allowing you to immerse yourself fully in the
                   enchanting beauty and rich heritage of India. Discover the true essence of 
                   India with India Glider – where every journey becomes an extraordinary adventure
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box hero__video-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>

            {/*=============================hero section closed===============================================*/}

            <SearchBar />
          </Row>
        </Container>
      </section>

      {/*=========================================================*/}

      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve ?</h5>
             
            </Col>

            <ServiceList />
          </Row>
        </Container>
      </section>

      {/*===================================tour section start===================*/}

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our Packages</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/*================= featured tour section end ==========*/}

      {/*============ experience section start========*/}

      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="expreience__content">
                <Subtitle subtitle={"Why to choose us ?"} />
                <br />
                <h2>About</h2>
                <br />
                <p>
                  Welcome to India Glider, your premier destination for curated
                  travel experiences that leave an indelible mark on your
                  wanderlust soul. At India Glider, we believe that every
                  journey is a story waiting to unfold, and we're here to craft
                  yours with precision and passion. Embark on a seamless voyage
                  of discovery with our meticulously curated tour packages
                  designed to immerse you in the heart and soul of each
                  destination. From breathtaking landscapes to vibrant cultures,
                  we handpick every element to ensure an unforgettable adventure
                  that transcends expectations
                  <br />
                  <br />
                  With India Glider, your comfort and convenience are our top
                  priorities. That's why we go beyond the ordinary to provide
                  you with all the essentials for a hassle-free journey. From
                  luxurious accommodations to expert guides and seamless
                  transportation, we take care of every detail so you can focus
                  on creating memories that last a lifetime.
                  <br />
                  <br />
                  Whether you're seeking a thrilling adventure, a cultural
                  immersion, or a serene escape, India Glider has the perfect
                  package to suit your desires. Let us be your guide as you
                  explore the world's wonders and unlock the treasures that
                  await you. Join us on a journey of discovery with India Glider
                  and experience the world like never before. Your next
                  adventure starts here.
                </p>
              </div>
              <div className="counter__wrapper d-flex align-item-center gap-5">
                <div className="counter__box">
                  <span>10k+ </span>
                  <h6>Successfull Trip</h6>
                </div>

                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular Clients</h6>
                </div>

                <div className="counter__box">
                  <span>5</span>
                  <h6>Years Experience</h6>
                </div>
              </div>
            </Col>

            <Col lg="6">
              <div className="experience__img">
                <img src={experience} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">SnapShots of Our tours</h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"User Reviews"} />
              <h2 className="testimonial__titile">
                What our customer say about us
              </h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>

      {/*=========testimonial section end       ==========*/}
      <Newsletter />
    </>
  );
};

export default Home;
