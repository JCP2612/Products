import { Product } from "../stores/useProduct";
import axios from "axios";

const useFilter = () => {
  const handleFilter = async (str: string) => {
    try {
      if (str != "") {
        const response = await axios.get(
          `https://api.escuelajs.co/api/v1/products/?title=${str}`
        );
        const products: Product[] = await response.data;
        return products;
      }
    } catch (error: any) {
      console.error(error);
      return;
    }
  };
  return {
    handleFilter,
  };
};

export default useFilter;
