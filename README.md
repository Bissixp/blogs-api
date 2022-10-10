## :newspaper: Blogs API
Neste projeto foi desenvolvido uma API utilizando Node.js e o MySQL como banco de dados.

O CRUD das rostas de posts foi contruido utilizando o pacote sequelize, os endpoints conectados seguem os princípios do REST.

Para fazer um post é necessário o usuário realizar uma autenticação, portanto uma relação entre user e post

## Instalação
<details>
  <summary><strong>:whale: Com Docker ou sem Docker</strong></summary><br />
  
  ## Sem Docker

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
  ### 4 - Rode o servidor
```bash
npm start
```
### 5 - Faça requisições para o servidor aberto na porta 3001
Recomendo utilizar a extensão Thunder Client no VS Code para fazer as requisições

---

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
### 4 - Abra o terminal do container
```bash
docker exec -it blogs_api bash
```
### 5 - Instale as dependências no terminal do container
```bash
npm install
```
### 6 - Rode o servidor
```bash
npm start
```
### 7 - Faça requisições para o servidor aberto na porta 3001
Recomendo utilizar a extensão Thunder Client no VS Code para fazer as requisições

 </details>


## 📋 Tecnologias utilizadas

- JavaScript
- Mysql
- Node.js
- Express
- Sequelize
