import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCdqSnZaZxUrtgB4_4PVzCh0KCTd3Dgq0k",
  authDomain: "nba-fstack.firebaseapp.com",
  databaseURL: "https://nba-fstack.firebaseio.com",
  projectId: "nba-fstack",
  storageBucket: "nba-fstack.appspot.com",
  messagingSenderId: "374296075908",
  appId: "1:374296075908:web:52bca0d0e4e93d28eaecd1",
  measurementId: "G-VYBH2ZJWXH"
};

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref("articles");
const firebaseVideos = firebaseDB.ref("videos");
const firebaseTeams = firebaseDB.ref("teams");

const firebaseLooper = snapshot => {
  const data = [];
  snapshot.forEach(childSnapshot => {
    data.push({
      ...childSnapshot.val(),
      id: childSnapshot.key
    });
  });
  return data;
};

export {
  firebase,
  firebaseDB,
  firebaseArticles,
  firebaseVideos,
  firebaseTeams,
  firebaseLooper
};
