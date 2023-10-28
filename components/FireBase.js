import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
const firebaseConfig = {
  apiKey: 'AIzaSyBnDmvvI8L-rEwvtX3iGy1_zpORWjCdyBE',
  authDomain: 'acessodbloja.firebaseapp.com',
  projectId: 'acessodbloja',
  storageBucket: 'acessodbloja.appspot.com',
  messagingSenderId: '102143243930',
  appId: '1:102143243930:web:4281e6632f318672519123',
  measurementId: 'G-ZH1T3BL9VG',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
