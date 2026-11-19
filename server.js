import "dotenv/config";
import express from "express";
import { MongoClient } from "mongodb";

// Create the Express application
const app = express();

// Define the server port
const port = 3000;

// Get the MongoDB connection string from environment variables
const uri = process.env.MONGO_URI;

// Create a MongoDB client
const client = new MongoClient(uri);

// Track whether the database connection is successful
let isConnected = false;

// GET / - Check the database connection
app.get("/", (req, res) => {
    if (isConnected) {
        return res.status(200).json({
            message: "Successfully connected to the database!",
        });
    }

    return res.status(500).json({
        message: "Failed to connect to the database.",
    });
});

// Connect to MongoDB and start the Express server
async function run() {
    try {
        // Connect to MongoDB Atlas
        await client.connect();

        // Verify the connection
        await client.db("admin").command({ ping: 1 });

        isConnected = true;

        console.log("Connected successfully to MongoDB!");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
    }

    // Start the server
    app.listen(port, () => {
        console.log("Server running on port: " + port);
    });
}

run();
