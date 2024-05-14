import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import {
  getStorage,
  ref,
  uploadBytes,
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyBBoD-B1Lf9kr-IAbH_bfivFjA1P9bRTlg",
    authDomain: "league-tracker-bad8d.firebaseapp.com",
    databaseURL: "https://league-tracker-bad8d-default-rtdb.firebaseio.com",
    projectId: "league-tracker-bad8d",
    storageBucket: "league-tracker-bad8d.appspot.com",
    messagingSenderId: "426545364840",
    appId: "1:426545364840:web:d3985b41e162ca472b60dd",
    measurementId: "G-Q7NDH5WYXG"
  };

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

function uploadFile(file) {
  const storageRef = ref(storage, "carpeta/" + file.name);

  uploadBytes(storageRef, file)
    .then((snapshot) => {
      console.log("Archivo subido exitosamente");
    })
    .catch((error) => {
      console.error("Error al subir el archivo:", error);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('button');
    button.addEventListener('click', function(){
        const fileInput = document.getElementById('fileInput');
        const file = fileInput.files[0];
        uploadFile(file);
    })
})
