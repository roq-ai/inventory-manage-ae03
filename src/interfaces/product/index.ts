import { InventoryInterface } from 'interfaces/inventory';
import { BusinessInterface } from 'interfaces/business';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  category: string;
  threshold: number;
  business_id?: string;
  created_at?: any;
  updated_at?: any;
  inventory?: InventoryInterface[];
  business?: BusinessInterface;
  _count?: {
    inventory?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  category?: string;
  business_id?: string;
}
