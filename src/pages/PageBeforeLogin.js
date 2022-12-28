import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import iconSicerdik from "../assets/logo-sicerdik.png";
import ButtonLogin from "../components/ButtonLogin/ButtonLogin";
import iconSicerdikFix from "../assets/logo-sicerdik-fix.png"
function PageBeforeLogin() {
  const navigation = useNavigate();
  const token = Cookies.get("token");

  const handleClick = () => {
    navigation("/login");
  };
  useEffect(() => {
    if (token) {
      navigation("/home");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="portal">
      <div className="container container-portal  d-flex flex-column justify-content-center align-items-center">
        <div className="card">
          <div>
            <img src={iconSicerdik} alt="" width={"100px"}/>
          </div>
          <div className="d-flex flex-column mt-3 justify-content-center align-items-center">
            {/* <h1>SICERDIK</h1>
            <h3>Tanjungpinang</h3> */}
            <img src={iconSicerdikFix} width={"250px"}/>
            <h2 className="mt-4">Dinas Pendidikan</h2>
            <h3 className="mt-2">Kota Tanjungpinang</h3>
            <div className={"btnSection"}>
              <ButtonLogin
                onClickHandle={handleClick}
                title={"Masuk"}
                type={"submit"}
              >
                Masuk
              </ButtonLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageBeforeLogin;
