import { CartInterface } from 'interfaces/cart';
import { OrderInterface } from 'interfaces/order';
import { VendorInterface } from 'interfaces/vendor';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  price: number;
  vendor_id: string;
  created_at?: any;
  updated_at?: any;
  cart?: CartInterface[];
  order?: OrderInterface[];
  vendor?: VendorInterface;
  _count?: {
    cart?: number;
    order?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  vendor_id?: string;
}
