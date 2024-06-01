const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 9876;
const WINDOW_SIZE = 10;
const BASE_URL = 'http://20.244.56.144/test';

let window = [];

app.get('/numbers/:numberId', async (req, res) => {
    const { numberId } = req.params;
    let apiUrl = '';

    switch (numberId) {
        case 'p':
            apiUrl = '${BASE_URL}/primes';
            break;
        case 'f':
            apiUrl = '${BASE_URL}/fibo';
            break;
        case 'e':
            apiUrl = '${BASE_URL}/even';
            break;
        case 'r':
            apiUrl = '${BASE_URL}/rand';
            break;
        default:
            return res.status(400).json({ error: 'Invalid numberId' });
    }

    const prevState = [...window];
    try {
        const response = await axios.get(apiUrl, { timeout: 500 });
        const newNumbers = response.data.numbers.filter(num => !window.includes(num));
        window.push(...newNumbers);
        if (window.length > WINDOW_SIZE) {
            window = window.slice(window.length - WINDOW_SIZE);
        }
        const average = window.reduce((sum, num) => sum + num, 0) / window.length;
        res.json({
            windowPrevState: prevState,
            windowCurrState: window,
            numbers: newNumbers,
            avg: average.toFixed(2)
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch numbers' });
    }
});

app.listen(PORT, () => {
    console.log('Server is running on http://localhost:${PORT}');
});
