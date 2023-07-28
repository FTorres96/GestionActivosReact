import { configureStore } from "@reduxjs/toolkit";
import usuario from "./slices/usuario";
import select from "./slices/select";

export default configureStore({
    reducer: {
      usuario,
      select
    }
  });