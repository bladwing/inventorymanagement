import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Api } from "../../utils/api";

export default function OrderDetail() {
  const [orders, setOrders] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getOrdersById();
    async function getOrdersById() {
      const response = await axios.get(Api + `/orders/${id}`);
      setOrders(response.data);
    }
  }, [id]);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Order id</th>
            <th>Company</th>
            <th>Product</th>
            <th>Pieces</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
         
            <tr>
              <td>{orders.id}</td>
              <td>{orders.ordcompanyname}</td>
              <td>{orders.ordproductname}</td>
              <td>{orders.ordproductpieces}</td>
              <td>{orders.createdAt}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm m-2"
                  onClick={() => deleteOrder(orders.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
         
        </tbody>
      </table>
    </div>
  );
}
