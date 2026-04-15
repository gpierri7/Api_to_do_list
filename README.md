# API To-Do List

## Descrição
Essa API foi desenvolvida utilizando Node.js puro, sem uso de frameworks como Express, com o objetivo de entender melhor como funciona o protocolo HTTP na prática.

A aplicação permite gerenciar tarefas (to-do list), realizando operações básicas como criação, listagem, atualização e remoção, além da busca por ID.

## Tecnologias utilizadas
- Node.js
- Módulo HTTP nativo
- JavaScript (CommonJS)

## Como executar o projeto



1. Acesse a pasta do projeto:
cd Api_to_do_list

2. Execute o servidor:
node app.js

3. 
http://localhost:3000

## Endpoints

### Criar tarefa
POST /tasks

Exemplo de body:
{
  "title": "Estudar Node.js"
}

---

### Listar tarefas
GET /tasks

---

### Buscar tarefa por ID
GET /tasks/:id

---

### Atualizar tarefa
PUT /tasks/:id

Exemplo de body:
{
  "completed": true
}

---

### Deletar tarefa
DELETE /tasks/:id

## Estrutura do projeto

O projeto foi organizado em camadas para separar responsabilidades:

- **Routes**: responsável por receber as requisições HTTP e direcionar para o controller correto  
- **Controller**: faz o controle da requisição e resposta  
- **Service**: contém a lógica da aplicação  
- **Model**: define a estrutura dos dados (tarefas)

## Observações

- Os dados são armazenados em memória (array), ou seja, ao reiniciar o servidor, as tarefas são perdidas  
- O projeto foi desenvolvido sem frameworks para melhor compreensão do funcionamento interno de uma API  

## Autor
Gabriel Pierri
