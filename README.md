# Documentação da API
1. Clone  o repositório
2. Use o comando npm install para instalar todas as dependencias
3. Use o npm start para rodar o projeto
## Endpoints de Receitas

### Obter todas as receitas

- **URL:** `/receitas`
- **Método:** `GET`
- **Descrição:** Retorna uma lista de todas as receitas.
- **Resposta:** `200 OK` com um array de receitas.

### Obter uma receita por ID

- **URL:** `/receitas/:id`
- **Método:** `GET`
- **Descrição:** Retorna uma receita específica com base no ID fornecido.
- **Parâmetros de URL:**
  - `id` (string): O ID da receita a ser retornada.
- **Resposta:** `200 OK` com os detalhes da receita.

### Criar uma nova receita

- **URL:** `/receitas`
- **Método:** `POST`
- **Descrição:** Cria uma nova receita.
- **Corpo da Requisição:** Um objeto JSON contendo os detalhes da receita.
- **Resposta:** `201 Created` com a receita criada.

### Atualizar uma receita existente

- **URL:** `/receitas/:id`
- **Método:** `PUT`
- **Descrição:** Atualiza uma receita existente com base no ID fornecido.
- **Parâmetros de URL:**
  - `id` (string): O ID da receita a ser atualizada.
- **Corpo da Requisição:** Um objeto JSON contendo os novos detalhes da receita.
- **Resposta:** `200 OK` com a receita atualizada.

### Deletar uma receita

- **URL:** `/receitas/:id`
- **Método:** `DELETE`
- **Descrição:** Deleta uma receita específica com base no ID fornecido.
- **Parâmetros de URL:**
  - `id` (string): O ID da receita a ser deletada.
- **Resposta:** `204 No Content` indicando que a receita foi deletada com sucesso.

## Endpoints de Usuários

### Obter todos os usuários

- **URL:** `/usuarios`
- **Método:** `GET`
- **Descrição:** Retorna uma lista de todos os usuários.
- **Resposta:** `200 OK` com um array de usuários.

### Criar um novo usuário

- **URL:** `/usuarios`
- **Método:** `POST`
- **Descrição:** Cria um novo usuário.
- **Corpo da Requisição:** Um objeto JSON contendo os detalhes do usuário.
- **Resposta:** `201 Created` com o usuário criado.

### Atualizar um usuário existente

- **URL:** `/usuarios/:id`
- **Método:** `PUT`
- **Descrição:** Atualiza um usuário existente com base no ID fornecido.
- **Parâmetros de URL:**
  - `id` (string): O ID do usuário a ser atualizado.
- **Corpo da Requisição:** Um objeto JSON contendo os novos detalhes do usuário.
- **Resposta:** `200 OK` com o usuário atualizado.

### Login de usuário

- **URL:** `/usuarios/login`
- **Método:** `POST`
- **Descrição:** Autentica um usuário com base nas credenciais fornecidas.
- **Corpo da Requisição:** Um objeto JSON contendo as credenciais do usuário (e.g., email e senha).
- **Resposta:** `200 OK` com os detalhes do usuário autenticado.

### Deletar um usuário

- **URL:** `/usuarios/:id`
- **Método:** `DELETE`
- **Descrição:** Deleta um usuário específico com base no ID fornecido.
- **Parâmetros de URL:**
  - `id` (string): O ID do usuário a ser deletado.
- **Resposta:** `204 No Content` indicando que o usuário foi deletado com sucesso.
