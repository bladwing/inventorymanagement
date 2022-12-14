import { Link } from "react-router-dom";


const Orders = () => {
  return (
    <div className="Container">
      <div className="TopContainer">
        <h4 className="PageTitle">Orders</h4>
        
      </div>
     <Link to="/createorder" className="btn btn-primary btn-sm m-2">Create Order</Link>
    </div>
  );
};

export default Orders;
