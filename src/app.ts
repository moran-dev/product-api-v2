import express from 'express';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes';

dotenv.config();

const app = express();

app.use(express.json()); // Para permitir que a API entenda JSON

// Usar o router de produtos
app.use('/api/products', productRoutes);

// Rota raiz
app.get('/', (req, res) => {
  res.send('API is running');
});

export default app;
