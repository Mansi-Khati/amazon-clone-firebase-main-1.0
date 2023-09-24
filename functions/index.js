/* eslint-disable no-unused-vars */
/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// App config;
// eslint-disable-next-line max-len
const stripe = require("stripe")("sk_test_51LzM3NSHmSMl1TTXf8qgIT0EE5L0Hj9mH906HWn6XfpGP6DEEjaMZOhmkWcH4UH89Ngxb9mJcfiBLgROp9ivPScs00XdjET6wI");

const app = express();

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
//   if (req.method == "OPTIONS") {
//     return res.sendStatus(200);
//   }
//   next();
// });


// Middleware;
app.use(cors({origin: true}));
app.use(express.json());

// Router
app.get("/", (req, res) => res.status(200).send("hello"));

// app.post("/payments/create", async (req, res) => {
//   const total = req.query.total;
//   console.log(`Request payment amount >>> ${total}`);

//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: total,
//     currency: "usd",
//   });

//   res.status(201).send({
//     clientSecret: paymentIntent.client_secret,fire
//   });
// });

// Listen
exports.api = functions.https.onRequest(app);

// http://localhost:5001/e-clone-95439/us-central1/api

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
