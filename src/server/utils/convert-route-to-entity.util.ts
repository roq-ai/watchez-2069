const mapping: Record<string, string> = {
  carts: 'cart',
  orders: 'order',
  products: 'product',
  users: 'user',
  vendors: 'vendor',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
