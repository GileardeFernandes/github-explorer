import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronsLeft, FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';
import logo from '../../assets/logo.svg';
import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  id: number;
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}
const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issue, setIssue] = useState<Issue[]>([]);

  useEffect(() => {
    api.get(`repos/${params.repository}`).then(res => {
      setRepository(res.data);
    });
    api.get(`repos/${params.repository}/issues`).then(res => {
      setIssue(res.data);
    });
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={logo} alt="Github explorer" />
        <Link to="/">
          <FiChevronsLeft size={16} />
          Voltar
        </Link>
      </Header>
      {repository && (
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
              <p>starts</p>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <p>forks</p>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <p>issues abertas</p>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      <Issues>
        {issue.map(issueItem => (
          <a key={issueItem.id} href={issueItem.html_url}>
            <div>
              <strong>{issueItem.title}</strong>
              <p>{issueItem.user.login}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Issues>
    </>
  );
};

export default Repository;
