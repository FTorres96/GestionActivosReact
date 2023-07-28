import { createSlice } from "@reduxjs/toolkit";

export const selectSlice = createSlice({
  name: "select",
  initialState: {
    modelos: [{ id: 0, nombre: "", idMarca: 0, nombreMarca: "" }],
  },
  reducers: {
    setSelectModelo: (state, action) => {
      state.modelos = action.payload;
    },
  },
});
export const { setSelectModelo } = selectSlice.actions;

export const fetchData = () => async dispatch => {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: "",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    dispatch(setSelectModelo(json));
  } catch (error) {
    console.log("error", error);
  }
};

export default selectSlice.reducer;
