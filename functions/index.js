const functions = require("firebase-functions");

const admin = require('firebase-admin');
admin.initializeApp();


// exports.addMessage() = functions.https.onRequest(async(req,res)=> {
//     const original = req.query.text;
    
//     const writeResult 
// })




// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});
