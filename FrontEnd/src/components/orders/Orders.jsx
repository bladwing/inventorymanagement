import axios from "axios";
import { useEffect, useState } from "react";
import { Api } from "../../utils/api";

export default function OrderList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      return getOrders();
    }, 1000);
  }, []);

  const getOrders = async () => {
    const response = await axios.get(Api + "/orders");
    setOrders(response.data);
  };

  return (
    <div>
      {orders.map((order) => (
        <div key={order.id}>
          {order.ordcompanyname}
          {order.id}hello
        </div>
      ))}
    </div>
  );
}
