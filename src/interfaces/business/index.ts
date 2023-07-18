import { InventoryInterface } from 'interfaces/inventory';
import { ProductInterface } from 'interfaces/product';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BusinessInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  inventory?: InventoryInterface[];
  product?: ProductInterface[];
  user?: UserInterface;
  _count?: {
    inventory?: number;
    product?: number;
  };
}

export interface BusinessGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
