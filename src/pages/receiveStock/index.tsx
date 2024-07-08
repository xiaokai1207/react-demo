import { useState } from 'react';
import ReceiveStockQuery from "./query";  
import ReceiveStockTable from "./table";

function ReceiveStock() {

  const [loading, setLoading] = useState(false);

  const handleFilter = (params: any) => {
    console.log("params", params);
    handleRefresh();
  }

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500)
  };

  return <div className="p-8">
    <ReceiveStockQuery onFilter={handleFilter} />
    <ReceiveStockTable loading={loading} onRefresh={handleRefresh} />
  </div>
}

export default ReceiveStock;