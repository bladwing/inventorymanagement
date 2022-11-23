import User from "../model/usersModel.js";

export const getAllUsers= async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(user[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    await User.create(req.body);
    res.json({
      message: "Product Created",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Product Updated",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Product Deleted",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

// export const deleteProducts = async (req, res) => {
//   try {
//     const ids = req.params.ids.split(",");

//     await Product.destroy({
//       where: {
//         id: ids,
//       },
//     });
//     res.json({
//       message: "ProductS Deleted",
//     });
//   } catch (error) {
//     res.json({ message: error.message });
//   }
// };
