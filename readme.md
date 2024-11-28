# AutoSeller
Esse projeto tem como finalidade representar uma agência de revenda de carros, onde o vendedor poderá registrar seu carro, após isso é passado aos consultores e analistas, após essa análise é retornado ao anuciante o aceite ou recusa da proposta.

## Stack

- Flask : python
- SQLite
- HTML, CSS, JS

## Inicialização
1 - Para baixar as dependencias é nesessário ter o python e pip instalado, e faça a instalação das dependências em requirements.txt
```cmd
pip install -r requirements.txt
```

2 - Após isso é necessário fazer a criação da tabela pre-criada no banco de dados *database.db*.
```cmd
python db.py
```

3 - E para startar o servidor: 
```powershell
python app.py
```
No console aparecerá a url referente ao servidor local, normalmente exposto na porta **5000**.

## Rotas

- **('/')** : Nesse seu caminho será redenderizado o formulário de incrição do usuário e carro.

- **('/cadastro')** : Nesse caminho é onde será feito a requisição POST dos dados submetidos do front-end para o banco de dados.

- **('/registros')** : Nesse caminho é renderizado a tabela de registros feitos por meio do metodo GET, para a análise dos consultores. 