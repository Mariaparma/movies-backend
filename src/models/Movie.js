const { v4: uuid} = require("uuid");

class Movie {
    constructor(title, director, duration, plays = 0) {
        this.id = uuid();
        this.title = title;
        this.director = director;
        this.duration = duration;
        this.plays = plays;
    }

    play() {
        this.plays += 1;
    }
    
}

module.exports = Movie;