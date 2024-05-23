import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";
import tourImg08 from "../images/tour-img08.jpg";



const tours = [
  {
    id: "01",
    title: "Manali",
    city: "Manali",
    distance: 300,
    address:'Somewhere',
    price: 8000,
    maxGroupSize: 25,
    desc: "this is the description",
    reviews: [
      {
        name :'john',
        rating :4.6,
      },
      {
        name :'john',
        rating :4.6,
      },
    ],
    avgRating: 5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Rishikesh",
    city: "Rishikesh",
    distance: 400,
    address:'Somewhere',
    price: 5000,
    maxGroupSize: 12,
    desc: "this is the description",
    reviews: [
    
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Jaipur",
    city: "Jaipur",
    distance: 500,
    address:'Somewhere',
    price: 5000,
    maxGroupSize: 15,
    desc: "this is the description",
    reviews: [
      
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Goa",
    city: "Goa",
    distance: 500,
    address:'Somewhere',
    price: 12000,
    maxGroupSize: 20,
    desc: "this is the description",
    reviews: [
   
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Kasol",
    city: "Kasol",
    distance: 500,
    address:'Somewhere',
    price: 6000,
    maxGroupSize: 12,
    desc: "this is the description",
    reviews: [
     
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Spiti Valley",
    city: "Spiti Valley",
    distance: 500,
    address:'Somewhere',
    price: 8000,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
     
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Dalhousie",
    city: "Dalhousie",
    distance: 500,
    address:'Somewhere',
    price: 4000,
    maxGroupSize: 10,
    desc: "this is the description",
    reviews: [
      
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Shimla",
    city: "Shimla",
    distance: 500,
    address:'Somewhere',
    price: 8000,
    maxGroupSize: 14,
    desc: "this is the description",
    reviews: [
      
    ],
    avgRating: 4.5,
    photo: tourImg08,
    featured: false,
  },
 
  
  
  
 

  
  
];

export default tours;
