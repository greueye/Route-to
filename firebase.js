
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  appId: "your-app-id"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export default firebase;
