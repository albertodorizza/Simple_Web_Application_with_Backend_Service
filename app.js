const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

var np = require('./src/modules/nextPrime');

const app = express();

// Parse JSON and url-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Handle GET request (home)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

// Handle 'calculate' POST requests 
app.post('/calculate', (req, res) => {
    // Accessing to the POST data
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    
    // Compute next prime number using ad-hoc modules 
    const nextPrimeNumber = np.nextPrime(num1, num2);
    const overallSum = nextPrimeNumber + num1 + num2;

    // Helper printed information
    console.log('Received POST data:', req.body);
    console.log('Next prime number:', nextPrimeNumber);

    res.send(JSON.stringify({ nextPrime: nextPrimeNumber, overallSum: overallSum}));
});

// Starting server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});