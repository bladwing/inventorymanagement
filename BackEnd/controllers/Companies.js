import Company from "../model/companiesModel.js";

export const getAllCompanies= async (req, res) => {
  try {
    const compnaies = await Company.findAll();
    res.json(compnaies);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getCompanyById = async (req, res) => {
  try {
    const company = await Company.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(company[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createCompany = async (req, res) => {
  try {
    await Company.create(req.body);
    res.json({
      message: "Company Created",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateCompany = async (req, res) => {
  try {
    await Company.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Company Updated",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteCompany = async (req, res) => {
  try {
    await Company.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Company Deleted",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};