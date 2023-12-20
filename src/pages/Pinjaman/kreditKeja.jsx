import "../../css/Pinjaman/kreditKerja.css";
import "../../component/Calculator.css";
import { Button, Accordion } from "react-bootstrap";
import Icon from "@mdi/react";
import {
  mdiClockFast,
  mdiShieldCheckOutline,
  mdiClipboardEditOutline,
} from "@mdi/js";
import AccordionItem from "react-bootstrap/esm/AccordionItem";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import { SlSpeedometer } from "react-icons/sl";
import { AiOutlineSafety } from "react-icons/ai";
import { LuClipboardCheck } from "react-icons/lu";

// import component
import KalkulatorKredit1 from "../../component/kalkulator1";

const Kreditkerja = () => {
  return (
    <div>
      <div className="hero-img-kreditKerja"></div>
      <div
        className="deskripsi-kedit-kerja"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-once="true"
      >
        <h2>Pinjaman Modal Kerja Sembada</h2>
        <p>
          Menghadirkan layanan pinjaman yang fleksibel sesuai dengan{" "}
          <i>cashflow </i>
          keuangan bisnis usaha Anda, dengan metode pembayaran bunga bula nan
          dan pokok pinjaman dapat dibayarkan di akhir periode pinjaman selama
          jangka waktu 1 tahun.
        </p>
      </div>

      <section className="keunggulan-produk">
        <div className="container-keunggulan">
          <h2>Keunggulan</h2>
          <section className="container-cart-keunggulan">
            <div className="cart-keunggulan">
              <SlSpeedometer className="react-icon" />
              <h3>Cepat</h3>
              <p>
                Proses pencairan pinjaman Anda dalam 5 hari kerja*.
                <br />
                <i style={{ color: "red" }}>
                  *setelah persyaratan data dinyatakan lengkap.
                </i>
              </p>
            </div>
            <div className="cart-keunggulan">
              <AiOutlineSafety className="react-icon" />
              <h3>Aman</h3>
              <p>
                Dikelola oleh tim yang berpengalaman dan profesional, Bank
                Sembada merupakan lembaga jasa keuangan yang terdaftar dan
                diawasi OJK (Otoritas Jasa Keuangan).
              </p>
            </div>
            <div className="cart-keunggulan">
              <LuClipboardCheck className="react-icon" />
              <h3>Mudah</h3>
              <p>
                Persyaratan pengajuan pinjaman mudah dan menjangkau seluruh
                kalangan sektor industri.
              </p>
            </div>
          </section>
        </div>
      </section>

      <section className="fitur-manfaat-prasayart-kredit">
        <div className="cont-fitur-manfaat-kredit">
          <div
            className="site-fitur-manfaat-simpanan"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <h3>AJUKAN PINJAMAN SEKARANG</h3>
            <p>
              Anda dapat mengajukan pinjaman modal kerja melalui website dengan
              mengisi form yang tersedia, dan petugas kami akan segera
              menghubungi Anda.
            </p>
            <div>
              <Button variant="danger" href="./formKredit">
                Ajukan Pinjaman
              </Button>
            </div>
          </div>
          <div
            className="site-fitur-manfaat-simpanan"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <h3>UNDUH FORMULIR PINJAMAN</h3>
            <p>
              Anda juga dapat mengajukan secara offline dengan mengunduh dan
              mengisi form pengajuan pinjaman modal kerja dan berkunjung
              langsung ke kantor Bank Sembada.
            </p>
            <div>
              <Button
                variant="warning"
                href="Form-Permohonan-Kredit.pdf"
                download="Form-Permohonan-Kredit.pdf"
              >
                Download Form
              </Button>
            </div>
          </div>
        </div>
        <section
          className="cont-fitur-manfaat-kanan"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div className="site-prasarat-simpanan">
            <h3>FITUR DAN MANFAAT</h3>
            <h5>
              Nikmati pinjaman dengan suku bunga flat ±7.29%/tahun (efektif
              14%/tahun)*
            </h5>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Syarat dan Ketentuan</Accordion.Header>
                <Accordion.Body>
                  <ol>
                    <li>Jenis nasabah karyawan, wiraswasta dan badan usaha.</li>
                    <li>Usia peminjam min. 21 thn.</li>
                    <li>Kelengkapan data.</li>
                  </ol>
                </Accordion.Body>
              </Accordion.Item>

              <AccordionItem eventKey="3">
                <Accordion.Header>
                  Dokumen Persyaratan Pinjaman &nbsp; Wiraswasta
                </Accordion.Header>
                <AccordionBody>
                  <ol>
                    <li>
                      Data Calon Debitur
                      <ol>
                        <li>Foto Copy KTP Pengurus</li>
                        <li>
                          Foto Copy Akte Pendirian & Perubahannya (Lengkap)
                        </li>
                        <li>Foto Copy SK MenKeh (Lengkap)</li>
                        <li>Foto Copy Lembaran Berita Negara</li>
                        <li>Foto Copy RUPS</li>
                      </ol>
                    </li>
                    <li>
                      Dokumen Perizinan
                      <ol>
                        <li>Foto Copy NPWP Badan Usaha</li>
                        <li>Foto Copy NPWP Pengurus</li>
                        <li>Foto Copy SIUP/NIB</li>
                        <li>Foto Copy TDP</li>
                        <li>Foto Copy Domisili Usaha</li>
                      </ol>
                    </li>
                    <li>
                      Data Keuangan / Usaha
                      <ol>
                        <li>
                          Foto Copy Rekening Koran/Tabungan 6 Bulan Terakhir
                        </li>
                        <li>Foto Copy Laporan Keuangan</li>
                        <li>Data Supplier & Customer</li>
                        <li>Foto Copy Invoice/Catatan Penjualan-Pembelian</li>
                        <li>Company Profile, Brosur, Pricelist</li>
                      </ol>
                    </li>
                    <li>
                      Data Jaminan / Agunan
                      <ol>
                        <li>
                          Foto Copy Sertifikat Tanah/Bangunan/Bukti
                          Kepemilikan/Surat Berharga
                        </li>
                        <li>Foto Copy Akte Jual Beli</li>
                        <li>Foto Copy IMB</li>
                        <li>Foto Copy PBB Terakhir</li>
                      </ol>
                    </li>
                  </ol>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem eventKey="4">
                <Accordion.Header>
                  Dokumen Persyaratan Pinjaman &nbsp; Perusahaan
                </Accordion.Header>
                <AccordionBody>
                  <ol>
                    <li>
                      Data Calon Debitur
                      <ol>
                        <li>Foto Copy KTP Pengurus</li>
                        <li>
                          Foto Copy Akte Pendirian & Perubahannya (Lengkap)
                        </li>
                        <li>Foto Copy SK MenKeh (Lengkap)</li>
                        <li>Foto Copy Lembaran Berita Negara</li>
                        <li>Foto Copy RUPS</li>
                      </ol>
                    </li>
                    <li>
                      Dokumen Perizinan
                      <ol>
                        <li>Foto Copy NPWP Badan Usaha</li>
                        <li>Foto Copy NPWP Pengurus</li>
                        <li>Foto Copy SIUP/NIB</li>
                        <li>Foto Copy TDP</li>
                        <li>Foto Copy Domisili Usaha</li>
                      </ol>
                    </li>
                    <li>
                      Data Keuangan / Usaha
                      <ol>
                        <li>
                          Foto Copy Rekening Koran/Tabungan 6 Bulan Terakhir
                        </li>
                        <li>Foto Copy Laporan Keuangan</li>
                        <li>Data Supplier & Customer</li>
                        <li>Foto Copy Invoice/Catatan Penjualan-Pembelian</li>
                        <li>Company Profile, Brosur, Pricelist</li>
                      </ol>
                    </li>
                    <li>
                      Data Jaminan / Agunan
                      <ol>
                        <li>
                          Foto Copy Sertifikat Tanah/Bangunan/Bukti
                          Kepemilikan/Surat Berharga
                        </li>
                        <li>Foto Copy Akte Jual Beli</li>
                        <li>Foto Copy IMB</li>
                        <li>Foto Copy PBB Terakhir</li>
                      </ol>
                    </li>
                  </ol>
                </AccordionBody>
              </AccordionItem>
            </Accordion>
            <i style={{ color: "red" }}>
              *suku bunga pinjaman sesuai dengan syarat dan ketentuan yang
              berlaku
            </i>
          </div>
        </section>
      </section>
      <section className="calkulator-pinjaman">
        <KalkulatorKredit1 />
      </section>
    </div>
  );
};
export default Kreditkerja;
