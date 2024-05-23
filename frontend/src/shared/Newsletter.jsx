import React from 'react'
import './newsletter.css'


import { Container ,Row,Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.jpg'


const Newsletter = () => {
  return(
   <section className='newsletter'>
    <Container>
    <Row>
        <Col lg='6'>
        <div className='newsletter__content'>
<h2>
    Subscribe now to get useful travelling information...
</h2>

<div className='newsletter__input'>
<input type='email' placeholder='Enter your email'/>
<button className='btn newsletter__btn'>Subscribe</button>
</div>
<p>To subscribe and receive timely updates and valuable information, kindly provide your email address below. Stay informed about our latest tours, exclusive offers, and travel insights delivered straight to your inbox.
 Thank you for choosing to stay connected with us as we embark on exciting journeys together.</p>
        </div>
        </Col>
        <Col lg='6'>
        <div className='newsletter__img'>
            <img src={maleTourist} alt=''/>
        </div>

        </Col>
        </Row>
    </Container>
  </section>

)}

export default Newsletter