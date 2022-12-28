import React from "react";
import { Link } from "react-router-dom";
import IconAksi from "../../assets/logo-aksi-table.png";
import IconReset from "../../assets/logo-aksi-reset.png";
function TableBodyManajemenAkun(props) {
  return (
    <tbody>
      {props.data &&
        props.data.map((item, idx) => {
          return (
            <tr key={idx} className="text-center align-middle">
              <td>{idx + 1}</td>
              <td>{item._id}</td>
              <td>{item.nama}</td>
              <td>{item.email}</td>
              <td>{item.nip}</td>
              <td>{item.tempat}</td>
              <td>
                <span
                  className="button-status px-3 py-1"
                  style={{
                    backgroundColor: `${
                      item.statusAkun === false ? "#EDE300" : "#00BDAA"
                    }`,
                  }}
                >
                  {item.statusAkun ? "Aktif" : "Mati"}
                </span>
              </td>
              <td>
                <div className=" d-flex justify-content-center align-items-center">
                  <Link to={`/manajemen-akun/users/ganti-status/${item._id}`}>
                    <span className="action-btn ">
                      <img src={IconAksi} alt="icon" />
                    </span>
                  </Link>
                </div>
              </td>
              <td>
                <div className=" d-flex justify-content-center align-items-center">
                  <Link to={`/manajemen-akun/users/reset-password/${item._id}`}>
                    <span className="action-btn ">
                      <img src={IconReset} alt="icon" />
                    </span>
                  </Link>
                </div>
              </td>
            </tr>
          );
        })}
    </tbody>
  );
}

export default TableBodyManajemenAkun;
