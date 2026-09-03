
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
 
const { conn } = require('../lib/query-builder');

 
async function authenticateUser(req, res) {
  try {
    const { email, password } = req.body || {};
 
    if (!email || !password) {
      return res.status(400).json({
        message: 'Email e senha são obrigatórios.',
      });
    }
 
    const userExists = await conn('users')
      .where('users.email', email)
      .select('users.id', 'users.name', 'users.email', 'users.password')
      .first();

    if(!userExists){
      return res.status(400).json({
        message: 'Email ou senha invalidos.'
      })
    }
 
    const passwordMatches = await bcrypt.compare(password, userExists.password);

    if(!passwordMatches){
      return res.status(400).json({
        message:'Email ou senha invalidos.'
      })
    }

    const token = jwt.sign(
      { userId: userExists.id, email: userExists.email },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    await conn('auth').where({ email }).delete()

    await conn('auth').insert({
      email,token
    })
 
    return res.status(200).json({
      token,
      userId: userExists.id,
    });
 
  } catch (error) {
    console.error('Erro ao autenticar usuário:', error);
 
    return res.status(500).json({
      message: 'Erro interno do servidor.',
    });
  }
}

async function logoutUser(req, res) {
  const { email } = req;

  if(!email){
    return res.status(400).json({
      message:'Email é obrigatório'

    });

  }

  const authExists = await conn('auth')
    .where({ email })
    .first();

  if (!authExists) {
    return res.status(200).json({
      message: 'Usuário já esta deslogado.'
    });
  }

  await conn('auth').where({ email }).delete()

  return res.status(200).json({
    message: 'Logout realizado.'
  });
}
  

module.exports = {
  authenticateUser,
  logoutUser
};