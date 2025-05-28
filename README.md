<a id="readme-top"></a>

<br />
<div align="center">
  <h1 align="center">TECH CHALLENGE - FASE 2 - 4FSDT
 </h1>
  <br />
</div>
<details>
  <summary>Conteúdo da Documentação</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o projeto</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#arquitetura">Arquitetura</a></li>
    <li>
      <a href="#como-comecar">Como Começar</a>
      <ul>
        <li><a href="#pre-requesitos">Pre-requesitos</a></li>
        <li><a href="#instalacao">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#desenvolvedores">Desenvolvedores</a></li>
  </ol>
</details>

## Sobre o projeto

### Desafio:

Atualmente, a maioria de professores e professoras da rede pública de
educação não têm plataformas onde postar suas aulas e transmitir conhecimento
para alunos e alunas de forma prática, centralizada e tecnológica.

### Solução

A solução proposta consiste em uma plataforma para gestão de postagens educacionais, com a implementação de uma série de APIs para criação, edição, exclusão e busca de conteúdo. O back-end é desenvolvido em Node.js utilizando o framework Express, permitindo a criação de endpoints RESTful para manipulação de postagens. O banco de dados Postgres é utilizado para persistência dos dados, com modelos adequados para as postagens. A aplicação é containerizada com Docker, garantindo consistência entre os ambientes de desenvolvimento e produção. A automação de testes e deploy é realizada com GitHub Actions, e a cobertura de testes unitários atinge 20% do código. A plataforma permite uma gestão eficiente de conteúdo educacional para professores, com acesso fácil para alunos.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

-   [NodeJS][Node-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Arquitetura

<div align="center">
  <img src="src/images/architecture.png" alt="Logo" width="720" height="420" >
</div>

## Como Comecar

Este é um exemplo de como você pode dar instruções sobre como configurar seu projeto localmente.
Para obter uma cópia local instalada e funcionando, siga estas etapas simples de exemplo.

## Pré-requesitos

-   NodeJS
-   Docker
-   Git

## Instalação

1. Clone o repositório
    ```sh
    git clone https://github.com/Pirdo/tech-challange-back-qa
    ```
2. Instale as dependencias

    ```sh
    npm install
    ```

3. Crie um arquivo .env com as variáveis preenchidas listadas em [.env-example](.env.example).

4. Rode a aplicação

    ```bash
    npm start
    ```

    <p align="right">(<a href="#readme-top">back to top</a>)</p>

## Desenvolvedores

| Name                          | RM                  |
| ----------------------------- | ------------------- |
| <h3>Gabriel Pires </h3>       | <h3> RM360472 </h3> |
| <h3>Caique Dutra Santos </h3> | <h3> RM360210 </h3> |

[Node-url]: https://nodejs.org/en
[Node]: https://img.shields.io/badge/Node-js-green
