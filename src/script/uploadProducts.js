import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import products from '../data/products.js';


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function uploadProducts() {
  const productsCollection = collection(db, 'products');
  for (const product of products) {
    try {
      await addDoc(productsCollection, product);
      console.log(`Producto agregado: ${product.title}`);
    } catch (error) {
      console.error('Error al agregar producto:', error);
    }
  }
}

uploadProducts();
