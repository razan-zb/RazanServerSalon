import express from 'express';
import routes from './routes/index.js';
import { connectDb } from './db/index.js';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(routes);

// Default route for testing
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Connect to the database and start the server
const startServer = async () => {
  try {
    // Connect to MongoDB
    await connectDb();
    console.log('Connected to MongoDB');

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error connecting to the database:', error);
    process.exit(1); // Exit the process with an error code
  }
};

startServer();