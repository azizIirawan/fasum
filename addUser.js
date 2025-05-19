const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json"); // pastikan file ada di folder ini

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const email = "userbaru@example.com";    // ganti dengan email yang mau dibuat
const password = "password123";          // ganti dengan password yang mau dibuat

admin.auth().createUser({
  email: email,
  password: password,
})
.then((userRecord) => {
  console.log("User berhasil dibuat dengan UID:", userRecord.uid);
})
.catch((error) => {
  console.error("Gagal membuat user:", error);
});
