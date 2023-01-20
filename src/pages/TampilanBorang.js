import WebViewer from "@pdftron/webviewer";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import dapatkanBulan from "../utils/getMonth";
import SideBar from "../components/SideBar/SideBar";
import { useReactToPrint } from "react-to-print";

import { useEffect, useRef } from "react";
import {
  useParams,
  useLocation,
  useSearchParams,
  useNavigate,
} from "react-router-dom";

import moment from "moment/moment";
import { useState } from "react";
import SuratPindahSekolahKeluar from "../components/TemplateBorang/SuratPindahSekolahKeluar/SuratPindahSekolahKeluar";
import ButtonFormView from "../components/ButtonFormView/ButtonFormView";
import SuratPindahRayonKeluar from "../components/TemplateBorang/SuratPindahRayonKeluar/SuratPindahRayonKeluar";
import SuratPindahSekolahMasuk from "../components/TemplateBorang/SuratPindahSekolahMasuk/SuratPindahSekolahMasuk";
import SuratPindahRayonMasuk from "../components/TemplateBorang/SuratPindahRayonMasuk/SuratPindahRayonMasuk";

function TampilanBorang(props) {
  const viewer = useRef(null);
  const navigation = useNavigate();
  const [searchParams] = useSearchParams();

  const dateMasuk = new Date(searchParams.get("tanggal_naskah_masuk"));
  const tanggalMasuk = dateMasuk.getDate();
  const bulanMasuk = dapatkanBulan(dateMasuk.getMonth() + 1);
  const tahunMasuk = dateMasuk.getFullYear();
  const datedisposisi = new Date(searchParams.get("tanggal_disposisi"));
  // console.log("dateDisposisi >> ", datedisposisi);
  const tanggaldisposisi = datedisposisi.getDate();
  const bulandisposisi = dapatkanBulan(datedisposisi.getMonth() + 1);
  const tahundisposisi = datedisposisi.getFullYear();
  const yang_menandatangani = searchParams
    .get("yang_menandatangani")
    .toUpperCase();
  const namaPenandatangan = searchParams
    .get("nama_yang_menandatangani")
    .toUpperCase();

  const [jenisSurat, setJenisSurat] = useState(searchParams.get("jenis_surat"));
  const printArea = useRef();
  const handlePrint = useReactToPrint({
    content: () => printArea.current,
    documentTitle: "emp-data",
  });
  // console.log(jenisSurat);
  const jsonData = {
    nama_siswa: searchParams.get("nama_siswa"),
    nomor_laporan: searchParams.get("nomor_laporan"),
    asal_sekolah: searchParams.get("asal_sekolah"),
    nomor_naskah: searchParams.get("nomor_naskah"),
    nisn_siswa: searchParams.get("nisn_siswa"),
    nis_siswa: searchParams.get("nis_siswa"),
    tujuan_sekolah: searchParams.get("tujuan_sekolah"),
    nomor_naskah: searchParams.get("nomor_naskah"),
    kelas: searchParams.get("kelas"),
    alasan_pindah: searchParams.get("alasan_pindah"),
    nama_ortu: searchParams.get("nama_ortu"),
    pekerjaan_ortu: searchParams.get("pekerjaan_ortu"),
    jenis_kelamin: searchParams.get("jenis_kelamin"),
    tempat_tanggal_lahir: searchParams.get("tempat_tanggal_lahir"),
    yang_menandatangani: yang_menandatangani,
    nama_yang_menandatangani: namaPenandatangan,
    nip: searchParams.get("nip"),
    tahun_lulus: searchParams.get("tahun_lulus"),
    tanggal_naskah_masuk: `${tanggalMasuk} ${bulanMasuk} ${tahunMasuk}`,
    tanggal_disposisi: `${tanggaldisposisi} ${bulandisposisi} ${tahundisposisi}`,
  };
  // console.log("searchparams >> ", searchParams.get("nama_siswa"));
  // console.log("props >> ", props);

  // console.log("query >> ", jsonData);

  return (
    <div>
      <NavBar />
      <div className="d-flex flex-row justify-content-center">
        <div
          className="pt-3"
          style={{ width: "17%", borderRight: "2px solid #A19F9F" }}
        >
          <SideBar />
        </div>
        <main className="main pt-5 pb-5 px-2" style={{ width: "83%" }}>
          <div className="d-flex align-items-center mb-4">
            <div
              onClick={() => navigation(-1)}
              style={{ cursor: "pointer", marginRight: "40%" }}
            >
              <img
                src="https://img.icons8.com/pastel-glyph/200/circled-left.png"
                alt=""
                width={"50px"}
                height={"50px"}
              />
            </div>
            <h4 className="text-center">Tampilan Surat</h4>
          </div>
          <div className="d-flex justify-content-center my-3">
            <ButtonFormView onClick={handlePrint}>Cetak Surat</ButtonFormView>
          </div>
          <div
            className="webviewer"
            // ref={viewer}
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div ref={printArea} id="content" style={{ padding: "1rem 2rem" }}>
              {jenisSurat === "REKOMENDASI_PINDAH_SEKOLAH_KELUAR" && (
                <SuratPindahSekolahKeluar data={jsonData} />
              )}
              {jenisSurat === "REKOMENDASI_PINDAH_RAYON_KELUAR" && (
                <SuratPindahRayonKeluar data={jsonData} />
              )}
              {jenisSurat === "REKOMENDASI_PINDAH_SEKOLAH_MASUK" && (
                <SuratPindahSekolahMasuk data={jsonData} />
              )}
              {jenisSurat === "REKOMENDASI_PINDAH_RAYON_MASUK" && (
                <SuratPindahRayonMasuk data={jsonData} />
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default TampilanBorang;
