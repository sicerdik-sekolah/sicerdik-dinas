import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import data from "../../components/TableUsers/dataDummy";
import Cookies from "js-cookie";
import axios from "axios";
import { apiPath } from "../../config/index";

const initialState = {
  data: data,
  errorMessage: "",
};

export const fetchAllUsers = createAsyncThunk(
  "/dummyDataManajemenAkun/fetchAllUsers",
  async () => {
    try {
      const token = Cookies.get("token");

      const res = await axios.get(`${apiPath}/cms/akun/all-akun`, {
        headers: { Authorization: "Bearer " + token },
      });
      console.log("RES >>", res.data.data);
      return res.data.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const changeStatusAkun = createAsyncThunk(
  "/dummyDataManajemenAkun/changeStatusAkun",
  async (id) => {
    try {
      const token = Cookies.get("token");

      console.log("id change >> ", id);
      const res = await axios({
        method: "put",
        url: `${apiPath}/cms/akun/ganti-status-akun/${id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("RES change status>>", res);
      return res;
    } catch (error) {
      console.log(error);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "/dummyDataManajemenAkun/resetPassword",
  async (payload) => {
    try {
      const token = Cookies.get("token");
      console.log("payload insert ", payload);
      const res = await axios({
        method : "put",
        url: `${apiPath}/cms/akun/reset-password/${payload.id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data : {
          password : payload.password
        }
      })

      console.log("res reset password >>", res)
      return res
    } catch (error) {
      console.log(error);
    }
  }

);

export const dummyDataManajemenAkunSlice = createSlice({
  name: "dummyDataManajemenAkun",
  initialState,
  reducers: {
    changeStatusVerifikasi: (state, action) => {
      const idSearch = Number(action.payload);
      state.data.find((item) => item.id === idSearch).status_verifikasi =
        "SUDAH";
    },
    changeStatusKirim: (state, action) => {
      const idSearch = Number(action.payload);
      if (
        state.data.find((item) => item.id === idSearch).status_ttd === "SUDAH"
      ) {
        state.data.find((item) => item.id === idSearch).status_kirim = "SUDAH";
      } else {
        state.errorMessage = "Berkas Belum di Tandatangan";
      }
    },
    changeStatusTTD: (state, action) => {
      const id = Number(action.payload);
      console.log(id);
      if (
        state.data.find((item) => item.id === id).status_verifikasi === "SUDAH"
      ) {
        state.data.find((item) => item.id === id).status_ttd = "SUDAH";
      } else {
        state.errorMessage = "Berkas Belum di Verifikasi";
      }
    },
    resetError: (state) => {
      state.errorMessage = "";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        console.log("payload >> ", action.payload);
        state.data = action.payload;
      })
      .addCase(changeStatusAkun.fulfilled, (state, action) => {
        console.log("action payload", action.payload);
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        console.log("action payload reset password", action.payload);
      })
      ;
  },
});

export const {
  changeStatusVerifikasi,
  changeStatusKirim,
  changeStatusTTD,
  resetError,
} = dummyDataManajemenAkunSlice.actions;
export default dummyDataManajemenAkunSlice.reducer;
