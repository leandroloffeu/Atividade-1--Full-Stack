const User = require('../models/user');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching users' });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { username, email } = req.body;
    const user = await User.findByPk(req.userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    user.username = username || user.username;
    user.email = email || user.email;
    await user.save();

    res.json({ message: 'Usuário atualizado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar o usuário' });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.userId);
    if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });

    await user.destroy();
    res.json({ message: 'Usuario deletado' });
  } catch (error) {
    res.status(500).json({ error: 'Error ao deletar usuario' });
  }
};
