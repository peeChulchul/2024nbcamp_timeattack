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
    setAccount: (state, action) => {
      console.log(action.payload);
      state.accessToken = action.payload.accessToken;
      state.avatar = action.payload.avatar;
      state.nickname = action.payload.nickname;
      state.userId = action.payload.userId;
      state.isLogin = true;
      sessionStorage.setItem("account", action.payload.accessToken);
    },
    clerAccount: (state, action) => {}
  }
});

export const { setAccount, clerAccount } = accountModules.actions;
export default accountModules.reducer;
