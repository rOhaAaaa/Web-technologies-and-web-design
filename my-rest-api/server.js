const express = require('express');
const cors = require('cors');
const path = require('path');
const mysql = require('mysql2');
const app = express();

app.use(cors()); 
app.use(express.json()); 

app.use(express.static(path.join(__dirname, 'public')));

app.use('/images', express.static(path.join(__dirname, 'public/images')));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234', 
    database: 'conference_management' 
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.post('/items', (req, res) => {
    const newItem = req.body;
    const query = 'INSERT INTO conferences (title, participants, price, city, image) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [newItem.title, newItem.participants, newItem.price, newItem.city, newItem.image], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            res.status(500).send('Server error');
            return;
        }
        res.status(201).json({ id: result.insertId, ...newItem });
    });
});

app.get('/items', (req, res) => {
    const query = 'SELECT * FROM conferences';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            res.status(500).send('Server error');
            return;
        }
        res.json(results);
    });
});

app.get('/items/:id', (req, res) => {
    const id = req.params.id;
    const query = 'SELECT * FROM conferences WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            res.status(500).send('Server error');
            return;
        }
        if (results.length > 0) {
            res.json(results[0]);
        } else {
            res.status(404).send('Item not found');
        }
    });
});

app.put('/items/:id', (req, res) => {
    const id = req.params.id;
    const updatedItem = req.body;
    const query = 'UPDATE conferences SET title = ?, participants = ?, price = ?, city = ?, image = ? WHERE id = ?';
    db.query(query, [updatedItem.title, updatedItem.participants, updatedItem.price, updatedItem.city, updatedItem.image, id], (err) => {
        if (err) {
            console.error('Error updating data:', err);
            res.status(500).send('Server error');
            return;
        }
        res.json(updatedItem);
    });
});

app.delete('/items/:id', (req, res) => {
    const id = req.params.id;
    const query = 'DELETE FROM conferences WHERE id = ?';
    db.query(query, [id], (err) => {
        if (err) {
            console.error('Error deleting data:', err);
            res.status(500).send('Server error');
            return;
        }
        res.send('Item deleted successfully');
    });
});

app.listen(3002, () => {
    console.log('Server is running on http://localhost:3002');
});
