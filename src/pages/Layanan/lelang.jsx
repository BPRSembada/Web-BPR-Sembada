import React from "react";
import "../../css/Layanan/lelang.css";
import { Card, Button } from "react-bootstrap";
import { DataLelang } from "../../database/dataLelang";
import { Link } from "react-router-dom";

const LelangPage = () => {
  return (
    <div>
      <div className="hero_lelang"></div>
      <div className="container-lelang">
        <h2>Lelang jaminan Bank Sembada</h2>
        <div className="card-container-lelang">
          {DataLelang.map((item, index) => {
            return (
              <Card style={{ width: "20rem" }}>
                <Card.Img
                  variant="top"
                  src={item.detailPicture[0]}
                  className="lelang-card"
                />
                <Card.Body>
                  <Card.Title>{item.Judul}</Card.Title>
                  <Card.Text className="mb-1 text_lelang">
                    {item.Lokasi[0].Alamat}
                  </Card.Text>
                </Card.Body>
                <Button
                  variant="danger"
                  as={Link}
                  to={`/detailLelang?${item.id}`}
                  style={{ marginInline: "1rem", marginBottom: "1rem" }}
                >
                  Lihat detail
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LelangPage;
