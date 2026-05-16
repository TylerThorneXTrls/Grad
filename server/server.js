const express = require('express');
const cors = require('cors');
const fs = require('fs'); 
const app = express();

app.use(cors()); 
app.use(express.json());

app.post('/submit', (req, res) => {
    // assigns the request data to a varible
    const newData = req.body; 
//loga it used for devolpmwent
    console.log("Data received:", newData);
//creates an array called database
    let database = [];
// gives the data base varible the data from the data.json
    if (fs.existsSync('data.json')) {
        const fileContent = fs.readFileSync('data.json');
        database = JSON.parse(fileContent);
    }
//adds the new message to the database array

    database.push(newData); 
//writes over the current databses with the new infomation

    fs.writeFileSync('data.json', JSON.stringify(database, null, 2));
//response back to the clinet saying it was uscceful    
res.status(200).send({ message: "Data saved successfully!" });
});

//the server
app.listen(5000, () => console.log("Server running on http://localhost:5000"));
