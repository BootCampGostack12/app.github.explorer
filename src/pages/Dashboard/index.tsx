import React, { useState, useEffect, FormEvent } from 'react';
import { Title, Form, Repositories, Error } from './styles';
import { FiChevronRight } from 'react-icons/fi';
import ImageLogo from '../../assets/logo.svg';
import api from '../../services/api';
import { Link } from 'react-router-dom';

interface RepositoryTypes {
  full_name: string;
  title: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const useRepositories = useState<RepositoryTypes[]>(() => {
    const response = localStorage.getItem('@GithubExplorer:repositories');
    if (response) return JSON.parse(response);
    else return [];
  });

  const [newRepo, setNewRepo] = useState<string>('');
  const [inputError, setInputError] = useState<string>('');
  const [repositories, setRepositories] = useRepositories;

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  const handleAddRepository = async (
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    if (!newRepo) {
      setInputError('Digite o autor/nome do repositório!');
      return;
    }

    try {
      const response = await api.get<RepositoryTypes>(`repos/${newRepo}`);
      setRepositories([...repositories, response.data]);
      setNewRepo('');
      setInputError('');
    } catch (error) {
      setInputError('Erro na busca do repositório!');
    }
  };

  return (
    <>
      <Link to="/">
        <img src={ImageLogo} alt="logo" />
      </Link>

      <Title>Explore os repositorios no GithubExplorer</Title>
      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          placeholder="Repositório"
          value={newRepo}
          onChange={event => setNewRepo(event.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map(item => (
          <Link key={item.full_name} to={`/repositories/${item.full_name}`}>
            <img src={item.owner.avatar_url} alt={item.owner.login} />
            <div>
              <strong>{item.full_name}</strong>
              <p>{item.description}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
