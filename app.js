const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
let app = express();
let movies = JSON.parse(fs.readFileSync('./data/movies.json'));
const logger = function (req, res, next) {
    console.log('Custom middleware called');
    next();
}
app.use(express.json());
app.use(morgan());
app.use(logger);


// GET - api/v1/movies
app.get('/api/v1/movies', (req, res) => {
    res.status(200).json({
        status: "success",
        count: movies.length,
        data: {
            movies: movies
        }
    });
});

// GET - api/v1/movies/id
app.get('/api/v1/movies/:id', (req, res) => {
    // console.log(req.params);
    const id = req.params.id * 1;
    let movie = movies.find(el => el.id === id);
    if (!movie) {
        return res.status(404).json({
            status: "fail",
            message: 'Movie with ID' + id + 'is not found'
        })
    }
    res.status(200).json({
        status: "success",
        data: {
            movie: movie
        }
    });
    // res.send('Test movie');
});

// POST - api/v1/movies
app.post('/api/v1/movies', (req, res) => {
    const newId = movies[movies.length - 1].id + 1;
    const newMovie = Object.assign({ id: newId }, req.body);
    movies.push(newMovie);
    fs.writeFile('./data/movies.json', JSON.stringify(movies), (err) => {
        res.status(201).json({
            status: "success",
            data: {
                movie: newMovie
            }
        })
    });
    // res.send('Created');
});

// PUT - api/v1/movies/id
app.patch('/api/v1/movies/:id', (req, res) => {
    // console.log(req.params);
    const id = req.params.id * 1;
    let movieToUpdate = movies.find(el => el.id === id);
    if (!movieToUpdate) {
        return res.status(404).json({
            status: 'fail',
            meaasge: 'No movie with that ID' + id + 'is found'
        });
    }
    let index = movies.indexOf(movieToUpdate);
    Object.assign(movieToUpdate, req.body);
    movies[index] = movieToUpdate;
    fs.writeFile('./data/movies.json', JSON.stringify(movies), (err) => {
        res.status(200).json({
            status: "success",
            data: {
                movie: movieToUpdate
            }
        })
    });
});

// DELETE - api/v1/movies/id
app.delete('/api/v1/movies/:id', (req, res) => {
    // console.log(req.params);
    const id = req.params.id * 1;
    let movieToDelete = movies.find(el => el.id === id);
    if (!movieToDelete) {
        return res.status(404).json({
            status: 'fail',
            meaasge: 'No movie with that ID' + id + 'is found'
        });
    }
    let index = movies.indexOf(movieToDelete);
    movies.splice(index, 1);
    fs.writeFile('./data/movies.json', JSON.stringify(movies), (err) => {
        res.status(204).json({
            status: "success",
            data: {
                movie: null
            }
        })
    });
});
module.exports = app; 