import axios from "axios";
import { useEffect, useState } from "react";
import EmptyList from "../EmptyList"
import { Link } from "react-router-dom";
import { Api } from "../../utils/api";

export default function OrderList() {
  const [orders, setOrders] = useState([]);
  const reversed = [...orders].reverse();
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      return getOrders();
    }, 1000);
  }, []);

  const getOrders = async () => {
    const response = await axios.get(Api + "/orders");
    setOrders(response.data);
    setLoading(false)
  };

  const deleteOrder = async (id) => {
    await axios.delete(Api + `/orders/delteById/${id}`).then(function () {
      getOrders();
    });
  };

  return (
    <div>
       {Loading ? (
          <div className="loader-container" style={{width: "100%"}}>
            <div className="spinner"></div>
          </div>
        ) : orders.length === 0 ? (
          <EmptyList />
        ) : (
     
      <table className="table">
        <thead>
          <tr>
            <th>Order id</th>
            <th>Company</th>
            <th>Product</th>
            <th>Action</th>
          </tr>
        </thead>
        {reversed.map((order) => (
          <tbody key={order.id}>
            <tr>
              <td>{order.id}</td>
              <td><Link to={`${order.id}`}>{order.ordcompanyname}</Link></td>
              <td>{order.createdAt}</td>
              <td><button className="btn btn-danger btn-sm m-2" onClick={() => deleteOrder(order.id)}>Delete</button></td>
            </tr>
          </tbody>
        ))}
      </table>
        )}
    </div>
  );
}
