import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDv_9ho4_S5s8jFjfJJQl1viDzrpYGYnTU",
	authDomain: "nextjs-7c441.firebaseapp.com",
	projectId: "nextjs-7c441",
	storageBucket: "nextjs-7c441.appspot.com",
	messagingSenderId: "411348489625",
	appId: "1:411348489625:web:b6a1197d33b4563389af08",
};
// const firebaseConfig = {
// 	apiKey: `${process.env.FIREBASE_API_KEY}`,
// 	authDomain: `${process.env.FIREBASE_AUTH_DOMAIN}`,
// 	projectId: `${process.env.FIREBASE_PROJECT_ID}`,
// 	storageBucket: `${process.env.FIREBASE_STORAGE_BUCKET}`,
// 	messagingSenderId: `${process.env.FIREBASE_SENDER_ID}`,
// 	appId: `${process.env.FIREBASE_APP_ID}`,
// };

//Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
