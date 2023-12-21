import React from "react";
import "../../css/Layanan/lelang.css";
import { Carousel } from "react-bootstrap";
import { DataLelang } from "../../database/dataLelang";
import Icon from "@mdi/react";
import { mdiHomeClockOutline, mdiEmailCheck, mdiCashCheck } from "@mdi/js";
import { IoMdPricetags } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

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
                      {dataLelang.map((lelangItem, lelangIndex) => (
                        <ul key={lelangIndex}>
                          {lelangItem.deskripsi.map((desc, descIndex) => (
                            <li key={descIndex}>{desc[descIndex]}</li>
                          ))}
                        </ul>
                      ))}
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

      <section className="keunggulan-produk">
        <div className="container-keunggulan">
          <h2>Informasi Lelang</h2>
          <div className="container-cart-keunggulan">
            <div className="cart-keunggulan">
              <IoMdPricetags className="react-icon" />
              <h3>Harga lelang</h3>
              <Icon path={mdiCashCheck} size={4} className="icon" />
              <h3>Harga Lelang</h3>
              {dataLelang.map((item, index) => {
                return <p>{item.DetailAset[0].HargaPasar}</p>;
              })}
            </div>
            <div className="cart-keunggulan">
              <FaPhoneAlt className="react-icon" />
              <h3>Kontak informasi lelang</h3>
              <a
                href="https://wa.me/6282122753683"
                target="blank"
                className="a_lelang"
              >
                +62 821-2275-3683 (Beni Wijaya)
              </a>
            </div>
            <div className="cart-keunggulan">
              <MdOutlineMailOutline className="react-icon" />
              <h3>Email</h3>
              <a
                href="https://support.google.com/mail/answer/8494?hl=id&co=GENIE.Platform%3DDesktop"
                target="blank"
                className="a_lelang"
              >
                bprsembada@bprsembada.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailLelang;
