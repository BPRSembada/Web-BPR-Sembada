import "../../css/Hubungi-Kami/karir.css";
import { Table, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Accordion } from "react-bootstrap";

const Karir = () => {
  const PEAudit = () => (
    <Card className="karirCard" style={{ width: "20rem", height: "100%" }}>
      <Card.Body>
        <Card.Title> Pejabat Eksekutif Audit Internal </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Supervisor</Card.Subtitle>
        <Card.Text>
          Min 3 tahun, diutamakan pengalaman sebagai Audit Internal/Auditor pada
          Khususnya dibagian kredit dan operasional di BPR / Bank Umum dan atau
          Lembaga keuangan lainnya
        </Card.Text>
        <br />
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Deskripsi Pekerjaan</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>
                  {" "}
                  Melakukan pemeriksaan untuk menjamin semua kegiatan usaha Bank
                  telah dilaksanakan sesuai dengan ketentuan dan peraturan yang
                  berlaku
                </li>
                <li> Menyusun rencana kerja dan anggaran. </li>
                <li>
                  Membantu tugas Direktur dan Dewan Komisaris dalam melakukan
                  pengawasan operasional BPR yang mencakup perencanaan,
                  pelaksanaan, maupun pemantauan hasil Audit{" "}
                </li>
                <li>
                  {" "}
                  Membuat analisis dan penilaian, mengontrol dan memeriksa
                  pelaksanaan fungsi audit internal yang ada untuk memastikan
                  semuanya sesuai dengan strategi, kebijakan, sistem dan rencana
                  kerja yang telah disusun{" "}
                </li>
                <li>
                  Membuat dan menyusun laporan hasil pemeriksaan secara benar,
                  lengkap dan tepat waktu{" "}
                </li>
                <li>
                  Melaksanakan tugas lainnya yang diberikan dengan penuh
                  tanggung jawab{" "}
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Kualifikasi</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li> Laki-Laki/Perempuan maksimal 40 thn. </li>
                <li>Pendidikan Min S1 Jurusan Akuntansi/Keuangan</li>
                <li>
                  Mempunyai kemampuan berkomunikasi, berkoordinasi dan bekerja
                  dalam team
                </li>
                <li>
                  Memiliki loyalitas, integritas, teliti, disiplin, dan siap
                  bekerja dibawah tekanan{" "}
                </li>
                <li>Menguasai MS Office (Word, Excel) </li>
                <li>Rapi dalam administrasi</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card.Body>
    </Card>
  );

  return (
    <div>
      <div className="hero-section-karir"></div>
      <div className="cont-form-karir">
        <h2>Posisi yang tersedia</h2>
        <p>
          Karir - Lowongan Kerja Bank Perkreditan Rakyat Indonesia. Kami Membuka
          Loker Pada Kandidat Terbaik dan Berprestasi Untuk Bergabung Bersama
          Officer Bank Sembada.
        </p>
        <Table>
          <thead>
            <tr>
              <th>No</th>
              <th>Jabatan</th>
              <th>Lokasi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Pejabat Eksekutif Audit Internal</td>
              <td>Jakarta Pusat</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Legal Officer</td>
              <td>Jakarta Pusat</td>
            </tr>
            <tr>
              <td>3</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
        <Button
          href="https://wa.me/62818676898"
          variant="danger"
          className="me-3"
        >
          Hubungi HRD
        </Button>
        {/* <Button variant="warning">Download Form</Button> */}
      </div>
      <div className="listKarir">
        <p>{PEAudit()}</p>
      </div>
    </div>
  );
};
export default Karir;
