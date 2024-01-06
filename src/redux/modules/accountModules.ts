import { IUser } from "@/types/user";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface IInitialState extends IUser {
  isLogin: boolean;
}

const initialState: IInitialState = {
  userId: "",
  avatar: "",
  nickname: "",
  accessToken: "",
  isLogin: false
};

const accountModules = createSlice({
  name: "accountModules",
  initialState,
  reducers: {
    authLogout: (state, action) => {},
    authClear: (state, action) => {}
  }
});

export const { authLogout, authClear } = accountModules.actions;
export default accountModules.reducer;
