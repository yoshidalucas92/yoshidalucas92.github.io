import React from 'react';
import { Link } from 'react-router-dom';
import Lucas from '../../images/lucasfoto.jpg';
import './home.css';

const Home = () => {
  return (
    <div className="main-container">
      <section className="content">
        <img src={Lucas} alt="foto de Lucas Yoshida" className="profile-picture" />
        <article className="about-me">
          <h2>Quem Sou</h2>
          <p>
            <strong>Brasileiro</strong> natural de <em>São Paulo (capital)</em>, nascido em 1992.{' '}
            <br />
            Residência alternando entre <em>São Paulo - SP</em>, <em>Guarujá - SP</em> e{' '}
            <em>Itajubá - MG </em>
            <br />
            (Não necessariamente nessa ordem) <br />
            Apaixonado por coisas relacionadas à tecnologia desde sempre e estudante desde 2008.{' '}
            <br />
            Técnico em Informática formado pela <a href="http://www.etesaopaulo.com.br/" target="blank" className="external-link">@<strong>ETESP</strong></a> (Escola Técnica Estadual de São
            Paulo) <br />
            Estudou Sistemas de Informação na <a href="https://unifei.edu.br/" target="blank" className="external-link">@<strong>UNIFEI</strong></a> (Universidade Federal de
            Itajubá) <br />
            Estudante de Desenvolvimento de Software da <a href="https://www.betrybe.com/" target="blank" className="external-link"><strong>@Trybe</strong></a>
          </p>
        </article>
      </section>
    </div>
  );
};

export default Home;
