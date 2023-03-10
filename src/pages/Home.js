import React, { useEffect } from "react";
import NavBar from "../components/NavBar/NavBar";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Footer from "../components/Footer/Footer";
import Table from "../components/Table/Table";
import SideBar from "../components/SideBar/SideBar";
import { useSelector, useDispatch } from "react-redux";
import iconHome from "../assets/icon-sidebar-home.png";
import iconLaporan from "../assets/icon-sidebar-laporan.png";
import iconTTD from "../assets/icon-sidebar-ttd.png";
import iconVerify from "../assets/icon-verify.png";
import iconRevisi from "../assets/icon-revisi.png";
import iconKirim from "../assets/icon-sidebar-kirim.png";
import iconSelesai from "../assets/icon-sidebar-selesai.png";
import CardHomeLaporan from "../components/CardHomeLaporan/CardHomeLaporan";
import { fetchNaskah } from "../store/reducers/dummyDataSlice";
function Home() {
  const navigation = useNavigate();
  const { data } = useSelector((state) => state.dummyData);
  const dispatch = useDispatch();
  const dataPerluVerifikasi = data
    ? data
        .filter((item) => {
          return (
            item.status_verifikasi == false && item.status_ditolak === false
          );
        })
        .map((item) => item)
    : [];
  const dataPerluDikirim = data
    ? data
        .filter((item) => {
          return item.status_kirim == false && item.status_ditolak === false;
        })
        .map((item) => item)
    : [];

  const dataButuhTTD = data
    ? data
        .filter((item) => {
          return item.status_ttd == false && item.status_ditolak === false;
        })
        .map((item) => item)
    : [];
  const dataVerifikasi = data
    ? data
        .filter((item) => {
          return (
            item.status_verifikasi == false && item.status_ditolak === false
          );
        })
        .map((item) => item)
    : [];

  const dataSelesai = data
    ? data
        .filter((item) => {
          return item.status_kirim == true && item.status_ditolak === false;
        })
        .map((item) => item)
    : [];
  const dataDitolak = data
    ? data
        .filter((item) => {
          return item.status_ditolak === true;
        })
        .map((item) => item)
    : [];

  useEffect(() => {
    if (!Cookies.get("token")) {
      navigation("/login");
    }
  }, [Cookies.get("token")]);

  useEffect(() => {
    dispatch(fetchNaskah());
    setInterval(() => {
      // console.log("token", Cookies.get("token"))
      if (!Cookies.get("token")) {
        navigation("/login");
      } else {
        dispatch(fetchNaskah());
      }
    }, 45000);
  }, []);
  return (
    <>
      <NavBar />
      <div className="d-flex flex-row justify-content-center">
        <div
          className="pt-3"
          style={{ width: "17%", borderRight: "2px solid #A19F9F" }}
        >
          <SideBar />
        </div>
        <main className="main-home pt-5 pb-5 px-2" style={{ width: "83%" }}>
          <div className="w-100 d-flex justify-content-center mt-5 flex-row flex-wrap align-items-center gap-5">
            {data && (
              <>
                <CardHomeLaporan
                  img={iconLaporan}
                  size={data.length}
                  url={"/reports"}
                  label={"Total Naskah Aktif"}
                />
                <CardHomeLaporan
                  img={iconVerify}
                  size={dataPerluVerifikasi.length}
                  url={"/reports-verifikasi"}
                  label={"Total Naskah Perlu Verifikasi"}
                />
                <CardHomeLaporan
                  img={iconKirim}
                  size={dataPerluDikirim.length}
                  url={"/reports-send"}
                  label={"Total Naskah Perlu Dikirim"}
                />
                <CardHomeLaporan
                  img={iconTTD}
                  size={dataButuhTTD.length}
                  url={"/reports-ttd"}
                  label={"Total Naskah Perlu Di Tandatangan"}
                />
                {/* <CardHomeLaporan
                  img={iconRevisi}
                  size={dataButuhTTD.length}
                  url={"/reports-revisi"}
                  label={"Total Naskah Perlu Di Revisi"}
                /> */}
                <CardHomeLaporan
                  img={iconSelesai}
                  size={dataSelesai.length}
                  url={"/reports-done"}
                  label={"Total Naskah Selesai"}
                />
                <CardHomeLaporan
                  img={
                    "https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/64/null/external-reject-export-and-delivery-xnimrodx-lineal-xnimrodx.png"
                  }
                  size={dataDitolak.length}
                  url={"/reports-rejected"}
                  label={"Total Naskah Ditolak"}
                />
              </>
            )}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Home;
