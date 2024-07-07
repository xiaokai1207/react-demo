import ReceiveStockQuery from "./query";  
import ReceiveStockTable from "./table";

function Order() {
  return <div className="p-8">
    <ReceiveStockQuery />
    <ReceiveStockTable />
  </div>
}

export default Order;