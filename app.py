import os
from flask import Flask, render_template, request
import sqlite3

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/cadastro", methods = ['POST'])
def cadastro():
    dados = request.form
    try:
        conexao = sqlite3.connect('database.db')
        cursor = conexao.cursor()
        cursor.execute('''
            INSERT INTO registro_carro (
                nome_vendedor, email_vendedor, fone_vendedor, cpf_vendedor,
                marca_carro, modelo_carro, carroceria_carro, cambio_carro,
                ano_carro, km_carro
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ''', (
            dados['nome_vendedor'], dados['email_vendedor'], dados['fone_vendedor'], dados['cpf_vendedor'],
            dados['marca_carro'], dados['modelo_carro'], dados['carroceria_carro'], dados['cambio_carro'],
            int(dados['ano_carro']), int(dados['km_carro'])
        ))
        conexao.commit()
        conexao.close()
        return render_template("response.html")
    except Exception as e:
        return(f"Ocorreu um erro ao registrar: {str(e)}", "error")
        
@app.route("/registros", methods = ['GET'])
def getRegistros():
    try:
        conexao = sqlite3.connect('database.db')
        cursor = conexao.cursor()
        
        cursor.execute('SELECT * FROM registro_carro')
        registros = cursor.fetchall()
        
        conexao.close()
        
        return render_template('registros.html', registros=registros)
    except Exception as e:
        return f"Ocorreu um erro ao buscar os registros: {str(e)}", 50

if __name__ == '__main__':
    app.run(debug=False)
