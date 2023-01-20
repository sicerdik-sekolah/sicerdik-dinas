import React from "react";
import Table from "react-bootstrap/Table";
import TableBody from "../TableBody/TableBody";
import TableHeader from "../TableHeader/TableHeader";
import { useSelector } from "react-redux";
function TableComponent(props) {
  const tableHeader = [
    "Nomor Naskah",
    "Tanggal Naskah Masuk",
    "Nama Siswa",
    "Nisn",
    "Hal",
    "Asal Sekolah",
    "Tujuan Sekolah",
    "Yang Menandatangani",
    "Status Verifikasi",
    "Status Tanda Tangan",
    "Status Kirim",
    "Aksi",
  ];
  const { data } = useSelector((state) => state.dummyData);

  const dataButuhTTD = data? [...data].reverse()
    .filter((item) => {
      return item.status_ttd === false && item.status_ditolak === false;
    })
    .map((item) => item) : [];

  const dataPerluDikirim = data? [...data].reverse()
    .filter((item) => {
      return item.status_kirim === false && item.status_ditolak === false;
    })
    .map((item) => item) : [];

  const dataSelesai = data? [...data].reverse()
    .filter((item) => {
      return item.status_kirim === true && item.status_ditolak === false;
    })
    .map((item) => item) : [];
  const dataVerifikasi = data? [...data].reverse()
    .filter((item) => {
      return item.status_verifikasi === false && item.status_ditolak === false;
    })
    .map((item) => item) : [];
  // console.log(dataSelesai);
    
  const dataDitolak = data? [...data].reverse()
    .filter((item) => {
      return item.status_ditolak === true;
    })
    .map((item) => item) : [];
  // console.log(dataSelesai);
    
  return (
    <Table responsive striped bordered>
      <TableHeader dataRow={tableHeader} />
      {props.isTTD && <TableBody data={dataButuhTTD} />}
      {props.isReject && <TableBody data={dataDitolak} />}
      {props.isVerifikasi && <TableBody data={dataVerifikasi} />}
      {props.isNeedSend && <TableBody data={dataPerluDikirim} />}
      {props.isDone && <TableBody data={dataSelesai} />}
      {!props.isTTD && !props.isNeedSend && !props.isDone && !props.isVerifikasi && !props.isReject &&(
        <TableBody data={[...data].reverse()} />
      )}
      {/* {props.} */}
      {/* <TableBody data={data} /> */}
    </Table>
  );
}

export default TableComponent;
