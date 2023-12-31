import "../../css/Simpanan/deposito.css";
import { Button, Accordion } from "react-bootstrap";
// import Icon from "@mdi/react";
// import {
//   mdiShieldAccountVariantOutline,
//   mdiHandshakeOutline,
//   mdiFinance,
// } from "@mdi/js";
import KalkulatorDeposito from "../../component/KalkulatorDeposito";

import { RiHandCoinLine } from "react-icons/ri";
import { GiProgression } from "react-icons/gi";
import { BiBadgeCheck } from "react-icons/bi";

const Deposito = () => {
  return (
    <div>
      <div className="hero-img-tabungan">
        <div className="table-deposito">
          <table className="table table-bordered border-danger">
            <thead>
              <tr>
                <th scope="col">Jangka Waktu</th>
                <th scope="col">Suku Bunga Deposito</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1 Bulan</th>
                <td>5,00% p.a.</td>
              </tr>
              <tr>
                <th scope="row">3 Bulan</th>
                <td>5,25% p.a.</td>
              </tr>
              <tr>
                <th scope="row">6 Bulan</th>
                <td>5,50% p.a.</td>
              </tr>
              <tr>
                <th scope="row">12 Bulan</th>
                <td>5,75% p.a.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <section
        className="deskripsi-simpanan-konvensional"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-once="true"
      >
        <h2>Deposito Sembada</h2>
        <p>
          Bank Sembada memberikan solusi investasi berjangka dalam bentuk
          deposito dengan proses yang mudah dengan suku bunga menarik dan dapat
          digunakan sebagai jaminan kredit.
        </p>
      </section>
      <section className="keunggulan-produk">
        <div className="container-keunggulan">
          <h2>Keunggulan</h2>
          <div className="container-cart-keunggulan">
            <div className="cart-keunggulan">
              <RiHandCoinLine className="react-icon" />
              <h3>Setoran Awal Ringan</h3>
              <p>
                {" "}
                Dengan{" "}
                <span style={{ color: "red" }}>
                  setoran dana hanya Rp 10.000,-
                </span>{" "}
                dapatkan kemudahan persyaratan pembukaan rekening tabungan dan
                bertransaksi dengan buku tabungan.
              </p>
            </div>
            <div className="cart-keunggulan">
              <GiProgression className="react-icon" />
              <h3>Menguntungkan</h3>
              <p>
                {" "}
                Nikmati{" "}
                <span style={{ color: "red" }}>
                  {" "}
                  suku bunga tinggi 3% p.a.{" "}
                </span>
                untuk seluruh nominal penempatan dana dan dapatkan layanan{" "}
                <span style={{ color: "red" }}>
                  <br />
                  Safe Deposit Box
                </span>{" "}
                (sesuai ketentuan yang berlaku).
              </p>
            </div>
            <div className="cart-keunggulan">
              <BiBadgeCheck className="react-icon" />
              <h3>Dikelola secara Profesional</h3>
              <p>
                Dana dikelola oleh SDM yang ahli dan handal di bidang layanan
                keuangan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="container1">
        <div className="cont-body">
          <div className="mid-container">
            <h2 data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
              Keunggulan
            </h2>
            <section class="featuress">
              <div
                className="feature"
                data-aos="flip-left"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <Icon
                  path={mdiShieldAccountVariantOutline}
                  size={4}
                  className="icon"
                />
                <h3>Aman</h3>
                <p>
                  Dijamin LPS (Lembaga Penjamin Simpanan), diawasi OJK (Otoritas
                  Jasa Keuangan) dan dikelola oleh SDM yang profesional.
                </p>
              </div>
              <div
                className="feature"
                div
                data-aos="flip-left"
                data-aos-duration="1000"
                data-aos-delay="300"
                data-aos-once="true"
              >
                <Icon path={mdiHandshakeOutline} size={4} className="icon" />
                <h3>Nyaman</h3>
                <p>
                  Persyaratan mudah dengan pelayanan yang ramah dan sepenuh
                  hati.
                </p>
              </div>
              <div
                className="feature"
                div
                data-aos="flip-left"
                data-aos-duration="1000"
                data-aos-delay="500"
                data-aos-once="true"
              >
                <Icon path={mdiFinance} size={4} className="icon" />
                <h3>Menguntungkan</h3>
                <p>
                  Deposito dengan{" "}
                  <span style={{ color: "red" }}>suku bunga yang tinggi*</span>{" "}
                  dan menguntungkan s.d.{" "}
                  <span style={{ color: "red" }}>5,75% p.a.</span>
                </p>
                <br />
                <i>
                  *Suku bunga bisa berubah sewaktu waktu-waktu, untuk lebih
                  jelas, hubungi petugas kami.
                </i>
              </div>
            </section>
            <br />
          </div>
        </div>
      </div> */}
      <section className="fitur-manfaat-prasayart-deposito">
        <div className="cont-fitur-manfaat-kiri">
          <div
            className="site-fitur-manfaat-simpanan"
            div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <h3>BUKA DEPOSITO SEKARANG</h3>
            <p>
              Anda dapat mengajukan deposito melalui website dengan mengisi form
              yang tersedia, dan kami akan segera menghubungi Anda.
            </p>
            <div>
              <Button variant="danger" href="./formSimpanan">
                Buka Deposito
              </Button>
            </div>
          </div>
          <div
            className="site-fitur-manfaat-simpanan"
            div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <h3>UNDUH FORMULIR DEPOSITO</h3>
            <p>
              Anda juga dapat mengajukan secara offline dengan mengunduh dan
              mengisi form pengajuan deposito lalu berkunjung langsung ke kantor
              Bank Sembada.
            </p>
            <div>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Perorangan</Accordion.Header>
                  <Accordion.Body>
                    <div className="form-pembukaan">
                      <a
                        href="Data-Nasabah-Perorangan.pdf"
                        download="Data-Nasabah-Perorangan.pdf"
                      >
                        <button>Data Nasabah</button>
                      </a>
                    </div>
                    <br />
                    <div className="form-pembukaan">
                      <a
                        href="Formulir-pembukaan-deposito-perorangan.pdf"
                        download="Formulir-pembukaan-deposito-perorangan.pdf"
                      >
                        <button>Formulir Pembukaan</button>
                      </a>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Badan Usaha</Accordion.Header>
                  <Accordion.Body>
                    <div className="form-pembukaan">
                      <a
                        href="Data-Nasabah-Non-Perorangan.pdf"
                        download="Data-Nasabah-Non-Perorangan.pdf"
                      >
                        <button>Data Nasabah</button>
                      </a>
                    </div>
                    <br />
                    <div className="form-pembukaan">
                      <a
                        href="Formulir-pembukaan-deposito-non-perorangan.pdf"
                        download="Formulir-pembukaan-deposito-non-perorangan.pdf"
                      >
                        <button>Formulir Pembukaan</button>
                      </a>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>

        <div
          className="cont-fitur-manfaat-kanan"
          div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
          data-aos-once="true"
        >
          <div className="site-prasarat-simpanan">
            <h3>FITUR DAN MANFAAT</h3>
            <ol>
              <li>
                Jangka waktu penempatan fleksibel dengan tenor 1,3,6 dan 12
                bulan.
              </li>
              <li>Dapat dijadikan jaminan fasilitas kredit back to back.</li>
              <li>
                Bunga dihitung berdasarkan jumlah hari penempatan (1 tahun
                dihitung 365 hari).
              </li>

              <li>
                Penempatan deposit dapat diperpanjang secara otomatis (Automatic
                Roll Over/ARO).
              </li>
              <li>
                Pencairan deposito, dana dapat di transfer ke rekening bank lain
                atau di tempatkan kembali di tabungan Bank Sembada Dana.
              </li>
            </ol>
            <p>
              Pembukaan tabungan dan penempatan dana deposito dapat ditransfer
              langsung ke: rekening BCA dengan nomor rekening{" "}
              <span>2243005957</span> a.n PT BPR Multi Sembada Dana.
            </p>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Syarat dan Ketentuan</Accordion.Header>
                <Accordion.Body>
                  <ol>
                    <li>
                      Membawa bukti identitas diri yang masih berlaku, yaitu :
                      <ul>
                        <li>
                          Perorangan: KTP (WNI), KITAS/Passport (WNA), NPWP.
                        </li>
                        <li>
                          Badan Usaha : SIUP, TDP, NPWP,, Akta pendirian, Akta
                          terbaru, Domisili perusahaan, AHU dari kementrian
                          Hukum dan HAM (apabila ada perubahan data perseroan).
                        </li>
                      </ul>
                    </li>
                    <li>
                      Mengisi dan menandatangani formulir apikasi data
                      penempatan Deposito.
                    </li>
                    <li>
                      Penempatan Deposito awal yg ringan minimal
                      Rp. 1.000.000,-.
                    </li>
                  </ol>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </section>
      <section className="calkulator-simpanan">
        <KalkulatorDeposito />
      </section>
    </div>
  );
};
export default Deposito;
