import { createContext, useState } from "react";

export const FavotiesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

export default function FavoritesContextProvider({ children }) {
  const [favoritesMealsIds, setfavoritesMealsIds] = useState([]);

  const addFavorite = (id) => {
    setfavoritesMealsIds((prevState) => [...prevState, id]);
  };

  const removeFavorite = (id) => {
    setfavoritesMealsIds((prevState) =>
      prevState.filter((mealId) => mealId !== id)
    );
  };

  const value = {
    ids: favoritesMealsIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };
  return (
    <FavotiesContext.Provider value={value}>
      {children}
    </FavotiesContext.Provider>
  );
}
