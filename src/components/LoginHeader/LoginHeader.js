import React from "react";
import styles from "./LoginHeader.module.css";
import iconSicerdikFix from "../../assets/logo-sicerdik-fix.png"
function LoginHeader() {
  return (
    <div className={styles.loginHeader}>
      <img src={iconSicerdikFix} width={"300px"}/>
      <h2 className="mt-4">Dinas Pendidikan</h2>
      <p className="mt-2">Kota Tanjungpinang</p>
    </div>
  );
}

export default LoginHeader;
