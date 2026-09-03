import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import { useAuth } from '../contexts/AuthContext';

export function Home() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    api.get('/user/me')
      .then((response) => setUser(response.data))
      .catch(() => setError('Não foi possível carregar seus dados.'))
      .finally(() => setLoading(false));
  }, []);

  async function handleLogout() {
    await api.delete('/auth');
    logout();
    navigate('/login');
  }

  if (loading) return <p>Carregando...</p>;

  return (
    <div className="home-page">
      <header>
        <h1>Olá, {user?.name}</h1>
        <button onClick={handleLogout}>Sair</button>
      </header>

      {error && <p className="error">{error}</p>}

      {user && (
        <section>
          <h2>Meus dados</h2>
          <p>Nome: {user.name}</p>
          <p>E-mail: {user.email}</p>
        </section>
      )}
    </div>
  );
}