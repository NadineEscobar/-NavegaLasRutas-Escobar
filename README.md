# Mockup Studio - E-commerce para Diseñadores

Mockup Studio es una tienda online desarrollada con React y Vite, pensada para ofrecer recursos de mockups a diseñadores. Permite explorar productos, filtrarlos por categorías, agregarlos al carrito y realizar compras, todo integrado con Firebase para la gestión de productos y órdenes.

## ✨ Características

- 🛍️ Catálogo de productos con imágenes, descripciones y precios.
- 🔍 Filtrado por categorías dinámicas.
- 🛒 Carrito de compras persistente durante la sesión.
- ✅ Checkout con formulario de usuario y generación de órdenes en Firebase.
- 🎨 Estilos personalizados y responsive con Bootstrap 5.
- 🔄 Navegación dinámica con React Router (SPA).
- ☁️ Integración con Firebase Firestore para productos y órdenes.

## 🛠️ Tecnologías utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Firebase (Firestore)](https://firebase.google.com/)
- [Bootstrap 5](https://getbootstrap.com/)
- [React Router DOM](https://reactrouter.com/)

## 📁 Estructura del proyecto

```
src/
  App.jsx
  main.jsx
  theme.css
  firebaseConfig.js
  components/
    NavBar.jsx
    ItemListContainer.jsx
    ItemList.jsx
    Item.jsx
    ItemDetailContainer.jsx
    ItemDetail.jsx
    ItemCount.jsx
    CartWidget.jsx
    Cart.jsx
    Checkout.jsx
    Footer.jsx
  context/
    CartContext.jsx
  data/
    products.js
  script/
    uploadProducts.js
  utils/
    formatPrice.js
public/
  vite.svg
.env
```

## ⚙️ Instalación y configuración

1. **Cloná el repositorio**

```bash
git clone https://github.com/NadineEscobar/ProyectoFinal-Escobar.git
cd e-commerce
```

2. **Instalá las dependencias**

```bash
npm install
```

3. **Agregá las variables de entorno**

Creá un archivo `.env` en la raíz del proyecto con tus credenciales de Firebase:

```env
VITE_API_KEY=TU_API_KEY
VITE_AUTH_DOMAIN=TU_AUTH_DOMAIN
VITE_PROJECT_ID=TU_PROJECT_ID
VITE_STORAGE_BUCKET=TU_STORAGE_BUCKET
VITE_MESSAGING_SENDER_ID=TU_SENDER_ID
VITE_APP_ID=TU_APP_ID
```

> 🔐 Este archivo está excluido del repositorio por seguridad (`.gitignore`). Las credenciales deben solicitarse al autor o profesor del proyecto.

4. **Subida de productos a Firestore (opcional)**

Si necesitás cargar los productos a la base de datos, corré el siguiente script:

```bash
node script/uploadProducts.js
```

> Asegurate de que las credenciales estén correctamente configuradas.

5. **Iniciá el servidor**

```bash
npm run dev
```

## 🌐 Deploy

Este proyecto fue desplegado en [Vercel](https://vercel.com/) como SPA.