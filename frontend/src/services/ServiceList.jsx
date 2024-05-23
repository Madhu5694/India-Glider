import React from 'react'
import ServiceCard  from './ServiceCard';
import {Col} from "reactstrap";

import guide from './../assets/images/guide.png'
import meals from './../assets/images/meals.png'
import home from './../assets/images/home.png'

const ServiceData = [
    {
        imgUrl:home,
        
        title:'Accommodation',
        desc: "Our esteemed 4-star hotel offers discerning guests the epitome of comfort and style. Each meticulously designed room features a private balcony, providing an exclusive vantage point to admire the surrounding beauty "
    },
    {
        imgUrl: meals,
        title:'Meals',
        desc: "Our esteemed establishment proudly presents a curated menu offering a diverse array of delectable options for breakfast, lunch, and dinner, Embracing inclusivity, our culinary offerings encompass both non-vegetarian and vegetarian selections"

    },
    {
        imgUrl:guide,
        title:'Guide',
        desc: "Enhance your travel experience with our exclusive guide,dedicated to ensuring you remain informed and engaged throughout your journey , providing real-time updates and insights on the latest conditions and highlights of the tour. "
    },


]

const ServiceList=() =>{
    return <>
        {
            ServiceData.map((item,index)=>(
                <Col lg='3' md4='6' sm='12' className="mb-4" key={index}>

                <ServiceCard item={item}/>
                </Col>
                ))

        }
    </>
}


export default ServiceList