import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../services/api';

export function Cadastro() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await api.post('/user', { name, email, password });
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Erro ao cadastrar. Tente novamente.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="auth-page">
      <form onSubmit={handleSubmit}>
        <h1>Criar conta</h1>

        <label>Nome</label>
        <input value={name} onChange={(e) => setName(e.target.value)} required />

        <label>E-mail</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Senha</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <button type="submit" disabled={loading}>
          {loading ? 'Cadastrando...' : 'Cadastrar'}
        </button>

        {error && <p className="error">{error}</p>}

        <p>Já tem conta? <Link to="/login">Entrar</Link></p>
      </form>
    </div>
  );
}