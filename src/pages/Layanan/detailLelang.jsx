import React from "react";
import "../../css/Layanan/lelang.css";
import { Carousel } from "react-bootstrap";
import { DataLelang } from "../../database/dataLelang";
import Icon from "@mdi/react";
import { mdiHomeClockOutline, mdiEmailCheck, mdiCashCheck } from "@mdi/js";

const DetailLelang = () => {
  let idLelang = +document.location.search.substring(1);
  console.log(idLelang);
  let dataLelang = DataLelang.filter((item) => item.id === idLelang);
  console.log(dataLelang);
  console.log("ini detail picturt", dataLelang[0].detailPicture);

  return (
    <div>
      <div className="hero-detail-lelang">
        <div>
          <div></div>
          <img src="" alt="" />
        </div>
      </div>

      <div className="container-detail-lelang">
        <div className="des-img-lelang">
          {dataLelang.map((item, index) => {
            return (
              <div className="des-lelang" key={index}>
                <h2>{item.Judul}</h2>
                <h3 className="mb-2">Detail aset :</h3>
                {item.DetailAset.map((itemDetailAses, indexDetailAset) => {
                  return (
                    <ul key={indexDetailAset}>
                      <li>Luas Tanah : {itemDetailAses.LT}</li>
                      <li>Luas Bangunan : {itemDetailAses.LB}</li>
                      <li>Kamar Tidur : {itemDetailAses.KT}</li>
                      <li>Kamar Mandi : {itemDetailAses.KM}</li>
                      <li>Tingkat : {itemDetailAses.Tingkat}</li>
                    </ul>
                  );
                })}
                {item.Lokasi.map((itemLokasi, indexLokasi) => {
                  return (
                    <div className="alamat-lelang" key={indexLokasi}>
                      <h3>Alamat :</h3>
                      <p className="mb-2">{itemLokasi.Alamat}</p>
                      <h3>Akses Lokasi :</h3>
                      <p className="mb-2">{itemLokasi.navigasi}</p>
                      <h3>Kepemilikan :</h3>
                      {dataLelang[0].deskripsi.map((desc, descIndex) => {
                        return (
                          <ul>
                            <li>{dataLelang[0].deskripsi[descIndex]}</li>
                          </ul>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            );
          })}
          <div className="img-lelang">
            <Carousel>
              {dataLelang[0].detailPicture.map((item, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100 image-detail-lelang"
                    src={item}
                    alt={`Slide ${index}`}
                  />
                  <Carousel.Caption className="descPicture-lelang">
                    <h4>{dataLelang[0].descPicture[index]}</h4>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      <div className="info-lelang">
        <div className="mid-container">
          <h2 data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
            Informasi lelang
          </h2>
          <section class="featuress">
            {/* <div
              className="feature"
              data-aos="flip-left"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <Icon path={mdiHomeClockOutline} size={4} className="icon" />
              <h3>Waktu dan Tempat Lelang</h3>
              {dataLelang.map((item, index) => {
                return (
                  <>
                    <p>Rabu / 27-Sep-2023</p>
                    <p>{item.DetailAset[0].HargaPasar}</p>
                  </>
                );
              })}
            </div> */}

            <div
              className="feature"
              data-aos="flip-left"
              data-aos-duration="1000"
              data-aos-delay="300"
              data-aos-once="true"
            >
              <Icon path={mdiCashCheck} size={4} className="icon" />
              <h3>Harga Lelang</h3>
              {dataLelang.map((item, index) => {
                return <p>{item.DetailAset[0].HargaPasar}</p>;
              })}
            </div>
            <div
              className="feature"
              data-aos="flip-left"
              data-aos-duration="1000"
              data-aos-delay="500"
              data-aos-once="true"
            >
              <Icon path={mdiEmailCheck} size={4} className="icon" />
              <h3>Kontak informasi lelang</h3>
              <a href="https://wa.me/6282122753683" target="blank">
                +62 821-2275-3683 (Beni Wijaya)
              </a>
              <br />
              <a
                href="https://support.google.com/mail/answer/8494?hl=id&co=GENIE.Platform%3DDesktop"
                target="blank"
              >
                bprsembada@bprsembada.com
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DetailLelang;
