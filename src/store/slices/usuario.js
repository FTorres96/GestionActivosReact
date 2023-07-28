import { createSlice } from "@reduxjs/toolkit";

export const usuarioSlice = createSlice({
    name: "usuario",
    initialState: {
      data: {},
      token:""
      },
    reducers: {
        setUsuarioData: (state, action) => {
        state.data = action.payload;
      },
      setToken: (state, action) => {
        state.token = action.payload;
      }
    }
  });
export const { setUsuarioData, setToken } = usuarioSlice.actions;

export default usuarioSlice.reducer;

