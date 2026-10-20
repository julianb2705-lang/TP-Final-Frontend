# ECO

Aplicación web de mensajería inspirada en WhatsApp, desarrollada con React como trabajo práctico final de Frontend.

**Link del despliegue:** https://tp-final-frontend-kappa.vercel.app

## Desafío elegido

Desarrollé una app de mensajería simple con datos de prueba, tiene implementados los contenidos vistos en el curso de Frontend.

- Iniciar sesión con un nombre de usuario.
- Ver una lista de chats con foto de perfil y cantidad de mensajes sin leer.
- Buscar chats por nombre (el texto de búsqueda se guarda en la URL).
- Abrir una conversación, ver el estado del contacto (en línea o desconectado) y enviar mensajes.
- Conservar el usuario y los mensajes al recargar la página (con `localStorage`).

## Cómo cumple la consigna

- **Estados:** `useState` en formularios, buscador y avatares.
- **Contexto:** `ChatContext` guarda el usuario y los chats, y expone `login`, `logout`, `sendMessage` y `markAsRead`.
- **React Router:** rutas `/login`, `/` y `/chat/:id`, con redirección si no hay sesión.
- **Parámetros de búsqueda:** el buscador de la página principal usa `useSearchParams` (`/?q=juan`).
- **Formularios:** inicio de sesión y envío de mensajes.
- **Custom hooks:** `useLocalStorage`, `useChat` y `useSearchChats`, que separan la lógica de los componentes.
- **Componentes:** `ChatList`, `ChatItem`, `MessageBubble`, `MessageForm` y `Avatar`.
- **Responsivo y accesible:** funciona de 320px a 2000px, con fondo oscuro y letra clara, etiquetas en los campos, foco visible y estado del contacto indicado con texto y no solo con color.

## Librerías usadas

- React
- Vite
- react-router-dom

## Cómo correrlo localmente

    npm install
    npm run dev

## Dificultades
- Tuve problemas con los nombres y las extensiones de los archivos (`.js` en lugar de `.jsx`, y mayúsculas distintas en `ChatItem`).
- Tuve que agregar un archivo `vercel.json` para que las rutas no den error 404 al recargar la página en Vercel.
- Tarde mucho en poder entender cómo conectar las carpetas de: contexto, custom hooks y router.
- Corrí los comandos de carpetas equivocadas en reiteradas ocasiones. Sobre todo con nmp y git.