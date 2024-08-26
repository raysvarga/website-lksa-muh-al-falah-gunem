import React from "react";
import lksaprofile from "../assets/img/lksa-profile.png";
import ustad from "../assets/img/muslim.png";
import ustadzah from "../assets/img/muslimah.png";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

function About() {
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
    <div id="about" className="py-20 lg:mx-[350px] scroll-mt-20">
      <div className="px-3 mb-10">
        <h1 className="text-center text-[#124265] font-semibold text-3xl mb-5">
          TENTANG
        </h1>
        <img
          className="h-44 lg:h-[500px] mx-auto mb-5"
          src={lksaprofile}
          alt=""
        />
        <p className="text-black text-opacity-80 text-center">
          <span className="font-semibold">LKSA Muhammadiyah Al-Falah Gunem</span> didirikan pada tanggal 9 Rajab 1445
          H bertepatan dengan 21 Januari 2024 oleh Pimpinan Daerah Muhammadiyah
          Rembang, H.M. Anshori, S.Pd, dan tokoh Muhammadiyah lain diantaranya
          H. Rohmat, Drs. H. Hadi Purwaningsih, Ir. H. Widodo, H. Nur Salim,
          M.Hum, dan Noer Hasan. LKSA ini menempati gedung yang diberikan oleh
          PCM Gunem yang berlokasi satu kompleks Perguruan Pendidikan
          Muhammadiyah Gunem. Adapun tujuan awal pendirian LKSA Muhammadiyah
          Al-Falah Gunem adalah memberikan pelayanan kepada anak asuh dalam
          menemukan kedudukan fisik mental dan sosial agar memperoleh kesempatan
          yang luas, tepat dan memadai bagi perkembangan kepribadiannya.
        </p>
      </div>

      <div className="px-3 mb-5">
        <h2 className="text-[#124265] text-xl font-normal mb-2">Visi</h2>
        <p className="text-black text-opacity-80">
          Terwujudnya Panti Asuhan sebagai Lembaga Kesejahteraan Sosial Anak
          yang berbasis pesantren untuk mencetak kader Muhammadiyah yang
          memiliki Iman dan Taqwa, menguasai IPTEK, Terampil, Mandiri, dan
          Berakhlak Mulia.
        </p>
      </div>

      <div className="px-3 mb-5">
        <h2 className="text-[#124265] text-xl font-normal mb-2">Misi</h2>
        <ol className="list-decimal pl-5 text-black text-opacity-80">
          <li>
            Menyelenggarakan Panti Asuhan Muhammadiyah dengan berbasis
            pesantren.
          </li>
          <li>
            Membekali anak asuh dengan Iman dan Taqwa, IPTEK, keterampilan agar
            menjadi anak yang sholeh dan mandiri.
          </li>
          <li>
            Memberikan pelayanan asuhan kepada anak asuh sesuai dengan hak-hak
            anak dan sistem keberlanjutan layanan asuhan.
          </li>
        </ol>
      </div>

      <div className="px-3">
        <h2 className="text-[#124265] text-xl font-normal mb-2">Tujuan</h2>
        <ol className="list-decimal pl-5 text-black text-opacity-80">
          <li>
            Menumbuh kembangkan potensi anak asuh agar berkembang secara optimal
            sesuai dengan bakat dan minat masing-masing.
          </li>
          <li>
            Memberikan layanan asuhan anak asuh sesuai dengan hak dan kewajiban
            anak.
          </li>
          <li>
            Membentuk kader Muhammadiyah yang mempunyai disiplin ilmu tertentu.
          </li>
          <li>Meningkatkan sumber pendanaan untuk penyelenggaraan panti.</li>
          <li>
            Meningkatkan kemampuan pengelolaan panti asuhan secara profesional,
            transparan dan akuntabel serta berpedoman pada standar pelayanan
            asuhan anak di lembaga kesejahteraan sosial anak.
          </li>
        </ol>
      </div>
      <h2 className="text-[#124265] text-2xl font-semibold pt-10 text-center">PENGURUS LKSA AL-FALAH</h2>
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
          <div className="bg-[#f6fafd] p-5 rounded-md ps-8 relative text-center">
            <a href="">
              <img src={ustad} alt="" className="max-w-[200px] max-h-[200px] object-contain mx-auto" />
              <h2 className="text-[#124265] text-lg font-semibold">Sudiyono, S.Ag</h2>
              <p className="text-black text-opacity-80">Ketua LKSA</p>
            </a>
          </div>
        </div>
        <div className="mx-5 my-5">
          <div className="bg-[#f6fafd] p-5 rounded-md ps-8 relative text-center">
            <a href="">
              <img src={ustad} alt="" className="max-w-[200px] max-h-[200px] object-contain mx-auto" />
              <h2 className="text-[#124265] text-lg font-semibold">Surya Atmaja Putra</h2>
              <p className="text-black text-opacity-80">Sekretaris</p>
            </a>
          </div>
        </div>
        <div className="mx-5 my-5">
          <div className="bg-[#f6fafd] p-5 rounded-md ps-8 relative text-center">
            <a href="">
              <img src={ustadzah} alt="" className="max-w-[200px] max-h-[200px] object-contain mx-auto" />
              <h2 className="text-[#124265] text-lg font-semibold">Ipmawati</h2>
              <p className="text-black text-opacity-80">Tata Usaha</p>
            </a>
          </div>
        </div>
        <div className="mx-5 my-5">
          <div className="bg-[#f6fafd] p-5 rounded-md ps-8 relative text-center">
            <a href="">
              <img src={ustad} alt="" className="max-w-[200px] max-h-[200px] object-contain mx-auto" />
              <h2 className="text-[#124265] text-lg font-semibold">H. Aji Prakosa</h2>
              <p className="text-black text-opacity-80">Bendahara</p>
            </a>
          </div>
        </div>
        <div className="mx-5 my-5">
          <div className="bg-[#f6fafd] p-5 rounded-md ps-8 relative text-center">
            <a href="">
              <img src={ustad} alt="" className="max-w-[200px] max-h-[200px] object-contain mx-auto" />
              <h2 className="text-[#124265] text-lg font-semibold">M. Wawan, S.Pd</h2>
              <p className="text-black text-opacity-80">Bidang Pendidikan</p>
            </a>
          </div>
        </div>
        <div className="mx-5 my-5">
          <div className="bg-[#f6fafd] p-5 rounded-md ps-8 relative text-center">
            <a href="">
              <img src={ustad} alt="" className="max-w-[200px] max-h-[200px] object-contain mx-auto" />
              <h2 className="text-[#124265] text-lg font-semibold">Dhimas</h2>
              <p className="text-black text-opacity-80">Bidang Kepengasuhan</p>
            </a>
          </div>
        </div>
        <div className="mx-5 my-5">
          <div className="bg-[#f6fafd] p-5 rounded-md ps-8 relative text-center">
            <a href="">
              <img src={ustad} alt="" className="max-w-[200px] max-h-[200px] object-contain mx-auto" />
              <h2 className="text-[#124265] text-lg font-semibold">Wahyu Trisyani</h2>
              <p className="text-black text-opacity-80">Bidang Pembangunan</p>
            </a>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default About;
