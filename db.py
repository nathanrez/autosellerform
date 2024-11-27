import sqlite3

conn = sqlite3.connect('database.db')
cursor = conn.cursor()
print('Conexão ao banco de dados realizada com sucesso!!!')

conn.execute('''
CREATE TABLE IF NOT EXISTS registro_carro (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome_vendedor TEXT NOT NULL,
    email_vendedor TEXT NOT NULL,
    fone_vendedor TEXT NOT NULL,
    cpf_vendedor TEXT NOT NULL,
    marca_carro TEXT NOT NULL,
    modelo_carro TEXT NOT NULL,
    carroceria_carro TEXT NOT NULL,
    cambio_carro TEXT NOT NULL,
    ano_carro INTEGER NOT NULL,
    km_carro INTEGER NOT NULL
)
''')

conn.commit()
conn.close()
print('tabela criada com sucesso!')
