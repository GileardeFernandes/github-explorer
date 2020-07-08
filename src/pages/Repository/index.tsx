import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronsLeft } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import { Header } from './styles';

interface RepositoryParams {
  repository: string;
}
const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <Header>
      <img src={logo} alt="Github explorer" />
      <Link to="/dashboard">
        <FiChevronsLeft size={16} />
        Voltar
      </Link>
    </Header>
  );
};

export default Repository;
