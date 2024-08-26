import React from "react";

function Contact() {
  return (
    <div className="bg-[#f6fafd]">
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
        <div className="mb-5 px-2">
          <iframe
            style={{ border: 0, width: "100%", height: "270px" }}
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1218.6880683991183!2d111.4650642696195!3d-6.805884667919822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNDgnMjEuMiJTIDExMcKwMjcnNTYuNiJF!5e1!3m2!1sid!2sid!4v1724089929441!5m2!1sid!2sid"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="lg:flex">
          <div className="flex flex-col gap-3">
            <div className="flex items-start px-3">
              <a
                href="https://www.google.com/maps/place/6%C2%B048'21.2%22S+111%C2%B027'56.6%22E/@-6.805885,111.465064,1119m/data=!3m1!1e3!4m4!3m3!8m2!3d-6.8058889!4d111.4657222?hl=id&entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start"
              >
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
                  <h3 className="text-[#124265] font-semibold text-lg">
                    Alamat
                  </h3>
                  <p className="text-black text-opacity-80 text-sm">
                    Jl. Trembesi, Gunem, Kec. Gunem, Kabupaten Rembang, Jawa
                    Tengah 59263
                  </p>
                </div>
              </a>
            </div>

            <div className="flex items-start px-3">
              <a
                href="https://wa.me/6281392081824?text=%D8%A7%D9%8E%D9%84%D9%92%D8%B3%D9%91%D9%8E%D9%84%D9%8E%D8%A7%D9%85%D9%8F%20%D8%B9%D9%8E%D9%84%D9%8E%D9%8A%D9%92%D9%83%D9%8F%D9%85%D9%92%20%D9%88%D9%8E%D8%B1%D9%8E%D8%AD%D9%92%D9%85%D9%8E%D8%A9%D9%8F%20%D8%A7%D9%84%D9%84%D9%87%D9%90%20%D9%88%D9%8E%D8%A8%D9%8E%D8%B1%D9%8E%D9%83%D9%8E%D8%A7%20%D8%AA%D9%8F%D9%87%D9%8F%0A%0ASaya%20(%20)%20ingin%20menanyakan%20informasi%20(%20)%2Flebih%20lanjut%20tentang%20LKSA%20Muhammadiyah%20Al-Falah%20Gunem.%20Terima%20Kasih%0A%0A%D9%88%D9%8E%D8%B9%D9%8E%D9%84%D9%8E%D9%8A%D9%92%D9%83%D9%8F%D9%85%D9%8F%20%D8%A7%D9%84%D8%B3%D9%91%D9%8E%D9%84%D9%8E%D8%A7%D9%85%D9%8F%20%D9%88%D9%8E%D8%B1%D9%8E%D8%AD%D9%92%D9%85%D9%8E%D8%A9%D9%8F%20%D8%A7%D9%84%D9%84%D9%87%D9%90%20%D9%88%D9%8E%D8%A8%D9%8E%D8%B1%D9%8E%D9%83%D9%8E%D8%A7%D8%AA%D9%8F%D9%87%D9%8F"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start"
              >
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
                  <h3 className="text-[#124265] font-semibold text-lg">
                    Telepon
                  </h3>
                  <p className="text-black text-opacity-80 text-sm">
                    +62 813-9208-1824
                  </p>
                </div>
              </a>
            </div>

            <div className="flex items-start px-3">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=lksamuhalfalahgunem@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start"
              >
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
                  <h3 className="text-[#124265] font-semibold text-lg">
                    Email
                  </h3>
                  <p className="text-black text-opacity-80 text-sm">
                    lksamuhalfalahgunem@gmail.com
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="px-3 lg:pl-40 mt-5 lg:mt-0">
            <h3 className="text-lg font-bold">Jadwal Buka:</h3>
            <ul className="list-disc ml-5">
              <li>Senin: 08.00 - 16.00 WIB</li>
              <li>Selasa: 08.00 - 16.00 WIB</li>
              <li>Rabu: 08.00 - 16.00 WIB</li>
              <li>Kamis: 08.00 - 16.00 WIB</li>
              <li>Jumat: 08.00 - 16.00 WIB</li>
              <li>Sabtu: 08.00 - 16.00 WIB</li>
              <li>
                <span className="text-red-800">Minggu: Tutup</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
