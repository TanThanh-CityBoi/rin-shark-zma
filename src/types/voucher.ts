export interface Voucher {
  id: number;
  name: string;
  image: string;
  price: number;
  categoryId?: string[];
  description?: string;
}
