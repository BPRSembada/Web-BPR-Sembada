import "../../css/Layanan/safeDepositBox.css";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SaveDepositBox = () => {
  return (
    <div>
      <div className="hero-section-sdb"></div>

      <section className="contSdb">
        <h2>
          <i>Segera Hadir Layanan Safe Deposit Box</i>
        </h2>
        <p
          div
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <b>
            <span>Bank Multi Sembada Dana </span>
          </b>
          menyediakan produk layanan{" "}
          <b>
            <span>Safe Deposit Box (SDB)</span>
          </b>{" "}
          dalam jangka waktu tertentu atau sesuai dengan permintaan pelanggan
          dengan keamanan dan perlindungan yang maksimal. Sehingga Anda dapat
          lebih tenang dalam menyimpan dokumen dan/atau barang berharga Anda
          seperti perhiasan, logam mulia, saham, obligasi, surat berharga,
          sertifikat atau barang-barang Anda yang tidak ternilai harganya.
        </p>
      </section>
      <section className="keunggulanSdb">
        <div
          className="contKeunggulan"
          div
          data-aos="fade-right"
          data-aos-once="true"
        >
          <h2>Keuntungan Layanan SDB Sembada </h2>
          <p>
            Sembada berkomitmen menghadirkan produk layanan Safe Deposit Box
            (SDB), <br />
            yang aman dan nyaman dengan harga layanan yang kompetitif untuk
            memenuhi kebutuhan Anda.
          </p>
        </div>
        <div className="hovKeunggulan">
          <div
            className="sdbCardCont"
            div
            data-aos="zoom-in"
            data-aos-once="true"
          >
            <h3>Aman</h3>
            <p>
              Ruang penyimpanan yang kokoh dan tahan api dilengkapi dengan
              sistem keamanan berupa kamera pengawas 24 jam (CCTV) di sekitar
              akses masuk ruang SDB, pintu baja khusus untuk masuk ruangan,
              serta diperlukan kunci dari Penyewa dan dari BPR untuk membuka
              kotak SDB.
            </p>
          </div>

          <div
            className="sdbCardCont"
            div
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-once="true"
          >
            <h3>Fleksibel</h3>
            <p>
              Tersedia dalam berbagai ukuran yaitu Small, Medium dan Large
              sesuai dengan kebutuhan Penyewa, baik bagi Penyewa Perorangan
              maupun Badan Hukum.
            </p>
          </div>

          <div
            className="sdbCardCont"
            div
            data-aos="zoom-in"
            data-aos-delay="500"
            data-aos-once="true"
          >
            <h3>Mudah</h3>
            <p>
              Persyaratan sewa cukup mudah yaitu dengan membuka rekening
              tabungan dan tarif sewa yang relatif terjangkau sesuai ukuran yang
              dibutuhkan.
            </p>
          </div>

          {/* <div
              className="sdbCardCont"
              div
              data-aos="zoom-in"
              data-aos-delay="700"
              data-aos-once="true"
            >
              <h3>Kompetitif</h3>
              <p>
                Harga bersaing, layanan tingkat atas, solusi penyimpanan
                berkelas.
              </p>
            </div> */}
        </div>
      </section>

      <section
        className="persyaratan"
        div
        data-aos="fade-out"
        data-aos-delay="200"
        data-aos-once="true"
      >
        <div className="listSyarat">
          <h2>Persyaratan mudah pengajuan SDB</h2>
          <ol>
            <li>Mengisi formulir permohonan penyewaan SDB.</li>
            <li>
              Telah memiliki rekening tabungan yang aktif di BPR Sembada dengan
              nominal pengendapan dana minimal Rp 3.000.000 (Tiga Juta Rupiah)
              dan diblokir selama masa sewa SDB (diluar biaya sewa dan kewajiban
              lainnya atas layanan SDB).
            </li>
            <li>Mengisi formulir permohonan sewa SDB.</li>
            <li>Menandatangani perjanjian Sewa-Menyewa SDB.</li>
            <li>
              Menyampaikan dokumen identitas sesuai peryaratan pembukaan
              rekening tabungan dan melampirkan pasfoto terbaru ukuran 4x6
              sebanyak 2 (dua) lembar.
            </li>
            <li>Membayar biaya-biaya atas sewa SDB dan biaya jaminan kunci.</li>
            <li>
              Menyampaikan surat kuasa kepada BPR Sembada apabila penyewa akan
              memberikan kuasa kepada pihak lain maksimal 2 (dua) penerima kuasa
              perorangan.
            </li>
            {/* <li>
              Benda atau barang-barang yang tidak dapat disimpan (benda atau
              barang-barang terlarang) oleh penyewa dalam kotak SDB meliputi:
            </li> */}
          </ol>
          <h2>
            Benda atau barang-barang yang tidak dapat disimpan dalam kotak SDB
            meliputi:
          </h2>
          <ol>
            <li>Senjata api dan atau bahan peledak.</li>
            <li>Obat-obatan terlarang.</li>
            <li>Uang dalam bentuk mata uang asing dan rupiah.</li>
            <li>
              Barang-barang yang bersifat organik, mudah membusuk atau rusak
              yang disimpan dalam suatu kotak tertutup.
            </li>
            <li>Barang-barang bukti yang ada kaitannya dengan kasus hukum.</li>
            <li>
              Segala macam barang yang dapat membahayakan atau merusak kotak SDB
              bersangkutan dan tempat sekitarnya.
            </li>
            <li>
              Barang-barang yang sangat diperlukan saat keadaan darurat seperti:
              surat kuasa, catatan kesehatan dan petunjuk bila penyewa sakit,
              petunjuk bila penyewa meninggal dunia (wasiat), barang-barang
              lainnya yang dilarang sesuai peraturan dan undang-undang
            </li>
          </ol>
        </div>
        <div className="tabelSyarat">
          <h2>Ukuran Kotak SDB dan Harga Sewa</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Ukuran Kotak</th>
                <th>(Tinggi x Lebar x Panjang)</th>
                <th>Biaya Sewa</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Kecil <i>(Small)</i>
                </td>
                <td>(7 x 31 x 60 cm)</td>
                <td>Rp.380.000,-</td>
              </tr>
              <tr>
                <td>
                  Sedang <i>(Medium)</i>
                </td>
                <td>(13 x 31 x 60 cm)</td>
                <td>Rp.580.000,-</td>
              </tr>
              <tr>
                <td>
                  Besar <i>(Large)</i>
                </td>
                <td>(26 x 31 x 60 cm)</td>
                <td>Rp.800.000,-</td>
              </tr>
            </tbody>
          </Table>
          <section className="jaminanKunci">
            <h2>Uang jaminan kunci SDB</h2>
            <p>
              Uang jaminan kunci sebesar Rp.1.000.000*, dibayarkan satu kali
              saat pertama mendaftar dan akan dikembalikan pada saat penutupan
              SDB apabila tidak terdapat:
            </p>
            <ul>
              <li>Kerusakan kotak SDB yang diakibatkan oleh Penyewa.</li>
              <li>Kehilangan 2 (dua) anak kunci yang dipegang oleh Penyewa.</li>
              <li>
                dan atau kerugian lainnya bagi BPR yang diakibatkan oleh
                Penyewa.
              </li>
            </ul>
            <p>
              Apabila ada pemakaian uang jaminan kunci, maka Penyewa wajib
              menyetorkan kembalian uang jaminan kunci.
            </p>
          </section>
        </div>
      </section>

      <section className="link-to-formsdb">
        <a href="/formSDB" className="btn-to-formsdb">
          {" "}
          Ajukan layanan SDB sekarang
        </a>
        {/* <Button as={Link} to="/formSDB">
          form SDB
        </Button> */}
      </section>
    </div>
  );
};
export default SaveDepositBox;
