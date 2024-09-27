import useFavoriteStore from "../stores/useFavoriteStore";
import { Product } from "../stores/useProduct";
import useUserState from "../stores/useUserStore";

const useFavorite = () => {
  const { count, addFavorite, removeFavorite } = useFavoriteStore();

  const handleFavorite = (product: Product) => {
    addFavorite({
      id: Date.now() + count(),
      product,
      addDate: new Date(),
    });
  };

  const handleUnFavorite = (favoriteId: number) => {
    removeFavorite(favoriteId);
  };

  return {
    handleFavorite,
    handleUnFavorite,
  };
};

export default useFavorite;
