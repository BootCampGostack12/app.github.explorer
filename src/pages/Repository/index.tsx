import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Header, RepositoryInfo, Issues } from './styles';
import api from '../../services/api';
import ImageLogo from '../../assets/logo.svg';

interface RepositoryTypes {
  stargazers_count: number;
  forks_count: number;
  open_issues: number;
  full_name: string;
  title: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface IssueTypes {
  id: number;
  html_url: string;
  title: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<RepositoryTypes | null>(null);
  const [issues, setIssues] = useState<IssueTypes[]>([]);
  const { params } = useRouteMatch<{ repository: string }>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadInfos = async () => {
      const [responserRepo, responseIssues] = await Promise.all([
        api.get(`/repos/${params.repository}`),
        api.get(`/repos/${params.repository}/issues`),
      ]);

      setRepository(responserRepo.data);
      setIssues(responseIssues.data);
      setLoading(false);
    };
    loadInfos();
  }, [params.repository]);

  return (
    <>
      <Header>
        <Link to="/">
          <img src={ImageLogo} alt="logo" />
        </Link>
        <Link to="/">
          <FiChevronLeft size={20} />
          Voltar
        </Link>
      </Header>
      {loading ? (
        <h1>Carregando...</h1>
      ) : (
        repository && (
          <RepositoryInfo>
            <header>
              <img
                src={repository.owner.avatar_url}
                alt={repository.owner.login}
              />
              <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </div>
            </header>
            <ul>
              <li>
                <strong>{repository.stargazers_count}</strong>
                <span>Stars</span>
              </li>
              <li>
                <strong>{repository.forks_count}</strong>
                <span>Forks</span>
              </li>
              <li>
                <strong>{repository.open_issues}</strong>
                <span>Issues abertas</span>
              </li>
            </ul>
          </RepositoryInfo>
        )
      )}

      <Issues>
        {issues.map(issue => (
          <a key={issue.id} target="_blank" href={issue.html_url}>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </Issues>
    </>
  );
};

export default Repository;
