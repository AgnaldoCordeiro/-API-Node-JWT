### -API-Node-JWT
## Esse projeto é uma API desenvolvida em Node.js

Com o intuito de cadastrar clientes, as informaçoes login, cpf, senha, nome, e email.
É feito uma validação de CPF, caso ja existe um usuario cadastrado com o mesmo cpf, ele resultara em uma mensagem informando a existencia desse cadastro.

Tambem tem sistema de autenticação feita em Login, CPF e Senha, caso uma das tres estiver errado o usuario não consegue logar, apos o login é criado um token de acesso apra maior segurança.

A aplicação é integrada de forma CLoud com MongoDB.

Basta utilizar o yarn add para instalar todas as dependencias e node src/index.js para rodar a aplicação.

## Lembrando que é preciso criar um closter no MongoDB e criar um arquivo .env na raiz do projeto e colocar a string de conexão nele.
