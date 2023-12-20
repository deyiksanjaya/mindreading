const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve your HTML files
app.use(express.static('public'));

// Endpoint to receive data from Script 1
app.post('/receiveData', (req, res) => {
    const combinedInput = req.body.combinedInput;

    // Process the data (you can log it for now)
    console.log('Data received from Script 1:', combinedInput);

    // You can send a response if needed
    res.send('Data received successfully!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
