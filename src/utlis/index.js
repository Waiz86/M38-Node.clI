const movieArr = [];

class Movie {
    constructor(title, actor="not specified") {
        this.title = title; 
        this.actor = actor;
    };
    add() {
        movieArr.push(this);
        console.log(movieArr);
    }
}

module.exports = Movie;
