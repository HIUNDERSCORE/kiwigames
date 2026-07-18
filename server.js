const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000; // Runs on user ports, no sudo needed

// Your key is saved in a hidden environment variable (.env file)
const APTOIDE_API_KEY = process.env.APTOIDE_KEY; 

app.use(express.static('public')); // Serves your HTML/CSS

// The safe endpoint your frontend will talk to
app.get('/api/store-data', async (req, res) => {
    try {
        // The server talks to Aptoide using the key, hiding it from the browser
        const response = await axios.get('https://ws.catappult.io/api/applications', {
            headers: { 'Api-Key': APTOIDE_API_KEY }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch store data safely.' });
    }
});

app.listen(PORT, () => console.log(`KiwiWeb running securely on port ${PORT}`));
