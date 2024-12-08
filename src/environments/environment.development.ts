export const environment1 = {
  isProduction: false,
  firebaseApp: {
    apiKey: "AIzaSyC-r9aGKCwa0dHN8SxkHSp79xHLHXjQSPw",
    authDomain: "testing-30e80.firebaseapp.com",
    databaseURL: "https://testing-30e80-default-rtdb.firebaseio.com",
    projectId: "testing-30e80",
    storageBucket: "testing-30e80.appspot.com",
    messagingSenderId: "996617703471",
    appId: "1:996617703471:web:b6a1c052a452092f0776da",
    measurementId: "G-9L8R4CK6S2"
  },
  useEmulators: true, // Enable emulator
  emulators: {
    firestore: {
      host: "localhost",
      port: 2480
    },
    auth: {
      host: "localhost",
      port: 3099
    },
    storage: {
      host: "localhost",
      port: 9199
    },
    functions: {
      host: "localhost",
      port: 5901
    }
  }
};
