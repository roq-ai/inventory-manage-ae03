interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Inventory Manager'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Inventory Manager', 'Product Catalog Manager', 'Sales Representative'],
  tenantName: 'Business',
  applicationName: 'Inventory Management System',
  addOns: ['notifications', 'file', 'chat'],
};
