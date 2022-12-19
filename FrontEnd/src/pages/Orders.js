import { Link } from "react-router-dom";
import OrderList from "../components/orders/Orders";


const OrdersPage = () => {
  return (
    <div className="Container">
      <div className="TopContainer">
        <h4 className="PageTitle">Orders</h4>
        
      </div>
     <Link to="/createorder" className="btn btn-primary btn-sm m-2">Create Order</Link>
     <OrderList/>
    </div>
  );   
};

export default OrdersPage;
