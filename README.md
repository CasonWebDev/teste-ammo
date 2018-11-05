# Teste AMMO Varejo

Teste de uma simples single page application utilizando as stacks:

 - NodeJS
 - React
 - TypeScript
 - Postgresql

# Deploy Local

Clonar o repositório atual.

## Instalação Local

> Executar **npm i** na **raiz** e na pasta **api**
> Importar o arquivo **db_ammo.backup** (Postgresql 9.6)

## Configuração

No arquivo **server.js** dentro da pasta **api** apontar as configurações do banco de dados.
>let  pool  =  new  pg.Pool({
port:  **5432**,
password:  **'1234'**,
database:  **'mmartan_products'**,
max:  10,
host:  **'localhost'**,
user:  **'postgres'**
});

## Rodando a aplicação

Inicialize a API através do comando
>node server.js

Inicialize a aplicação React através do comando
>npm start

A API rodará na porta 3001 e a aplicação React na porta 3000 localhost.

## Demo

Para visualizar a demo online acesse: **https://safe-cove-26654.herokuapp.com/**

