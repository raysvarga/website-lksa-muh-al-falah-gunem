import React from "react";

function Contact() {
  return (
    <div id="contact" className="py-20 lg:mx-[350px]">
      <div>
        <h1 className="text-center text-[#124265] font-semibold text-3xl mb-5">
          KONTAK
        </h1>
        <p className="text-black text-opacity-80 text-center mb-5">
          Jika Anda memiliki pertanyaan, ingin memberikan donasi, atau
          membutuhkan informasi lebih lanjut tentang program-program kami,
          jangan ragu untuk menghubungi kami melalui salah satu cara dibawah
          ini.
        </p>
      </div>
      <div className="mb-5 px-2" data-aos="fade-up" data-aos-delay="200">
        <iframe
          style={{ border: 0, width: "100%", height: "270px" }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.052298138957!2d111.4630684!3d-6.8062993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e773d007aa5fbc7%3A0xbd943350ead4e2b!2sPantai%20Asuhan%2FLKSA%20Al-Falah%20Gunem!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-start px-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="-4.8 -4.8 33.6 33.6"
            className="w-20 mt-1 lg:w-10"
          >
            <rect
              width={33.6}
              height={33.6}
              x={-4.8}
              y={-4.8}
              fill="#2487CE"
              stroke="none"
              strokeWidth={0}
              rx={6.72}
            />
            <path
              stroke="#FFF"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.7 15c-1.666.635-2.7 1.52-2.7 2.5 0 1.933 4.03 3.5 9 3.5s9-1.567 9-3.5c0-.98-1.034-1.865-2.7-2.5M12 9h.01M18 9c0 4.064-4.5 6-6 9-1.5-3-6-4.936-6-9a6 6 0 1 1 12 0Zm-5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
            />
          </svg>
          <div className="px-3">
            <h3 className="text-[#124265] font-semibold text-lg">Alamat</h3>
            <p className="text-black text-opacity-80 text-sm">
              Jl. Trembesi, Gunem, Kec. Gunem, Kabupaten Rembang, Jawa Tengah
              59263
            </p>
          </div>
        </div>

        <div className="flex items-start px-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#FFF"
            stroke="#FFF"
            viewBox="-11.2 -11.2 78.4 78.4"
            className="w-10 mt-1"
          >
            <rect
              width={78.4}
              height={78.4}
              x={-11.2}
              y={-11.2}
              fill="#2487CE"
              stroke="none"
              strokeWidth={0}
              rx={15.68}
            />
            <path d="M18.156 37.762c6.774 6.773 15.024 12 21.75 12 3.024 0 5.672-1.055 7.805-3.399 1.242-1.383 2.016-3 2.016-4.593 0-1.172-.446-2.297-1.57-3.094l-7.173-5.11c-1.101-.75-2.015-1.125-2.859-1.125-1.078 0-2.016.61-3.094 1.664l-1.664 1.641a1.263 1.263 0 0 1-.89.375c-.375 0-.704-.14-.961-.258-1.43-.773-3.914-2.906-6.235-5.203-2.297-2.297-4.43-4.781-5.18-6.234a1.991 1.991 0 0 1-.257-.938c0-.304.093-.61.351-.867l1.64-1.71c1.056-1.079 1.665-2.017 1.665-3.095 0-.843-.375-1.757-1.148-2.859l-5.04-7.102c-.82-1.125-1.968-1.617-3.234-1.617-1.547 0-3.164.703-4.523 2.04-2.274 2.18-3.282 4.874-3.282 7.85 0 6.727 5.133 14.884 11.883 21.634Z" />
          </svg>
          <div className="px-3">
            <h3 className="text-[#124265] font-semibold text-lg">Telepon</h3>
            <p className="text-black text-opacity-80 text-sm">
              +62 813-9208-1824
            </p>
          </div>
        </div>

        <div className="flex items-start px-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#FFF"
            stroke="#FFF"
            viewBox="-11.2 -11.2 78.4 78.4"
            className="h-10 mt-1"
          >
            <rect
              width={78.4}
              height={78.4}
              x={-11.2}
              y={-11.2}
              fill="#2487CE"
              stroke="none"
              strokeWidth={0}
              rx={15.68}
            />
            <path d="M28.047 30.707c.984 0 1.875-.445 2.883-1.477L51.32 9.05c-.867-.843-2.484-1.241-4.804-1.241H8.78c-1.969 0-3.351.375-4.125 1.148L25.164 29.23c1.008 1.008 1.922 1.477 2.883 1.477ZM2.71 44.418l16.57-16.383L2.664 11.652c-.352.657-.54 1.782-.54 3.399v25.875c0 1.664.212 2.836.587 3.492Zm50.625-.023c.351-.68.54-1.829.54-3.47V15.052c0-1.57-.165-2.696-.517-3.328L36.812 28.035ZM9.484 48.19h37.734c1.97 0 3.329-.375 4.102-1.125L34.445 30.332l-1.57 1.57c-1.594 1.547-3.117 2.25-4.828 2.25-1.711 0-3.235-.703-4.828-2.25l-1.57-1.57L4.796 47.043c.89.773 2.46 1.148 4.687 1.148Z" />
          </svg>
          <div className="px-3">
            <h3 className="text-[#124265] font-semibold text-lg">Email</h3>
            <p className="text-black text-opacity-80 text-sm">
              lksamuhalfalahgunem@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
