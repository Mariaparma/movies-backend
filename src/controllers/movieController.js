const Movie = require("../models/Movie")
const MovieList = require("../models/MovieList");

const lista = new MovieList();
const  filme1 = new Movie ('Minha Culpa', 'Domingo González', '120 minutes', 320);
lista.addMovie(filme1);

lista.addMovie(new Movie('Sua Culpa', 'Domingo González', '115 minutes', 220));

const router = {
    addMovie: (req, res) => {
        try {
            const { title, director, duration, plays } = req.body;
            if(!title || !director ||duration !) {
                throw new Error('Preencha todos os campos!')
            }
            const movie = new Movie (title, director, duration, plays)
            lista.addMovie(movie);
            res.status(200).json({message: "Criado com sucesso"});
        }catch (error) {
            res.status(400).json({message: "Erro ao criar filme", error});
        }
    },

    getAllSongs: (req, res) => {
        try {
            const movies = lista.getAllMovies();
            res.status(200).json(movies);
        } catch (error) {
            res.status(404).json({message: 'Erro ao buscar filmes', error});
        }
    },

    getMovieById: (req, res) => {
        try {
            const id = req.params.id;
            res.status(200).json(lista.getMovieById(id));
        } catch (error) {
            res.status(404).json({
                message: 'Erro ao buscar filme por id',
                error
            });
        }
    },

    updateMovie: (req, res) => {
        try {
            res.status(200).json(lista.updateMovie(req.params.id, req.body));
        } catch (error) {
            res.status(404).json('Erro ao atualizar', error)
        }
    },

    deleteMovie: (req, res) => {
        try {
            lista.deleteMovie(req.params.id);
            res.status(200).json({
                message: 'Filme deletado com sucesso'
            })
        } catch (error) {
            res.status(404).json('Erro ao deletar Filme', error);
        }
    },

    getTop10Movie: (req, res) => {
        try {
            const movies = lista.getTop10Movies();
            res.status(200).json(Movies);
        } catch (error) {
            res.status(404).json('Erro ao buscar Top10', error);
        }
    }

};

module.exports = router;





}