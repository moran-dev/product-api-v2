// Definindo o tipo Product que será usado como modelo
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

// Lista de produtos "mockada"
let products: Product[] = [
  { id: 1, name: "Laptop", price: 1500, description: "A high-end laptop" },
  { id: 2, name: "Phone", price: 800, description: "A flagship smartphone" },
];

export default products;
