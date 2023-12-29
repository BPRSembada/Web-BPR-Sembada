import "../../css/Tentang-Kami/strategi.css";
const Strategi = () => {
  return (
    <div>
      <div className="hero-section-strategi"></div>
      <div class="container-strategi">
        <div class="strategi">
          <div
            className="transformasi-bisnis"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-anchor-placement="top-bottom"
          ></div>
          <h2 data-aos="fade-right" data-aos-once="true">
            Transformasi Bisnis
          </h2>

          <ol data-aos="fade-right" data-aos-once="true">
            <li>
              Meningkatkan mutu layanan dan kepuasan Nasabah melalui percepatan
              bisnis proses, kualitas layanan yang nyaman dan aman, serta Sumber
              Daya Manusia yang berkompeten.
            </li>
            <li>
              Terus berinovasi dalam mengembangkan produk dan layanan perbankan
              yang sesuai perkembangan zaman dan perubahan kebutuhan Nasabah.
            </li>
            <li>
              {" "}
              Menciptakan ekosistem digitalisasi layanan yang didukung dengan
              teknologi yang muktahir.
            </li>
          </ol>
        </div>
        <div class="strategi">
          <div
            className="transformasi-budaya"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-anchor-placement="top-bottom"
          ></div>

          <h2 data-aos="fade-left" data-aos-once="true">
            Transformasi Budaya
          </h2>

          <ol data-aos="fade-left" data-aos-once="true">
            <li>
              Mewujudkan budaya yang terus maju dan bertumbuh dengan
              memperhatikan kepuasan seluruh stakeholders dan kesejahteraan
              karyawan.
            </li>
            <li>
              Meningkatkan kualitas Sumber Daya Manusia berkesinambungan dengan
              mentalitas pelayanan “TULUS” yang penuh integritas, tekun, dan
              saling menghargai.
            </li>
            <li>
              Mendorong pengembangan kompetensi karyawan dengan program
              pembangunan perilaku, pengetahuan, serta keahlian.
            </li>
            <li>
              {" "}
              Terus menerus mewujudkan budaya “TULUS” dengan keteladanan
              kepemimpinan dan kaderisasi.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};
export default Strategi;
