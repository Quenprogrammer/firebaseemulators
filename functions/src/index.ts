import { onRequest } from 'firebase-functions/v2/https';
import * as admin from 'firebase-admin';
import * as logger from 'firebase-functions/logger';

// Initialize Firebase Admin SDK
admin.initializeApp();

// Cloud Function to add data into a Firestore collection
export const addUserData = onRequest(async (req, res) => {
  const { name, email, age } = req.body; // Extract data from the request body

  // Validate data
  if (!name || !email || !age) {
    res.status(400).send('Missing required fields: name, email, or age');
    return; // Ensure the function completes after sending the response
  }

  try {
    // Reference to the Firestore collection (e.g., 'users')
    const usersCollection = admin.firestore().collection('users');

    // Add a new document with the provided user data
    const userRef = await usersCollection.add({
      name,
      email,
      age,
      createdAt: admin.firestore.FieldValue.serverTimestamp(), // Timestamp
    });

    logger.info('User data added successfully', { structuredData: true });

    // Respond with the document ID of the added user
    res.status(201).send(`User added with ID: ${userRef.id}`);
  } catch (error) {
    logger.error('Error adding user data', { structuredData: true, error });

    // Respond with an error if something goes wrong
    res.status(500).send('Error adding user data');
  }
});
