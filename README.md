<h1 align="center" style="font-weight: bold;">Finance System 💻</h1>

<p align="center">
    <b>Projeto desenvolvido em Typescript utilizando express e buscando seguir os principios do SOLID, desenvolvido para usuarios que desejam ter um controle financeiro.</b>
</p>

<h2 id="technologies">💻 Tecnologias</h2>

- Typescript
- Express
- MySQL
- Prisma

<h2 id="routes">📍 API Endpoints</h2>

Aqui você encontrará algumas das principais rotas/endpoints além de saber as requisições e respostas esperadas!
​

<h3 id="get-auth-detail">GET /customer/list</h3>

**RESPONSE**

```json
{
        "id": 1,
        "username": "username",
        "name": "your name",
        "email": "email@email.com",
        "password": "hashed password",
        "status": true,
        "created_at": "creation data",
        "updated_at": "update data"
    }
```

<h3 id="post-auth-detail">POST /customer/create</h3>

**REQUEST**

```json
{
    "username": "username",
    "name": "your name",
    "email": "email@email.com",
    "password": "your-password"
}
```

**RESPONSE**

```json
{
        "id": 1,
        "username": "username",
        "name": "your name",
        "email": "email@email.com",
        "password": "hashed password",
        "status": true,
        "created_at": "creation data",
        "updated_at": "update data"
    }
```

<h3 id="post-auth-detail">POST /login</h3>

**REQUEST**

```json
{
    "username": "username",
    "password": "your-password"
}
```

**RESPONSE**

```json
Login efetuado com sucesso, token: your-token
```

<h3 id="post-auth-detail">POST /account/income</h3>

**REQUEST**

```json
{
    "amount": 1412,
    "description": "Salário"
}
```

**RESPONSE**

```json
{
    "id": 1,
    "customerId": 1,
    "ownerUser": "username",
    "balance": 1412,
    "createdAt": "creation data",
    "updatedAt": "update data"
}
```

<h3 id="post-auth-detail">POST /account/expense</h3>

**REQUEST**

```json
{
    "amount": 120,
    "description": "Jogo da Steam",
    "method": "CREDITO | DEBITO | PIX"
}
```

**RESPONSE**

```json
{
    "id": 1,
    "customerId": 1,
    "ownerUser": "username",
    "balance": 1412,
    "createdAt": "creation data",
    "updatedAt": "update data"
}
```

Algumas rotas será necessário passar Baerer Token e parametros pelo path paramns.
