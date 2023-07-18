const mapping: Record<string, string> = {
  businesses: 'business',
  inventories: 'inventory',
  products: 'product',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
