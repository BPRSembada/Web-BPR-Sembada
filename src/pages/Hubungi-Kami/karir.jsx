import { useState } from "react";
import "../../css/Hubungi-Kami/karir.css";
import { Table, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Accordion } from "react-bootstrap";
import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";
import { karirDatabase } from "../../database/karirDatabase";
const Karir = () => {
  const [dataKarir, setDataKarir] = useState(karirDatabase);
  // console.log(dataKarir);
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
        <div className="listKarir">
          {dataKarir.map((item, index) => {
            return (
              <div className="cart_rekruitmen">
                <img src={item.picture} alt="" />
                <h2>{item.posisi}</h2>
                <div>
                  <Accordion className="kualifikasi_benefit">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Kualifikasi</Accordion.Header>
                      <Accordion.Body>
                        {item.kualifikasi.map((item_kual, index_kual) => {
                          return (
                            <ul>
                              <li>{item_kual}</li>
                            </ul>
                          );
                        })}
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Benefit</Accordion.Header>
                      <Accordion.Body>
                        {item.benefit.map((item_benf, index_benf) => {
                          return (
                            <ul>
                              <li>{item_benf}</li>
                            </ul>
                          );
                        })}
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
                <div className="button_hrd">
                  <Button href="https://wa.me/62818676898" variant="danger" className="item_button_hrd">
                    Hubungi HRD
                  </Button>
                  <Button href="mailto:eddy@bprsembada.com" variant="warning">
                    Kririm CV Melalui Email
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Karir;
