import Info from "../model/Info.js";

export const getAllInfo = async (req, res) => {
  try {
    const info = await Info.findAll();
    res.json(info);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateInfo = async (req, res) => {
  try {
    await Info.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Info Updated",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};