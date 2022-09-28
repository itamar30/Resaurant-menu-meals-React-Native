import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "../../store/redux/favoritesSlice";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});
