import React from "react";
import Navibar from "./component/Navibar";
import { Route, Routes } from "react-router-dom";
import "./App.css";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";

import SideMenu from "./component/SideMenu";
// test corousel home
import HomeCarousel from "./component/carousel/home_carousel";
// import All Page
import Home from "./pages/home";
// import Footers from "./component/Footers";
import NewFooter from "./component/newFooter";
// simpanan
import SimpKonvensional from "./pages/Simpanan/simKonvensional";

// pinjaman
import Kreditkerja from "./pages/Pinjaman/kreditKeja";
import KreditKonsumtif from "./pages/Pinjaman/kreditKonsumtif";
import Investasi from "./pages/Pinjaman/investasi";

// form produk
import FormSimpanan from "./pages/Forms/formSimpanan";
import FormKredit from "./pages/Forms/formKredit";
import FormSDB from "./pages/Forms/formsdb";

// tentang kami
import VisiMisi from "./pages/Tentang-Kami/visiMisi";
import ProfilPerus from "./pages/Tentang-Kami/profilPerusahaan";
import StrukturOrgn from "./pages/Tentang-Kami/strukturOrganisasi";
import Strategi from "./pages/Tentang-Kami/strategi";
import PengaduanNasabah from "./pages/Hubungi-Kami/pengaduanNasabah";
import LaporanKeuangan from "./pages/Tentang-Kami/laporankeuangan";

// hubungi kami
import KontakKami from "./pages/Hubungi-Kami/kontakKami";
import Kemitraan from "./pages/Hubungi-Kami/kemitraan";
import Karir from "./pages/Hubungi-Kami/karir";

// layanan
import PaymentPointOnlineBangking from "./pages/Layanan/paymentPoin";
import SaveDepositBox from "./pages/Layanan/saveDepositBox";
import Deposito from "./pages/Simpanan/deposito";

import LelangPage from "./pages/Layanan/lelang";
import DetailLelang from "./pages/Layanan/detailLelang";

// sweeper

class App extends React.Component {
  componentDidMount() {
    AOS.init();
    AOS.refresh();
  }
  render() {
    return (
      <div className="App">
        <Navibar />
        <SideMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deposito" element={<Deposito />} />
          <Route path="/simKonvensional" element={<SimpKonvensional />} />
          <Route path="/kreditKerja" element={<Kreditkerja />} />
          <Route path="/kreditKonsumtif" element={<KreditKonsumtif />} />
          <Route path="/investasi" element={<Investasi />} />
          <Route path="/visiMisi" element={<VisiMisi />} />
          <Route path="/profilPerusahaan" element={<ProfilPerus />} />
          <Route path="/strukturOrganisasi" element={<StrukturOrgn />} />
          <Route path="/strategi" element={<Strategi />} />
          <Route path="/pengaduanNasabah" element={<PengaduanNasabah />} />
          <Route path="/laporankeuangan" element={<LaporanKeuangan />} />
          <Route path="/kontakKami" element={<KontakKami />} />
          <Route path="/kemitraan" element={<Kemitraan />} />
          <Route path="/karir" element={<Karir />} />

          <Route path="/formSDB" element={<FormSDB />} />

          <Route
            path="/paymentPoint"
            element={<PaymentPointOnlineBangking />}
          />
          <Route path="/saveDepositBox" element={<SaveDepositBox />} />
          <Route path="/formSimpanan" element={<FormSimpanan />} />
          <Route path="/formKredit" element={<FormKredit />} />
          <Route path="/lelangPage" element={<LelangPage />} />
          <Route path="/detailLelang" element={<DetailLelang />} />
          <Route path="/HC" element={<HomeCarousel />} />
        </Routes>
        {/* <Footers /> */}
        <NewFooter />
      </div>
    );
  }
}

export default App;
