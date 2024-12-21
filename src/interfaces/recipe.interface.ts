export interface Recipe {
  id?: string;
  title: string;
  ingredients: {
    name: string;
    quantity: number;
    unit: string;
  }[];
  steps: string[];
  category?: string;
  createdAt?: Date;
}
