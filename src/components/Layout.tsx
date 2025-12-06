import type { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        padding: 24,
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <header style={{ marginBottom: 24 }}>
        <h1 style={{ color: "#222", fontWeight: 700}}>Retail Operations Dashboard</h1>
        <p style={{ color: "#555" }}>
          Monitor inventory and sales performance in one place.
        </p>
      </header>
      <main style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
