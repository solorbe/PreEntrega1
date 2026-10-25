# PreEntrega 1 - Backend II

<!-- descripción del proyecto;
tecnologías utilizadas;
instrucciones de instalación;
variables de entorno necesarias;
comandos para ejecutar el servidor;
roles disponibles;
endpoints principales;
ejemplos de uso;
explicación de la temática elegida. -->

## Descripción del proyecto

Es una API backend para una plataforma de eventos, inscripciones y reservas de tickets.

## Entidades principales

User
Event
Category
Ticket (reservas de eventos)

## Roles del proyecto

**Admin**: con permisos generales sobre el sistema.
Podrá gestionar usuarios, categorías, eventos e inscripciones.
**Organizer**: crea y administra eventos.
**User**: consulta eventos o reserva tickets.

## Requisitos

- Node.js
- git
- una cuenta de **MongoDB Atlas**

## Instalación paso a paso

```bash
git clone
npm install express dotenv mongoose 
completar .env.example .env  
npm run dev
```

## Flujo de una petición

```bash

```
Routes: definen endpoints.
Controllers: reciben request y devuelven response.
Services: manejan lógica de negocio.
Repositories: organizan operaciones de datos.
DAOs: interactúan con la persistencia.
DTOs: definen qué información se expone.
Middlewares: procesan validaciones intermedias.