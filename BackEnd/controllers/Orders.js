import Order from "../model/orderModel.js";

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(order[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createOrder = async (req, res) => {
  try {
    await Order.create(req.body);
    res.json({
      message: "Order Created",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateOrder = async (req, res) => {
  try {
    await Order.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Order Updated",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    await Order.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Order Deleted",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

