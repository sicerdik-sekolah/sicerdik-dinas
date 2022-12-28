import React, {useEffect} from "react";
import Table from "react-bootstrap/Table";
import TableBodyManajemenAkun from "../TableBodyManajemenAkun/TableBodyManajemenAkun";
import TableHeader from "../TableHeader/TableHeader";
import { useSelector, useDispatch } from "react-redux";
import {fetchAllUsers} from "../../store/reducers/dummyDataManajemenAkunSlice"
function TableUsers() {
  const tableHeader = [
    "ID",
    "Nama",
    "Email",
    "NIP",
    "Tempat Bekerja",
    "Status Akun",
    "Ganti Status Akun",
    "Reset Password",
  ];
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.dummyDataManajemenAkun);
  useEffect(() => {
    dispatch(fetchAllUsers())
  },[])
  return (
    <Table responsive striped bordered>
      <TableHeader dataRow={tableHeader} />
      <TableBodyManajemenAkun data={data} />
    </Table>
  );
}

export default TableUsers;
