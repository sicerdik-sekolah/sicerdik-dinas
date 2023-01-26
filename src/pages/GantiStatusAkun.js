import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import FormCard from "../components/FormCard/FormCard";
import { useSelector, useDispatch } from "react-redux";
import { changeStatusAkun } from "../store/reducers/dummyDataManajemenAkunSlice";
import NavBarManajemenAkun from "../components/NavBarManajemenAkun/NavBarManajemenAkun";
import ButtonFormView from "../components/ButtonFormView/ButtonFormView";
function GantiStatusAkun(props) {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data } = useSelector((state) => state.dummyDataManajemenAkun);
  const targetData = data.find((item) => item._id === id);
  // const [statusAkun, setStatusAkun] = useState(targetData.statusAkun);
  // const handleChange = (e) => {
  //   setStatusAkun(e.target.value);

  // };
  const changeStatus = () => {
    dispatch(changeStatusAkun(id));
    navigation("/manajemen-akun/users");
    // window.location.reload();
  };
  return (
    <>
      <NavBarManajemenAkun />
      <main className="main pt-5 pb-5" style={{ height: "100vh" }}>
        <FormCard>
          <div className="mx-4 mt-3 mb-4 formCardHead">
            <h3 className="pb-3">
              Ganti Status - {targetData.email} | {targetData.nip} |{" "}
              {targetData.asal_sekolah}
            </h3>
          </div>
          <div className="mx-5 mt-3 mb-4">
            <form className="verifikasiPenandatangan">
              <h4 className="ms-3">Ganti Status Akun Menjadi :</h4>
              <Form.Select required>
                <option value={true}>
                  {" "}
                  {targetData.statusAkun === true ? "Mati" : "Aktif"}
                </option>
                {/* <option value={false}>Mati </option> */}
              </Form.Select>
              <div className="d-flex justify-content-center align-items-center gap-4 mt-4">
                <ButtonFormView isprimary onClick={changeStatus}>
                  Ganti Status
                </ButtonFormView>
                <ButtonFormView
                  isinfo
                  // onClick={}
                >
                  Batalkan
                </ButtonFormView>
              </div>
            </form>
          </div>
        </FormCard>
      </main>
      <Footer></Footer>
    </>
  );
}

export default GantiStatusAkun;
