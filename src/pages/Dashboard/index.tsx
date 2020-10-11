import React from 'react';
import { Title, Form, Repositories } from './styles';
import ImageLogo from '../../assets/logo.svg';
import { FiChevronRight } from 'react-icons/fi';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={ImageLogo} alt="logo" />
      <Title>Explore os repositorios no GithubExplorer</Title>
      <Form>
        <input placeholder="Repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="#">
          <img
            src="https://avatars1.githubusercontent.com/u/13613590?s=400&u=569912bcd54d3ce94e4f8d697cc1b05baf763fc0&v=4"
            alt="profile"
          />
          <div>
            <strong>mpgxc/Caesar.Cipher.Codenation</strong>
            <p>Desafio submetido para AceleraDev ReactJS - Codenation</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="#">
          <img
            src="https://avatars1.githubusercontent.com/u/13613590?s=400&u=569912bcd54d3ce94e4f8d697cc1b05baf763fc0&v=4"
            alt="profile"
          />
          <div>
            <strong>mpgxc/Caesar.Cipher.Codenation</strong>
            <p>Desafio submetido para AceleraDev ReactJS - Codenation</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="#">
          <img
            src="https://avatars1.githubusercontent.com/u/13613590?s=400&u=569912bcd54d3ce94e4f8d697cc1b05baf763fc0&v=4"
            alt="profile"
          />
          <div>
            <strong>mpgxc/Caesar.Cipher.Codenation</strong>
            <p>Desafio submetido para AceleraDev ReactJS - Codenation</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
