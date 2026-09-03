import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../services/api';
import { useAuth } from '../contexts/AuthContext';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await api.post('/auth', { email, password });
      login(response.data.token);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Credenciais inválidas.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="auth-page">
      <form onSubmit={handleSubmit}>
        <h1>Entrar</h1>

        <label>E-mail</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Senha</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <button type="submit" disabled={loading}>
          {loading ? 'Entrando...' : 'Entrar'}
        </button>

        {error && <p className="error">{error}</p>}

        <p>Não tem conta? <Link to="/cadastro">Criar conta</Link></p>
      </form>
    </div>
  );
}