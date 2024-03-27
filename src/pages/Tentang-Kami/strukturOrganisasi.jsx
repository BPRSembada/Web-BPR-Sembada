import { useState } from "react";

import "../../css/Tentang-Kami/strukturOrganisasi.css";
import { SDM } from "../../database/SDMDatabase";
const StrukturOrgn = () => {
  const [kateSDM, setKateSDM] = useState(SDM);

  const FilterSDM = (kate) => {
    if (kate === "") {
      setKateSDM(SDM);
    } else if (kate === "komisaris") {
      setKateSDM(SDM.filter((item) => item.kategori.includes("Komisaris")));
    } else if (kate === "Direksi") {
      setKateSDM(SDM.filter((item) => item.kategori.includes("Direksi")));
    } else if (kate === "Kabag") {
      setKateSDM(SDM.filter((item) => item.kategori.includes("Kabag")));
    } else if (kate === "Staf") {
      setKateSDM(SDM.filter((item) => item.kategori.includes("Staf")));
    } else {
      setKateSDM(SDM);
    }
  };

  const SdmSembada = (data) => {
    return data.map((item) => {
      return (
        <div className="card-strukturOrganisasi">
          <section
            className="card-strukturOrganisasi"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <img src={item.image} alt="" />
            <div className="overlay">
              <h3
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="200"
                data-aos-once="true"
              >
                {item.Nama}
              </h3>
              <p
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="200"
                data-aos-once="true"
              >
                {item.Jabatan}
              </p>
            </div>
          </section>
          <div className="profil_SDM">
            <ul>
              <li>{item.profil[0]}</li>
              <li>{item.profil[1]}</li>
              <li>{item.profil[2]}</li>
            </ul>
          </div>
        </div>
      );
    });
  };
  return (
    <div>
      <div className="hero-section-struktur"></div>
      <div className="cont-pesan-ceo">
        <img src="../Direksi_manajemen/Sandi_.jpg" alt="" />
        <div>
          <h2>Pesan Direktur Utama</h2>
          <p>
            Bank Sembada mengukir jejak baru sejak Januari 2022, meraih tongkat
            estafet keunggulan setelah diakuisisi oleh PT. Hakimputra Perkasa.
            Bersama manajemen baru, dengan menerapkan nilkai-nilai{" "}
            <span>“TULUS” </span>
            kepada seluruh nasabah dan mengusung budaya baru yang berorientasi
            pada kualitas layanan.
          </p>
          <p>
            Dengan semangat menjadi Bank Perekonomian Rakyat pilihan utama
            solusi layanan perbankan di Jakarta Pusat, kami mencatat pertumbuhan
            pesat disertai dengan inovasi yang didukung teknologi informasi dan
            kualitas sumber daya manusia berkompeten.
          </p>
          <p>
            Bersama Bank Sembada kita ciptakan ekonomi kerakyatan yang lebih
            unggul dan masa depan finansial lebih cerah.
          </p>
        </div>
      </div>

      <div className="cont-profil-SDM">
        <h2>Profil Manajemen Bank Sembada</h2>

        <div className="kategori-Sdm">
          <button onClick={() => FilterSDM("")}>All</button>
          <button onClick={() => FilterSDM("komisaris")}>KOMISARIS</button>
          <button onClick={() => FilterSDM("Direksi")}>DIREKSI</button>
          <button onClick={() => FilterSDM("Kabag")}>KEPALA BAGIAN</button>
          {/* <button onClick={() => FilterSDM("Staf")}>STAF</button> */}
        </div>

        <div className="cont-cart-profil">{SdmSembada(kateSDM)}</div>
      </div>
    </div>
  );
};
export default StrukturOrgn;
