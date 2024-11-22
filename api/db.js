const mysql = require('mysql2');

const connection = mysql.createConnection(
  dev = {
    host: 'localhost',       // Nome do host
    user: 'root',      // Usuário do MySQL
    password: 'password',    // Senha do MySQL
    database: 'autoseller',
    port : '3300' // Nome do banco de dados
  },
  production = {
    host: '',       // Nome do host
    user: '',      // Usuário do MySQL
    password: '',    // Senha do MySQL
    database: '',
    port : '' // Nome do banco de dados
  }
);

function connect() {  
  connection.connect((err) => {
    if (err) {
      console.error('Erro ao conectar ao banco de dados:', err.message);
      return;
    }
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
  });
}

module.exports = {connect, connection}