export interface IProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  img: string;
  availableQuantity: number;
  flashSale: object;
  inStock: boolean;
}
