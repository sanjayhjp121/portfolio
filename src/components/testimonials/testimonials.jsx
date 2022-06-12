import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";


const data = [
  {
    avatar: AVTR1,
    name: "Vivek Chatterjee",
    review:
      "Without doubt one of the most talented programmers out there.  I always go back to Sanjay when I'm out of my depth and he's never failed to deliver what I ask for. Smart, trustworthy and professional. You won't be disappointed.",
  },
  {
    avatar: AVTR2,
    name: "Ridhi Soni",
    review:
      "Sanjay is a great help managing a very out of date website. Everything we ask him to do is done quickly and efficiently, we would be lost without him.",
  },
  {
    avatar: AVTR3,
    name: "Gourav Makkar",
    review:
      "Sanjay is awesome, delivers exactly what you want and is a great guy as well, thanks for all your hard work on my website",
  },
  {
    avatar: AVTR4,
    name: "Ayush Solanki",
    review:
      "Fantastic developer and great guy. We recommend to anyone who needs a website or web services. Well be using for any further web based services we require!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      pagination={true} modules={[Pagination]}>
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide
              key={index}
              className="testimonial"
            >
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
