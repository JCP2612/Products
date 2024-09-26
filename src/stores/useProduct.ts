export interface Category {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  title: string;
  name: string;
  price: number;
  category: Category[];
  images: string[];
  description: string;
}
