import React, { useEffect } from "react";
import NavBar from "../components/NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Footer from "../components/Footer/Footer";
import Table from "../components/Table/Table";
import SideBar from "../components/SideBar/SideBar";
import { useDispatch } from "react-redux";
import { fetchNaskah } from "../store/reducers/dummyDataSlice";
function LaporanDitolak() {
  const dispatch = useDispatch();
  const navigation = useNavigate()
  const token = Cookies.get("token")
  useEffect(() => {
    dispatch(fetchNaskah());
  }, []);
  useEffect(() => {
    if(!token){
      navigation("/login")
      window.location.reload()
    }
  })
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
        <main className="main pt-5 pb-5 px-2" style={{ width: "83%" }}>
          <div className="container main-container bg-white p-5">
            <div className="mx-5 mt-3 mb-4">
              <h2 className="pb-3">Daftar Naskah Ditolak</h2>
            </div>
            <div className="container table-container panel panel-default">
              <Table isReject />
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default LaporanDitolak;