const express = require('express');

// Create an Express application
const app = express();

// Router for the root URL
// URL: localhost:8080
app.get('/', (req, res) => {
    return res.send("Hello Food server");
});

// Define the port
const PORT = 8080;

// Listen on the specified port
app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`);
});
