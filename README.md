## :newspaper: Blogs API
Neste projeto foi desenvolvido uma API utilizando Node.js e o MySQL como banco de dados.

O CRUD das rostas de posts foi contruido utilizando o pacote sequelize, os endpoints conectados seguem os princípios do REST.

Para fazer um post é necessário o usuário realizar uma autenticação, portanto uma relação entre user e post

## Instalação
<details>
  <summary><strong>:whale: Com Docker </strong></summary><br />
  


## Com docker

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

## 📋 Tecnologias utilizadas

- JavaScript
- Mysql
- Node.js
- Express
- Sequelize
