import React from "react";
import TutWuri from "../tutwurihandayani.png";
import Pemko from "../pemko.png";
import nomorsurat from "../nomorsuratstatistik.png";
function SuratPindahRayonMasuk(props) {
  return (
    <div className="borang" style={{ backgroundColor: "white" }}>
      <div className="headerKop d-flex ">
        <div className="pemkob ">
          <img src={Pemko} alt="" width={"130px"} height={"140px"} />
        </div>
        <div className="pembkobTitle ">
          <div className="text-center">
            <h5>PEMERINTAH KOTA TANJUNGPINANG</h5>
            <h5>DINAS PENDIDIKAN</h5>
            <p>
              Jl. Soekarno Hatta No. 1 Tanjungpinang, Web :
              disdik.tanjungpinangkota.go.id
            </p>
            <p>Email : disdik@tanjungpinangkota.go.id</p>
            <p>Tanjungpinang - Kepulauan Riau - Kode Pos 29113</p>
          </div>
        </div>
      </div>

      <div className="titleBorang text-center d-flex flex-column justify-content-center align-items-center">
        <p className="title text-center mt-2">REKOMENDASI</p>
        <p>Nomor : 422/ {props.data.nomor_naskah} / 5.3.01 / 2023</p>
        <p>TENTANG</p>
        <p>PINDAH RAYON</p>
      </div>
      <div className="content d-flex flex-column justify-content-start  mx-5">
        <p className="mt-2">
          &emsp;&emsp;&emsp;&emsp;Kepala Dinas Pendidikan Kota Tanjungpinang
          dengan ini merekomendasikan nama di bawah ini :
        </p>
        <div className="contentData align-self-start w-100">
          <div className="">
            <p className="d-flex  flex-row" style={{ gap: "10.6rem" }}>
              <span className=""> Nama </span>
              <span>: {props.data.nama_siswa}</span>
            </p>
          </div>
          <div className="">
            <p className="d-flex  flex-row" style={{ gap: "6.3rem" }}>
              <span className=""> Tempat/Tgl Lahir </span>
              <span>: {props.data.tempat_tanggal_lahir}</span>
            </p>
          </div>
          <div className="">
            <p className="d-flex  flex-row" style={{ gap: "11.6rem" }}>
              <span className=""> NIS </span>
              <span>: {props.data.nis_siswa}</span>
            </p>
          </div>
          <div className="">
            <p className="d-flex  flex-row" style={{ gap: "11rem" }}>
              <span className=""> NISN </span>
              <span>: {props.data.nisn_siswa}</span>
            </p>
          </div>

          <div className="">
            <p className="d-flex  flex-row" style={{ gap: "7.6rem" }}>
              <span className=""> Jenis Kelamin </span>
              <span>: {props.data.jenis_kelamin}</span>
            </p>
          </div>
          <div className="">
            <p className="d-flex  flex-row" style={{ gap: "11rem" }}>
              <span className="">Kelas </span>
              <span>: {props.data.kelas}</span>
            </p>
          </div>
          <div className="">
            <p className="d-flex  flex-row" style={{ gap: "1rem" }}>
              <span className="">Tahun Pelajaran Lulus Sekolah</span>
              <span>: {props.data.tahun_lulus}</span>
            </p>
          </div>

          <div className="">
            <p className="d-flex  flex-row" style={{ gap: "7rem" }}>
              <span className="">Sekolah Tujuan </span>
              <span>: {props.data.asal_sekolah}</span>
            </p>
          </div>
          <div className="">
            <p className="d-flex  flex-row" style={{ gap: "2rem" }}>
              <span className="">Keterangan / Alasan Pindah </span>
              <span>: {props.data.alasan_pindah}</span>
            </p>
          </div>
          <div className="">
            <p className="d-flex  flex-row" style={{ gap: "6.3rem" }}>
              <span className=""> Nama Orang Tua </span>
              <span>: {props.data.nama_ortu}</span>
            </p>
          </div>
          <div className="">
            <p className="d-flex  flex-row" style={{ gap: "4.7rem" }}>
              <span className=""> Pekerjaan Orang Tua</span>
              <span>: {props.data.pekerjaan_ortu}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="content d-flex flex-column justify-content-start mt-3  mx-5">
        <p style={{ textAlign: "justify" }}>
          &emsp;&emsp;&emsp;&emsp;Peserta Didik yang bersangkutan telah memenuhi
          persyaratan pindah rayon dan dapat diterima di satuan pendidikan Kota
          Tanjungpinang.
        </p>
        <p style={{ textAlign: "justify" }}>
          &emsp;&emsp;&emsp;&emsp;Demikian disampaikan untuk dipergunakan
          sebagaimana mestinya.
        </p>
      </div>
      <div className="d-flex mt-2 justify-content-end">
        <div className="ttdBorang text-center me-5">
          <p>Tanjungpinang , {props.data.tanggal_disposisi}</p>
          <p>a.n KEPALA DINAS PENDIDIKAN</p>
          <p>KOTA TANJUNGPINANG</p>
          <p>
            {props.data.yang_menandatangani === "KASUBAG"
              ? "KASUBBAG UMUM DAN KEPEGAWAIAN"
              : "SEKRETARIS"}
          </p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <p>{props.data.nama_yang_menandatangani}</p>
          <p>NIP : {`${props.data.nip}`}</p>
        </div>
      </div>
    </div>
  );
}

export default SuratPindahRayonMasuk;
