class MovieList {
    constructor() {
        this.movies = [];
    }
    addMovie(movie) {
        this.movies.push(movie);
    }
    getAllMovies(){
        return this.movies;
    }

    getMovieById(id){
        const movie = this.movies.find(movie => movie.id == id);
        if(!movie){
            throw new Error("Filme não encontrado");
        }
        return movie;
    }

    updateMovie(id, updateData) {
        const movie = getMovieById(id);
        Object.assign(song, updateData);
        return movie;
    }

    deleteMovie(id) {
        this.movies = this.movies.filter(movie => movie.id != id);
    }

    getTop10Movies() {
        return this.songs.sort((a,b) => b.movies - a.plays).slice(0, 10);
    }

    getTotalMovies(){
        return this.movies.length;
    }

} 
  
module.exports = MovieList;