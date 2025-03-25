export interface item {
  id?: number;
  title: string;
  description?: string;
  price?: number;
  image: string;
}

export interface CartaType {
  title: string;
  image: string;
  items: item[];
}
export interface cartItem extends item {
  qty: number;
}
