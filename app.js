const express = require('express');
const sequelize = require('./config/database'); 
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
require('dotenv').config();

const app = express();
app.use(express.json());

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api', userRoutes);

// Sincronize os modelos com o banco de dados
sequelize.sync().then(() => {
  app.listen(3000, () => console.log('Servidor rodando na porta: 3000'));
});
