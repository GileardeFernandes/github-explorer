import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './style';
import logo from '../../assets/logo.svg';

const Dashboard: React.FC = () => (
  <>
    <img src={logo} alt="Github explorer" />
    <Title>Explore repositórios no Github</Title>

    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img
          src="https://avatars2.githubusercontent.com/u/55728068?s=460&u=c1f6cb88d7e1fdc47b1b66c0eb9895eacfd8d4b9&v=4"
          alt="Micael Fernandes"
        />
        <div>
          <strong>beTheHero</strong>
          <p> Dev na Procenge saude, amando cada vez mais as</p>
        </div>
        <FiChevronRight size={20} />
      </a>

      <a href="teste">
        <img
          src="https://avatars2.githubusercontent.com/u/55728068?s=460&u=c1f6cb88d7e1fdc47b1b66c0eb9895eacfd8d4b9&v=4"
          alt="Micael Fernandes"
        />
        <div>
          <strong>beTheHero</strong>
          <p> Dev na Procenge saude, amando cada vez mais as</p>
        </div>
        <FiChevronRight size={20} />
      </a>

      <a href="teste">
        <img
          src="https://avatars2.githubusercontent.com/u/55728068?s=460&u=c1f6cb88d7e1fdc47b1b66c0eb9895eacfd8d4b9&v=4"
          alt="Micael Fernandes"
        />
        <div>
          <strong>beTheHero</strong>
          <p> Dev na Procenge saude, amando cada vez mais as</p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);
export default Dashboard;
