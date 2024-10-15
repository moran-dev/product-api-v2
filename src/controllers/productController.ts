import { Request, Response } from "express";
import products, { Product } from "../models/product";

// Obter todos os produtos
export const getProducts = (req: Request, res: Response) => {
  res.json(products);
};

// Obter um produto por ID
export const getProductById = (req: Request, res: Response) => {
  const product = products.find((p) => p.id === +req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
};

// Adicionar um novo produto
export const addProduct = (req: Request, res: Response) => {
  const newProduct: Product = {
    id: products.length + 1, // Gera um ID simples
    ...req.body,
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
};

// Atualizar um produto
export const updateProduct = (req: Request, res: Response) => {
  const index = products.findIndex((p) => p.id === +req.params.id);
  if (index === -1)
    return res.status(404).json({ message: "Product not found" });

  products[index] = { ...products[index], ...req.body };
  res.json(products[index]);
};

// Deletar um produto
export const deleteProduct = (req: Request, res: Response) => {
  const index = products.findIndex((p) => p.id === +req.params.id);
  if (index === -1)
    return res.status(404).json({ message: "Product not found" });

  const deletedProduct = products.splice(index, 1);
  res.json(deletedProduct[0]);
};
