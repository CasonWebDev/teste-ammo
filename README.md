This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
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

Para visualizar a demo online acesse:

