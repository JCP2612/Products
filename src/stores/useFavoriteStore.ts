import { create, StateCreator } from "zustand";
import { PersistOptions, persist } from "zustand/middleware";
import { Product } from "./useProduct";

export interface Favorite {
  id: number;
  product: Product;
}

export interface FavoriteState {
  favorites: Favorite[];
  addFavorite: (newFavorite: Favorite) => void;
  removeFavorite: (favoriteId: number) => void;
  clearFavorite: () => void;
}

type favoritePersist = (
  config: StateCreator<FavoriteState>,
  options: PersistOptions<FavoriteState>
) => StateCreator<FavoriteState>;

const useFavoriteStore = create<FavoriteState>(
  (persist as favoritePersist)(
    (set, get) => ({
      favorites: [],

      addFavorite: (newFavorite: Favorite) => {
        const { favorites } = get();
        const isAlreadyFavorite = favorites.some(
          (fav) => fav.id === newFavorite.id
        );

        if (!isAlreadyFavorite) {
          set((state) => ({
            favorites: [...state.favorites, newFavorite],
          }));
        }
      },

      removeFavorite: (favoriteId: number) => {
        set((state) => ({
          favorites: state.favorites.filter((fav) => fav.id !== favoriteId),
        }));
      },

      clearFavorite: () => {
        set(() => ({ favorites: [] }));
      },
    }),
    {
      name: "favorite-storage",
    }
  )
);

export default useFavoriteStore;
