
const bcrypt = require('bcrypt');
 
const { conn } = require('../lib/query-builder');
 
async function createUser(req, res) {
  try {
    const { name, email, password } = req.body || {};
 
    if (!name || !email || !password) {
      return res.status(400).json({
        message: 'Campos incorretos',
      });
    }
 
    const userAlreadyExists = await conn('users')
      .where({ email })
      .first();
 
    if (userAlreadyExists) {
      return res.status(409).json({
        message: 'O usuário já está cadastrado.',
      });
    }
 
    const hashedPassword = await bcrypt.hash(password, 10);
 
    const [userId] = await conn('users').insert({
        name,
        email,
        password: hashedPassword
      });
 
    return res.status(201).json({
      message: 'Usuário cadastrado com sucesso!',
      userId,
    });
 
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
 
    return res.status(500).json({
      message: 'Erro ao cadastrar usuário',
    });
  }
}
 
async function listUsers(req, res) {
  try {
    const users = await conn('users')
      .select(
        'id',
        'name',
        'email',
        'created_at',
        'updated_at'
      );
 
    return res.status(200).json(users);
 
  } catch (error) {
    console.error('Erro ao listar usuários:', error);
 
    return res.status(500).json({
      message: 'Erro ao listar usuários',
    });
  }
}

async function me(req, res) {
  const { userId } = req;

  if(!userId) {
    return res.status(400).json({
      mensagem: "ID não encontrado."
    })
  }
    const [user] = await conn('users')
      .select(
        'name',
        'email',
      ).where({ id: userId });
  
  return res.status(200).json(user)
}
 
module.exports = {
  createUser,
  listUsers,
  me
};
 