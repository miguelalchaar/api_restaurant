# 🍽️ API de Restaurante

API para gerenciamento de pedidos em restaurante, simulando o fluxo de abertura e fechamento de mesas e o relacionamento entre sessões e pedidos.

## Tecnologias

- Node.js
- Express
- TypeScript
- Zod
- SQLite
- Knex.js

## Funcionalidades

- Criar mesas
- Abrir sessão de mesa
- Fechar sessão de mesa
- Cadastrar produtos
- Criar pedidos vinculados a uma sessão
- Listar pedidos por sessão
- Calcular total de pedidos de uma mesa

## Regras

- Uma **mesa** pode ter várias **sessões**
- Uma **sessão de mesa** representa um período de atendimento (aberta/fechada)
- Uma sessão pode conter vários **pedidos**
- Um pedido está associado a um **produto**
- Não é possível adicionar pedidos a sessões fechadas

### Tabelas:

- **tables** (mesas)
- **table_sessions** (sessões de mesas)
- **products** (produtos)
- **orders** (pedidos)


## Como executar

```bash

git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
npm install
npx knex migrate:latest
npm run dev

```

## Validação

As entradas da API são validadas utilizando Zod, garantindo consistência e segurança nos dados recebidos.

## 📄 Licença

Este projeto é para fins educacionais.



