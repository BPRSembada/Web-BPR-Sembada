import { useRef, useState } from "react";
import "../../css/Hubungi-Kami/pengaduanNasabah.css";
import Axios from "axios";
import { FINAL_API_PengaduanNasabah } from "../../database/APIs";
import { Button, Form, InputGroup, Modal, Table } from "react-bootstrap";
import {
  mdiAccountCircleOutline,
  mdiEmailOutline,
  mdiPhoneOutline,
} from "@mdi/js";
import Icon from "@mdi/react";

const PengaduanNasabah = () => {
  // inital state
  const initialInputValue = "";

  //  State Error
  const [namaErr, setNamaErr] = useState([false, ""]);
  const [emailErr, setemailErr] = useState([false, ""]);
  const [ajukanErr, setAjukanErr] = useState([false, "", ""]);

  const refNama = useRef();
  const refNoTelp = useRef();
  const refEmail = useRef();
  const refFormMasukan = useRef();

  const [nama, setNama] = useState(initialInputValue);
  const [noTelp, setNoTelp] = useState(initialInputValue);
  const [email, setEmail] = useState(initialInputValue);
  const [masukan, setMasukan] = useState(initialInputValue);

  const namaValid = (e) => {
    let symb = /[!@#$%^&1234567890*]/;
    let valueNama = e.target.value;
    if (valueNama.length === 0) {
      setNamaErr([false, ""]);
    } else if (symb.test(valueNama) || valueNama.length < 5) {
      setNamaErr([true, "Tolong isi Nama Anda dengan benar!"]);
    } else {
      setNamaErr([false, ""]);
    }
    setNama(valueNama);
  };

  const emailValid = (e) => {
    let regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    let valueEmail = e.target.value;
    if (valueEmail.length === 0) {
      setemailErr([false, ""]);
    } else if (!regex.test(valueEmail)) {
      setemailErr([true, "Tolong periksa email Anda"]);
    } else {
      setemailErr([false, ""]);
    }
    setEmail(valueEmail);
  };

  const ajukanPengaduan = () => {
    let Nama = refNama.current.value;
    let noTelpn = refNoTelp.current.value;
    let Email = refEmail.current.value;
    let Masukan = refFormMasukan.current.value;
    if (!Nama || !noTelpn || !Email || !Masukan) {
      setAjukanErr([
        true,
        "Tolong isi data Anda dengan lengkap!.",
        "Mohon Maaf...",
      ]);
    } else if (namaErr[0] || emailErr[0]) {
      setAjukanErr([
        true,
        "Tolong pastikan data Anda valid!.",
        "Mohon Maaf...",
      ]);
    } else {
      const data = {
        date: new Date().toDateString(),
        nama_lengkap: nama,
        no_telephone: noTelp,
        email: email,
        pengaduan: masukan,
      };

      Axios.post(FINAL_API_PengaduanNasabah, data).then((res) => {
        setNama(initialInputValue);
        setNoTelp(initialInputValue);
        setEmail(initialInputValue);
        setMasukan(initialInputValue);
        setAjukanErr([
          true,
          "Data pengajuan kemitraan telah terkirim, secepat mungkin petugas kami akan menguhungi Anda",
          "Terimakasih...",
        ]);
      });
    }
  };

  return (
    <div>
      <div className="hero-section-pengaduan">
        <div
          className="containers-visi"
          data-aos="zoom-in-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          {/* <h1>Layanan Pengaduan Nasabah</h1> */}
        </div>
      </div>
      <section className="cont-pengaduan">
        <div className="cont-cara-pengaduan">
          <div>
            <h2 data-aos="fade-left">Pihak yang dapat menyampaikan keluhan</h2>
            <ol>
              <li
                data-aos="fade-left"
                data-aos-delay="100"
                data-aos-once="true"
              >
                Nasabah yang menempatkan dana dan/atau memanfaatkan pelayanan
                yang tersedia di Bank Sembada.
              </li>
              <li
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-once="true"
              >
                Perwakilan Nasabah yang bertindak untuk dan atas nama Nasabah
                berdasarkan Surat Kuasa Khusus dari Nasabah.
              </li>
            </ol>
            <h2 data-aos="fade-left" data-aos-once="true">
              Keluhan Nasabah dapat disampaikan dengan cara :
            </h2>
            <ol>
              <li data-aos="fade-left" data-aos-once="true">
                Menghubungi Customer Care kami di nomor telepon{" "}
                <a href="tel:+628123456789" target="blank">
                  021-3840786
                </a>
                /
                <a href="tel:+628123456789" target="blank">
                  021-3840881
                </a>
                .
              </li>
              <li
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-once="true"
              >
                Mengunjungi Kantor Bank Sembada pada jam operasional kantor.
              </li>
              <li
                data-aos="fade-left"
                data-aos-delay="300"
                data-aos-once="true"
              >
                Mengirimkan keluhan dengan :
              </li>
              <ul
                data-aos="fade-left"
                data-aos-delay="400"
                data-aos-once="true"
              >
                <li>
                  E-mail kepada customer care kami dengan alamat email{" "}
                  <a href="mailto:bprsembada@bprsembada.com">
                    bprsembada@bprsembada.com
                  </a>
                  &nbsp;atau
                </li>

                <li>
                  Surat resmi ke Kantor Pusat Bank Sembada dengan Alamat Gedung
                  Asean Tower lantai 1 jl. KH. Samanhudi no 10, Jakarta Pusat.
                </li>
              </ul>
            </ol>
          </div>
        </div>
      </section>
      <section>
        <div className="cont-langkah-pengaduan">
          <h1>Langkah Pengaduan Nasabah</h1>
        </div>
        <section className="cont-pengaduan">
          <div className="cont-cara-pengaduan">
            <div>
              <h2 data-aos="fade-right" data-aos-once="true">
                Proses penanganan keluhan
              </h2>
              <ol>
                <li data-aos="fade-right" data-aos-once="true">
                  Nasabah Menyampaikan Keluhan Melalui Media (channel) yang di
                  sediakan oleh Bank Sembada.
                </li>
                <li data-aos="fade-right" data-aos-once="true">
                  Petugas Bank akan melakukan verifikasi atas kesesuaian data
                  nasabah.
                </li>
                <li data-aos="fade-right" data-aos-once="true">
                  Petugas Bank akan menerima dan mencatat keluhan yang
                  disampaikan oleh Nasabah.
                </li>
                <li data-aos="fade-right" data-aos-once="true">
                  Nasabah akan menerima nomor registrasi atas keluhan yg di
                  sampaikan.
                </li>
                <li data-aos="fade-right" data-aos-once="true">
                  Bank akan menindaklanjuti dan menyelesaikan keluhan Nasabah
                  sesuai dengan jangka waktu penyelesaian berdasarkan cara
                  penyampaian keluhan.
                </li>
                <li data-aos="fade-right" data-aos-once="true">
                  Bank akan menghubungi Nasabah untuk menyampaikan hasil
                  penyelesaian keluhan.
                </li>
              </ol>
              {/* <div style={{ textAlign: "center" }}>
                <i>
                  Bank akan menghubungi Nasabah untuk menyampaikan hasil
                  penyelesaian keluhan.
                </i>
              </div> */}
            </div>
            <img
              src="https://i.ibb.co/DrDRxT6/pengaduan-nasabah-bawah.jpg"
              alt=""
              data-aos="fade-left"
              data-aos-once="true"
            />
          </div>
        </section>
      </section>
      <section className="snk_pengaduan">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th colSpan={2}>Pengaduan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th colSpan={2}>Syarat Penyampaian Keluhan Tertulis</th>
            </tr>
            <tr>
              <th>Nasabah</th>
              <th>Perwakilan Nasabah</th>
            </tr>
            <tr>
              <td>
                <ol>
                  <li>Identitas Nasabah (KTP/Paspor);</li>
                  <li>Buku tabungan Nasabah; dan</li>
                  <li>
                    Dokumen yang berkaitan langsung dengan permasalahan yang
                    diajukan (jika ada).
                  </li>
                </ol>
              </td>
              <td>
                <ol>
                  <li>Identitas Perwakilan Nasabah;</li>
                  <li>Surat kuasa (jika diwakilkan);</li>
                  <li>
                    identitas Nasabah pemberi kuasa (jika diwakilkan); dan
                  </li>
                  <li>
                    {" "}
                    dokumen yang berkaitan langsung dengan permasalahan yang
                    diajukan (jika ada).
                  </li>
                </ol>
              </td>
            </tr>
            <tr>
              <th colSpan={2}>Syarat Penyampaian Keluhan Lisan</th>
            </tr>
            <tr>
              <td>
                Tanpa Tatap Muka:
                <ol>
                  <li>Harus diajukan oleh Nasabah yang bersangkutan;</li>
                  <li>
                    Menjawab pertanyaan verifikasi data diri dan rekening yang
                    diajukan oleh pihak Bank
                  </li>
                </ol>
                Tatap Muka:
                <ol>
                  <li>Identitas Nasabah (KTP/Paspor);</li>
                  <li>Buku tabungan Nasabah; dan</li>
                  <li>
                    Dokumen yang berkaitan langsung dengan permasalahan yang
                    diajukan (jika ada).
                  </li>
                </ol>
              </td>
              <td>
                Tanpa Tatap Muka:
                <ol>
                  <li>Tidak Diperkenankan</li>
                </ol>
                Tatap Muka:
                <ol>
                  <li>Identitas Perwakilan Nasabah;</li>
                  <li>Surat kuasa (jika diwakilkan);</li>
                  <li>
                    identitas Nasabah pemberi kuasa (jika diwakilkan); dan
                  </li>
                  <li>
                    {" "}
                    dokumen yang berkaitan langsung dengan permasalahan yang
                    diajukan (jika ada).
                  </li>
                </ol>
              </td>
            </tr>
          </tbody>
        </Table>
      </section>

      <div style={{ height: "5vh" }} id="form-pengaduan"></div>
      {/* Form Pengaduan Nasabah */}
      <section className="form-pengaduan">
        {/* <h2>Form Pengaduan</h2> */}
        <form className="cont-form-simpanan">
          <div className="cont-formss">
            <h3>Sampaikan keluhan Anda :</h3>
            <div className="form-pertama">
              <div className="form-item1">
                <Form.Label htmlFor="basic-url">Tulis nama anda</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <Icon path={mdiAccountCircleOutline} size={1} />
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Nama anda"
                    onChange={(e) => namaValid(e)}
                    value={nama}
                    ref={refNama}
                  />
                </InputGroup>
                <Form.Text className="TextErr">
                  {namaErr[0] ? namaErr[1] : ""}
                </Form.Text>
              </div>
            </div>
            <div className="form-pertama">
              <div className="form-item1">
                <Form.Label htmlFor="basic-url">No telephone</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <Icon path={mdiPhoneOutline} size={1} />
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="No telephone anda"
                    type="number"
                    onChange={(e) => setNoTelp(e.target.value)}
                    value={noTelp}
                    ref={refNoTelp}
                  />
                </InputGroup>
              </div>
              <div className="form-item2">
                <Form.Label htmlFor="basic-url">Email</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <Icon path={mdiEmailOutline} size={1} />
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="your-email@gmail.com"
                    type="email"
                    onChange={(e) => emailValid(e)}
                    value={email}
                    ref={refEmail}
                  />
                </InputGroup>
                <Form.Text className="TextErr">
                  {emailErr[0] ? emailErr[1] : ""}
                </Form.Text>
              </div>
            </div>
            <div>
              <div>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Form Masukan Anda</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    onChange={(e) => setMasukan(e.target.value)}
                    value={masukan}
                    ref={refFormMasukan}
                  />
                </Form.Group>
              </div>
            </div>
            <div className="cont-btn-form">
              <Button
                variant="danger"
                className="BukaTabungan"
                onClick={ajukanPengaduan}
              >
                Sampaikan Keluhan
              </Button>{" "}
              <p>
                Dengan klik 'Sampaikan Keluhan' maka petugas bank Sembada segera
                merespon keluhan Anda.
              </p>
            </div>
          </div>
        </form>
      </section>
      <Modal show={ajukanErr[0]}>
        <Modal.Header>
          <Modal.Title>{ajukanErr[2]}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{ajukanErr[1]}</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setAjukanErr([false, ""])}>
            Tutup
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default PengaduanNasabah;
