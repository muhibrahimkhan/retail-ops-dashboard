import React, { useState } from "react";
import LowStockBadge from "./LowStockBadge";

type ProductRow = {
  id: number;
  name: string;
  sku: string;
  category: string;
  price: number;
  quantity: number;
  reorderLevel: number;
};

type Props = {
  products: ProductRow[];
};

function InventoryTable({ products }: Props) {
  const [categoryFilter, setCategoryFilter] = useState("ALL");
  const [search, setSearch] = useState("");

  const categories = ["ALL", ...Array.from(new Set(products.map((p) => p.category)))];

  const filteredProducts = products.filter((p) => {
    const matchesCategory =
      categoryFilter === "ALL" || p.category === categoryFilter;

    const term = search.toLowerCase();
    const matchesSearch =
      p.name.toLowerCase().includes(term) ||
      p.sku.toLowerCase().includes(term);

    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ padding: 16, border: "2px solid #666", borderRadius: 12 }}>
      <div
        style={{
          display: "flex",
          gap: 12,
          marginBottom: 16,
          alignItems: "center",
        }}
      >
        <h2 style={{ marginRight: "auto", color: "#222", fontWeight: 700 }}>Inventory</h2>

        <input
          placeholder="Search by name or SKU"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: 6, borderRadius: 8, border: "1px solid #ccc" }}
        />

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          style={{ padding: 6, borderRadius: 8 }}
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: 14,
        }}
      >
        <thead>
          <tr>
            <th style={{
    borderBottom: "1px solid #888",
    color: "#222",
    fontWeight: 600,
    paddingBottom: 4,}}>
              Name
            </th>
            <th style={{
    borderBottom: "1px solid #888",
    color: "#222",
    fontWeight: 600,
    paddingBottom: 4, }}>SKU</th>
            <th style={{
    borderBottom: "1px solid #888",
    color: "#222",
    fontWeight: 600,
    paddingBottom: 4, }}>Category</th>
            <th style={{
    borderBottom: "1px solid #888",
    color: "#222",
    fontWeight: 600,
    paddingBottom: 4, }}>Price</th>
            <th style={{
    borderBottom: "1px solid #888",
    color: "#222",
    fontWeight: 600,
    paddingBottom: 4, }}>Qty</th>
            <th style={{
    borderBottom: "1px solid #888",
    color: "#222",
    fontWeight: 600,
    paddingBottom: 4, }}>Reorder</th>
            <th style={{
    borderBottom: "1px solid #888",
    color: "#222",
    fontWeight: 600,
    paddingBottom: 4, }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((p) => (
            <tr key={p.id}>
              <td style={{ padding: "6px 0", color: "#222" }}>{p.name}</td>
                <td style={{ textAlign: "center", color: "#222" }}>{p.sku}</td>
                <td style={{ textAlign: "center", color: "#222" }}>{p.category}</td>
                <td style={{ textAlign: "center", color: "#222" }}>
                     ${p.price.toFixed(2)}
                </td>
                <td style={{ textAlign: "center", color: "#222" }}>{p.quantity}</td>
                <td style={{ textAlign: "center", color: "#222" }}>{p.reorderLevel}</td>
                <td style={{ textAlign: "center" }}>

                <LowStockBadge
                  quantity={p.quantity}
                  reorderLevel={p.reorderLevel}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InventoryTable;
