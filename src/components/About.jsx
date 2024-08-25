import React from "react";
import lksaprofile from "../assets/img/lksa-profile.png";

function About() {
  return (
    <div id="about" className="py-20 lg:mx-[350px]">
      <div className="px-3 mb-10">
        <h1 className="text-center text-[#124265] font-semibold text-3xl mb-5">
          TENTANG
        </h1>
        <img className="h-44 lg:h-80 mx-auto mb-5" src={lksaprofile} alt="" />
        <p className="text-black text-opacity-80 text-center">
          LKSA Muhammadiyah "Al-Falah" Gunem didirikan pada tanggal 9 Rajab 1445
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
    </div>
  );
}

export default About;
