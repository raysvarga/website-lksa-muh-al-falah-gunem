import React from "react";
import g1 from "../assets/img/g-1.jpg";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

function Documentation() {
  const CustomLeftArrow = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className="absolute left-0 ml-2 top-1/2 transform -translate-y-1/2 bg-[#2487CE] text-white p-2 rounded-full w-8 h-8 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.707 14.707a1 1 0 010-1.414L9.414 10l3.293-3.293a1 1 0 10-1.414-1.414l-4 4a1 1 0 000 1.414l4 4a1 1 0 001.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    );
  };

  const CustomRightArrow = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className="absolute right-0 mr-2 top-1/2 transform -translate-y-1/2 bg-[#2487CE] text-white p-2 rounded-full w-8 h-8 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    );
  };
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div id="documentation" className="py-20 lg:mx-[350px] scroll-mt-20">
      <h1 className="text-center text-[#124265] font-semibold text-3xl mb-5">
        DOKUMENTASI
      </h1>
      <p className="text-black text-opacity-80 text-center mb-5">
        Dokumentasi ini menampilkan rangkaian foto yang mendokumentasikan
        berbagai aktivitas dan program yang dilaksanakan di LKSA Muhammadiyah
        Al-Falah Gunem.
      </p>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
      >
        <div className="mx-5 my-5">
          <div className="bg-[#f6fafd] p-5 rounded-md relative text-center">
            <img src={g1} alt="" />
            <h2 className="text-[#124265] text-lg font-semibold">
              Pengajian & Santunan 1 Muharram 1449 H
            </h2>
            <p className="text-[#124265] text-opacity-80 text-center text-sm mb-2">
              Ahad, 14/07/2024 | Pendopo Kec. Gunem
            </p>
            <span className="text-black text-opacity-80 text-sm italic">
              Anak-anak LKSA Al-Falah Gunem mengikuti pengajian yang penuh ilmu
              dan hikmah, serta menerima santunan sebagai bentuk kepedulian dan
              kasih sayang. Acara ini bertujuan memperkuat iman dan ukhuwah,
              serta membantu anak-anak dalam kebersamaan yang penuh berkah.
            </span>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Documentation;
