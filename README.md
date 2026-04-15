# API To-Do List

## Descrição
Essa API foi feita em Node.js sem usar frameworks como Express, para praticar como funciona o HTTP na prática.

Ela permite criar, listar, atualizar e deletar tarefas, além de buscar por ID.

## Tecnologias utilizadas
- Node.js
- Módulo HTTP nativo
- JavaScript

## Como executar

1. Entrar na pasta do projeto:
cd Api_to_do_list

2. Rodar o servidor:
node app.js

3. Acessar:
http://localhost:3000

## Endpoints

POST /tasks  
GET /tasks  
GET /tasks/:id  
PUT /tasks/:id  
DELETE /tasks/:id  

## Estrutura

O projeto foi separado em partes:

- Routes: recebe as requisições  
- Controller: controla a resposta  
- Service: faz a lógica  
- Model: estrutura das tarefas  

## Observações

- Os dados são armazenados em memória (array)
- Ao reiniciar o servidor, os dados são perdidos

## Autor
Gabriel Pierri
