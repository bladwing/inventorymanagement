import express from "express";
import {
  getAllProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
  deleteProducts,
} from "./controllers/Products.js";

import { getAllUsers, createUser  } from "./controllers/users.js";

import {
  getAllCompanies,
  getCompanyById,
  createCompany,
  updateCompany,
  deleteCompany,
} from "./controllers/Companies.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("pages/main");
});

router.get("/products/", getAllProducts);
router.get("/products/:id", getProductById);
router.post("/products/", createProduct);
router.patch("/products/:id", updateProduct);
router.delete("/products/delteById/:id", deleteProduct);
router.delete("/products/deleteByIds/:ids", deleteProducts);

router.get("/users/", getAllUsers);
router.post("/users/", createUser);

router.get("/companies/",   getAllCompanies);
router.get("/companies/:id", getCompanyById);
router.post("/companies/", createCompany);
router.patch("/companies/:id", updateCompany);
router.delete("/companies/delteById/:id", deleteCompany);




export default router;
