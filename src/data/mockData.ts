export type Product = {
  id: number;
  name: string;
  sku: string;
  category: string;
  price: number;
  quantity: number;
  reorderLevel: number;
};

export type Sale = {
  date: string; // ISO date
  revenue: number;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Staples Copy Paper",
    sku: "SKU-001",
    category: "Office Supplies",
    price: 6.99,
    quantity: 120,
    reorderLevel: 30,
  },
  {
    id: 2,
    name: "Ballpoint Pens",
    sku: "SKU-002",
    category: "Office Supplies",
    price: 3.49,
    quantity: 40,
    reorderLevel: 20,
  },
  {
    id: 3,
    name: "Notebook",
    sku: "SKU-003",
    category: "Notebooks",
    price: 4.99,
    quantity: 15,
    reorderLevel: 10,
  },
  {
    id: 4,
    name: "Desk Chair",
    sku: "SKU-004",
    category: "Furniture",
    price: 89.99,
    quantity: 8,
    reorderLevel: 5,
  },
];

export const sales: Sale[] = [
  { date: "2025-01-01", revenue: 300 },
  { date: "2025-01-02", revenue: 450 },
  { date: "2025-01-03", revenue: 380 },
  { date: "2025-01-04", revenue: 520 },
  { date: "2025-01-05", revenue: 610 },
];
