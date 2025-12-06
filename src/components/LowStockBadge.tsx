import React from "react";

interface Props {
  quantity: number;
  reorderLevel: number;
}

function LowStockBadge({ quantity, reorderLevel }: Props) {
  const isLow = quantity <= reorderLevel;

  const style: React.CSSProperties = {
  padding: "4px 8px",
  borderRadius: 999,
  fontSize: 12,
  fontWeight: 600,
  backgroundColor: isLow ? "#ff4d4d" : "#4caf50", 
  color: "white",
};


  return <span style={style}>{isLow ? "Low stock" : "OK"}</span>;
}

export default LowStockBadge;
