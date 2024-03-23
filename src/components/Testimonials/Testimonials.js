"use client";
import { CustomLeftArrow } from "@/components/services/helper/CarouselButton";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Testimonials = () => {
  const testimonials = [
    {
      service: "Contractors",
      rating: 5,
      image: "/test/contractors.jpg", // Placeholder image for contractors
      content:
        "FastBricks helped us find reliable contractors for our construction projects. Their platform made it easy to connect with skilled professionals who delivered high-quality work on time and within budget.",
    },
    {
      service: "Labour",
      rating: 4,
      image: "/test/labour.avif", // Placeholder image for laborers
      content:
        "We've been using FastBricks to hire skilled laborers for various tasks on our construction sites. Their platform provides access to a pool of experienced workers, making it convenient for us to find the right people for the job.",
    },
    {
      service: "Masons",
      rating: 4.5,
      image: "/test/masons.jpg", // Placeholder image for masons
      content:
        "FastBricks connected us with expert masons who have contributed to the success of our projects. Their platform made it simple to find masons with the right expertise and experience, ensuring top-notch craftsmanship.",
    },
    {
      service: "Civil Workers",
      rating: 4,
      image: "/test/civil.jpg", // Placeholder image for civil workers
      content:
        "We rely on FastBricks to hire skilled civil workers for our infrastructure projects. Their platform streamlines the hiring process and allows us to find qualified professionals quickly, helping us meet project deadlines efficiently.",
    },
    {
      service: "Machinery Rentals Services",
      rating: 5,
      image: "/test/rentals.jpg", // Placeholder image for machinery rental services
      content:
        "FastBricks offers an extensive range of machinery rental services, helping us access the equipment we need for our construction projects. Their platform provides competitive rates and ensures the availability of machinery when we need it.",
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <hr className="bg-gray-100 p-1" />
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay={false}
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        infinite={false}
        containerClass="carousel-container"
        dotListClass=""
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<></>}
        draggable
        focusOnSelect={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            partialVisibilityGutter: 40,
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            partialVisibilityGutter: 30,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 30,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 m-5"
          >
            <img
              src={testimonial.image}
              alt={testimonial.service}
              className="w-full h-48 object-fill "
            />
            <div className="p-4 h-full sm:h-52 overflow-hidden">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold mb-2">
                  {testimonial.service}
                </h4>
                <div className="flex mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className={`h-4 w-4 fill-current ${
                        i < testimonial.rating
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }`}
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 15.854l-6.364 3.156 1.227-7.049L.367 7.646l7.195-1.044L10 0l2.438 6.602 7.195 1.044-4.863 4.315 1.227 7.049z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600">{testimonial.content}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonials;
