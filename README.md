## :newspaper: Blogs API
Neste projeto foi desenvolvido uma API utilizando Node.js e o MySQL como banco de dados.

O CRUD das rostas de posts foi contruido utilizando o pacote sequelize, os endpoints conectados seguem os princípios do REST.

Para fazer um post é necessário o usuário realizar uma autenticação, a autenticação é feita através de users ou login.

Por fim ao fazer uma postagem é feito todo relacionamento, entre o usuário, categoria e a postagem.

## Instalação
<details>
  <summary><strong>:whale: Com Docker </strong></summary><br />
  

### 1 - Clone o repositório
```bash
git clone git@github.com:Bissixp/blogs-api.git
```
### 2 - Mude para pasta do repositório
```bash
cd blogs-api
```
### 3 - Rode o container na pasta raiz da aplicação
```bash
docker-compose up -d
```
### 4 - Instale as dependências
```bash
npm install
```
### 5 - Rode o comando para criar e popular o Banco de dados
```bash
npm run add
```
### 6 - Rode o servidor
```bash
npm start
```
### 7 - Faça requisições para o servidor aberto na porta 3000
Recomendo utilizar a extensão Thunder Client no VS Code para fazer as requisições

 </details>
 <details>
 <summary><strong>:computer: Sem Docker </strong></summary><br />


  ### 1 - Clone o repositório
```bash
git clone git@github.com:Bissixp/blogs-api.git
```
  ### 2 - Mude para pasta do repositório
```bash
cd blogs-api
```
  ### 3 - Instale as dependências
```bash
npm install
```
 ### 4 - Rode o comando para criar e popular o Banco de dados
```bash
npm run add
```
 ### 5 - Rode o servidor
```bash
npm start
```

### 6 - Faça requisições para o servidor aberto na porta 3000
Recomendo utilizar a extensão Thunder Client no VS Code para fazer as requisições
</details>


  ### :warning: Caso tenha algum problema com o Banco de dados :warning:
Rode o comando para resetar o Banco de dados:
```bash
npm run db:reset
```
---

## Instruções
<details>
  <summary><strong>:heavy_check_mark: Rota User </strong></summary><br />
  
### localhost:3000/user

Responsável por cadastrar usuários no banco de dados e criar um token, trazer todos os usuários e trazer usuários por ID - (GET/POST)

Para cadastrar um usuário:
 ```json
  {
    "displayName": "Fernando",
    "email": "fernando@hotmail.com",
    "password": "123456",
    "image": "urlDaImg"
  }
```
  
  </details>
<details>
  <summary><strong>:heavy_check_mark: Rota Login </strong></summary><br />
  
### localhost:3000/login 

Responsável por gerar um token de um usuário já cadastrado no banco de dados - (POST)

Entrada:
 ```json
  {
    "email":"lewishamilton@gmail.com",
    "password":"123456"
  }
```

Resposta esperada:
 ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJkaXNwbGF5TmFtZSI6Ikxld2lzIEhhbWlsdG9uIiwiZW1haWwiOiJsZXdpc2hhbWlsdG9uQGdtYWlsLmNvbSIsImltYWdlIjoiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy8xLzE4L0xld2lzX0hhbWlsdG9uXzIwMTZfTWFsYXlzaWFfMi5qcGcifSwiaWF0IjoxNjY1Nzg2MDgzfQ.6vYuYTkSmHgGQ8BtKEQ87IC-7DaBsj3Bt1og5or-1Eg"
  }
```
  </details>
  <details>
  <summary><strong>:heavy_check_mark: Rota Categories </strong></summary><br />
  
### localhost:3000/categories

Responsável por trazer todas as categorias e adicionar uma nova categoria, é necessário ter um token válido para utilizar essa rota - (GET/POST)

para cadastrar uma categoria:
 ```json
  {
    "name": "Computação"
  }
```
  
  </details>
  <details>
  <summary><strong>:heavy_check_mark: Rota Post </strong></summary><br />
  
### localhost:3000/post

Responsável por mostrar todas as postagens, fazer uma postagem e editar uma postagem - (GET/POST/PUT)

Para fazer uma postagem:
 ```json
  {
    "title": "Título da postagem",
    "content": "Contéudo",
    "categoryIds": ["3"]
  }
```
  </details>

## 📋 Tecnologias utilizadas

- JavaScript
- Mysql
- Node.js
- Express
- Sequelize
