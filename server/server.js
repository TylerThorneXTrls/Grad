const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());

const dataFile = path.join(__dirname, 'data.json');

app.post('/submit', (req, res) => {
    const newData = req.body;
    console.log('Data received:', newData);

    let database = [];
    try {
        if (fs.existsSync(dataFile)) {
            const fileContent = fs.readFileSync(dataFile, 'utf8');
            database = JSON.parse(fileContent || '[]');
        }

        database.push(newData);
        fs.writeFileSync(dataFile, JSON.stringify(database, null, 2));

        res.status(200).json({ message: 'Data saved successfully!' });
    } catch (err) {
        console.error('Failed to save data:', err);
        res.status(500).json({ error: 'Failed to save data' });
    }
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
