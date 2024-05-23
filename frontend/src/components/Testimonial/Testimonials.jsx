import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-01.jpg'
import ava02 from '../../assets/images/ava-02.jpg'
import ava03 from '../../assets/images/ava-03.jpg'
import ava04 from '../../assets/images/ava-04.jpg'

const Testimonials = () => {
  
  const settings={
    dots:true,
    infinite:true,
    autoplay:true,
    speed:1000,
    swipeToSlide:true,
    autoplaySpeed:2000,
    slidesToShow:3,

    responsive:[
      {
        breakpoint:992,
        settings:{
          slidesToShow:2,
          slidesToScroll:1,
          infinite:true,
          dots:true,
        },
      },
      {
        breakpoint:576,
        settings:{
          slidesToShow:1,
          slidesToScroll:1,
        },


      },


    ]
  }


  return (


    <Slider {...settings}>
    <div className='testimonial py-4 px-3'>
      <p>
      Overall, I had a fantastic experience with India Glider.
       Diverse selection of hotels offered exceeded my expectations,
        providing comfort and luxury at every step.
              </p>
    
    <div className='d-flex align-items-center gap-4 mt-3'>
      <img src={ava01} className='w-25 h-25 rounded-2' alt=''/>

    <div>
    <h6 className='mb-0 mt-3'>Jack</h6>
<p>Customer</p>
</div>
    </div>
    </div>

    <div className='testimonial py-4 px-3'>
      <p>
      Absolutely fantastic experience with this travel agency.
       They went above and beyond to ensure our vacation was perfect
       . Highly recommend their expertise and professionalism
              </p>
    
    <div className='d-flex align-items-center gap-4 mt-3'>
      <img src={ava02} className='w-25 h-25 rounded-2' alt=''/>

    <div>
    <h6 className='mb-0 mt-3'>Harsh</h6>
<p>Customer</p>
</div>
    </div>
    </div>



    <div className='testimonial py-4 px-3'>
      <p>
      India Glider made our vacation very easy by planning for 
      us everything well in advance.. we had a seamless vacation
       because of India Glider.
              </p>
    
    <div className='d-flex align-items-center gap-4 mt-3'>
      <img src={ava03} className='w-25 h-25 rounded-2' alt=''/>

    <div>
    <h6 className='mb-0 mt-3'>Abhishek</h6>
<p>Customer</p>
</div>
    </div>
    </div>



    <div className='testimonial py-4 px-3'>
      <p>
      I appreciate the Kashmir Heaven Tours and Travel for their effort 
      put into organizing the trip, there are a few areas that I believe could be
       improved upon for future travelers. Firstly, the accommodation provided was 
       quite far from the main sightseeing points.
              </p>
    
    <div className='d-flex align-items-center gap-4 mt-3'>
      <img src={ava04} className='w-25 h-25 rounded-2' alt=''/>

    <div>
    <h6 className='mb-0 mt-3'>Madhu</h6>
<p>Customer</p>
</div>
    </div>
    </div>







  </Slider>
);
  }

export default Testimonials