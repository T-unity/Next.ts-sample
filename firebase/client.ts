import { initializeApp, getApps } from 'firebase/app';

// 必要な機能をインポート
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import { getFunctions } from 'firebase/functions';

const firebaseConfig = {
  apiKey: "AIzaSyBtJ4HS9bXBXbgj7moSQIyv6kRbaFxYdyI",
  authDomain: "pfc-balance-8bff4.firebaseapp.com",
  projectId: "pfc-balance-8bff4",
  storageBucket: "pfc-balance-8bff4.appspot.com",
  messagingSenderId: "1093829112837",
  appId: "1:1093829112837:web:9881c2b437530e51da986c",
  measurementId: "G-D80G7523FX"
};

if (!getApps()?.length) {
  // Firebaseアプリの初期化
  initializeApp(firebaseConfig);
}

// 他ファイルで使うために機能をエクスポート
export const analytics = getAnalytics();
export const db = getFirestore();
export const storage = getStorage();
export const auth = getAuth();
export const funcions = getFunctions();