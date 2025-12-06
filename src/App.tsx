import Layout from "./components/Layout";
import InventoryTable from "./components/InventoryTable";
import SalesChart from "./components/SalesChart";
import { products, sales } from "./data/mockData";

function App() {
  return (
    <Layout>
      <div style={{ flex: "2 1 500px" }}>
        <InventoryTable products={products} />
      </div>
      <div style={{ flex: "1 1 300px" }}>
        <SalesChart sales={sales} />
      </div>
    </Layout>
  );
}

export default App;
