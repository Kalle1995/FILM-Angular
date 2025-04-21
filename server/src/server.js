import express from "express";
import Database from "better-sqlite3";
import cors from "cors";

const app = express();
const db = new Database('./db/film-manager.db', { 
    verbose: console.log  
});

app.use(cors());
app.use(express.json());

// Fetch all movies
app.get('/api/movies', (req, res) => {
  try {
    const movies = db.prepare(`
      SELECT id, name, image, year, type, description, rating
      FROM movies
    `).all(); 
    res.json(movies);
  } catch (error) {
    console.error('Fel vid hämtning av filmer:', error);
    res.status(500).json({ error: 'Fel vid hämtning av filmer.' });
  }
});

// Fetch a single movie by name
app.get('/api/movies/:name', (req, res) => {
  const { name } = req.params;
  
  try {
    const movie = db.prepare(`
      SELECT id, name, image, year, type, description, rating 
      FROM movies 
      WHERE LOWER(name) = LOWER(?)
    `).get(name);

    if (!movie) {
      return res.status(404).json({ error: 'Filmen hittades inte.' });
    }

    res.json(movie);
  } catch (error) {
    console.error('Fel vid hämtning av film:', error);
    res.status(500).json({ error: 'Fel vid hämtning av film.' });
  }
});

// Add a new movie
app.post('/api/movies', (req, res) => {
  const { name, image, year, type, description, rating } = req.body;

  // Kontrollera om alla fält är ifyllda
  if (!name || !image || !year || !type || !description || !rating) {
    return res.status(400).json({ error: 'Alla fält måste fyllas i.' });
  }

  const insert = db.prepare(`
    INSERT INTO movies (name, image, year, type, description, rating)
    VALUES (?, ?, ?, ?, ?, ?)
  `);
  
  try {
    insert.run(name, image, year, type, description, rating);
    res.status(201).json({ message: 'Filmen har lagts till!' });
  } catch (error) {
    console.error('Fel vid tillägg av film:', error);
    res.status(500).json({ error: 'Fel vid tillägg av film.' });
  }
});

const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
