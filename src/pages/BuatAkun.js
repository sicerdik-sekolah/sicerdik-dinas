import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import NavBarManajemenAkun from "../components/NavBarManajemenAkun/NavBarManajemenAkun";
import InputFormWithLabel from "../components/InputFormWithLabel/InputFormWithLabel";
import InputWithSelect from "../components/InputWithSelect/InputWithSelect";
import { Form } from "react-bootstrap";
import ButtonFormView from "../components/ButtonFormView/ButtonFormView";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { apiPath } from "../config";
import Cookies from "js-cookie";
import { useEffect } from "react";
function BuatAkun() {
  const navigation = useNavigate();
  const [jenisAkun, setJenisAkun] = useState("disdik");
  const token = Cookies.get("token");
  const [form, setForm] = useState({
    email: "",
    password: "",
    nik: "",
    nip: "",
    tempat: "",
    role: "",
    nama : ""
  });
  const [jabatan, setJabatan] = useState("sekretaris");
  const handleChangeJenisAkun = (e) => {
    setJenisAkun(e.target.value);
  };
  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleChangeJabatan = (e) => {
    setJabatan(e.target.value);
  };
  const makeAccount = async () => {
    if(jenisAkun === "disdik"){
      try {
        const { email, password, nik, nip, tempat,nama } = form;
        const payload = {
          email,
          nama,
          password,
          confirmPassword: password,
          nik,
          nip,
          tempat: tempat.toUpperCase(),
          role: jabatan,
        };
        console.log("payload signup >> ", payload);
        const data = await axios.post(`${apiPath}/cms/akun`, payload, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }else if(jenisAkun === "sekolah"){
      try {
        const { email, password, nik, nip, tempat,nama } = form;
        const payload = {
          email,
          nama,
          password,
          confirmPassword: password,
          nik,
          nip,
          tempat: tempat.toUpperCase(),
          role: jabatan,
        };
        console.log("payload signup >> ", payload);
        const data = await axios.post(`${apiPath}/cms/akun`, payload, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleCreateAkun = (e) => {
    const { email, password, nik, nip, tempat, nama } = form;
    if(password.length < 8){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password harus lebih dari 8 karakter",
      });
    }
    else if (email && password && nik && nip && tempat && jabatan && password.length >= 8) {
      e.preventDefault();
      Swal.fire({
        title: "Buatkan Akun ?",
        showDenyButton: true,
        confirmButtonText: "Buat",
        denyButtonText: `Batalkan`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          console.log("form >>> ", form);
          console.log("role >>> ", jabatan);
          makeAccount();
          Swal.fire("Akun Berhasil Dibuat!", "", "success");
          // navigation("/manajemen-akun/users");
          // window.location.reload();
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ada data yang tidak terisi!",
      });
    }
  };
  useEffect(() => {
    if (!token) {
      navigation("/login");
    }
  }, []);

  
  return (
    <>
      <NavBarManajemenAkun />

      <main className="main pt-5 pb-5">
        <div className="container main-container bg-white p-5">
          <div className="mx-5 mt-3 mb-4">
            <h2 className="pb-3">Buat Akun</h2>
          </div>
          <div className="container table-container panel panel-default">
            <div className="mx-5 d-flex flex-column gap-3 ">
              <div className="d-flex flex-column gap-2">
                <label className="label-select-akun">Jenis Akun : </label>
                <Form.Select onChange={handleChangeJenisAkun}>
                  <option value={"disdik"}>DISDIK </option>
                  <option value={"sekolah"}>SEKOLAH</option>
                </Form.Select>
              </div>
              <InputFormWithLabel
                label={"Nama"}
                type={"text"}
                name={"nama"}
                placeholder={"Raden Syaga"}
                onChange={handleChangeForm}
                value={form.nama}
                isRequired
              />
              <InputFormWithLabel
                label={"Email"}
                type={"email"}
                name={"email"}
                placeholder={"example@gmail.com"}
                onChange={handleChangeForm}
                value={form.email}
                isRequired
              />
              <InputFormWithLabel
                label={"Password"}
                type={"password"}
                name={"password"}
                onChange={handleChangeForm}
                placeholder={"Masukkan Password"}
                value={form.password}
                isRequired
              />
              <InputFormWithLabel
                label={"NIK"}
                type={"number"}
                placeholder={"Masukkan NIK"}
                name={"nik"}
                onChange={handleChangeForm}
                value={form.nik}
                isRequired
              />
              <InputFormWithLabel
                label={"NIP"}
                type={"number"}
                name={"nip"}
                value={form.nip}
                placeholder={"Masukkan NIP"}
                onChange={handleChangeForm}
                isRequired
              />
              <InputFormWithLabel
                label={`${
                  jenisAkun === "disdik"
                    ? "Input Tempat Dinas"
                    : "Input Nama Sekolah"
                }`}
                type={"text"}
                name={"tempat"}
                onChange={handleChangeForm}
                value={form.tempat}
                placeholder={`${
                  jenisAkun === "disdik"
                    ? "Contoh : DINAS PENDIDIKAN TPI"
                    : "Contoh : SD NEGERI 014 BINAAN BUKIT BESTARI"
                }`}
                isRequired
              />
              <div className="d-flex flex-column gap-3">
                <label className="label-select-akun">Jabatan Akun : </label>
                <Form.Select onChange={handleChangeJabatan}>
                  {jenisAkun === "disdik" ? (
                    <>
                      <option value={"sekretaris"}>Sekretaris Disdik</option>
                      <option value={"kasubag"}>Kasubag DISDIK</option>
                      <option value={"staff"}>Staff DISDIK</option>
                    </>
                  ) : (
                    <>
                      <option value={"kepala_sekolah"}>Kepala Sekolah</option>
                      <option value={"staff_sekolah"}>Staff Sekolah</option>
                    </>
                  )}
                </Form.Select>
              </div>
              <div className="d-flex justify-content-center align-items-center mt-3">
                <ButtonFormView onClick={handleCreateAkun} isprimary>
                  Buat Akun
                </ButtonFormView>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default BuatAkun;
