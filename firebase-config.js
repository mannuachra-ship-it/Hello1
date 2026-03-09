const firebaseConfig = {
apiKey: "AIzaSyC9l1zMEt0xSDxV5h63hdY8IUBYaViOcm4",
authDomain: "hello1-4cdec.firebaseapp.com",
projectId: "hello1-4cdec",
messagingSenderId: "944755109942",
appId: "1:944755109942:web:846cbd59b8da0984a5e897"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.database();