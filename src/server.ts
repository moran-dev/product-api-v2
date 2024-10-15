import app from './app';

// Porta definida no arquivo .env ou padrão 3000
const PORT = process.env.PORT || 3000;

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
