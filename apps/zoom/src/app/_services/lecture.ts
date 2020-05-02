export interface Lecture {
  id: number;
  title: string;
  description: string;
  time: string;
  price: number;
  category: Category;
  subcategory: Category;
}

export interface Category {
  id: number;
  name: string;
}
