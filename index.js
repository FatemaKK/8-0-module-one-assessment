/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
//return an array
//create an empty array
//all titles of movies
//titles is in an array of objects
//make a loop to check for title
//add all titles to the empty array
//if no title provided array is empty
//return the array with titles
function getAllMovieTitles(movies) {
  let movieNames = [];
  for (let i = 0; i < movies.length; i++){
    movieNames.push(movies[i].title)
  }
  return movieNames;
}

/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
//return a number
//number = highest metascore
//make a loop
//to check all metascores
//the highest metascore will be returned
//if the movies array is empty return '0'
//create a variable with a starting score
//metascore is a string 
//convert metascore string to a number 
function getHighestMetascore(movies) {
  let highestMetascore = 0;
  for (let i = 0; i < movies.length; i++){
    let metascoreStr = Number(movies[i].metascore)
    if(metascoreStr > highestMetascore){
      highestMetascore = metascoreStr
    }
  }
  return highestMetascore;
}
  

/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
//returns a number
//number is average of imdb ratings of all movies
//imdb rating is a string
//convert imdb rating string to a number
//create a loop
//check for the imdb ratings
//add all imdb ratings
//divide the total with the length of the movies (to get the number of movie ratings provided) for the average
//return result/average 
//return 0 if movies array is empty
function getAverageIMDBRating(movies) {
  let average = 0;
  let total = 0;
 
  for (let i = 0; i < movies.length; i++){
    let imdbRatingStr = Number(movies[i].imdbRating)
    total += imdbRatingStr
    }
  if (!movies.length){
    return 0;
  }
  average = total/movies.length;
  return average;
}

/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
//returns an object
//keys of object : movie rated
//value of keys in object : number of movies
//if no movies return empty object
//make a loop
//check for movie rated
//add key and values to that empty object
//return object with the key : movie rated & value : number of movies
function countByRating(movies) {
  let ratingCount = {};
  
  for (let movie of movies){
    let count = 0
    if(movie.rated){
     count ++
     ratingCount[movie.rated] = count
    } 
  }

  if(!movies.length){
    return ratingCount;
  }
  
  return ratingCount;
}

/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
//returns an object
//returns entire movie object matching the id
//if movies array is empty or movie id doesn't match return "null"
//create a loop
//check for the id match
//return the object if match is found
function findById(movies, id) {
  let movieID = {}
  if(!movies.length){
    return null;
  }
  for (let movie of movies){
    if(movie.imdbID !== id){
      return null;
    } else if (movie.imdbID === id){
      return movieID[movie]
    }
  }
  return movieID;
}


/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
//return an array 
//array will have movie objects
//make a loop
//check if movie genre matches genre provided
//if there is a match add it to the array
//if there is no match or no movies provided return an empty array
function filterByGenre(movies, category) {
  let filterMovie = [];
    if(!movies){
      return filterMovie;
    }
    for (let movie of movies){
      if(movie.genre === category){
        filterMovie.push(movie)
      }
    }
    return filterMovie;
  }



/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
//returns an array
//array contains object that matches the year given or is less than the year given
//make a loop
//check if the movie release year is less than or equal to the year given
//return an array of object = movies that are less than or equal to the year given
function getAllMoviesReleasedAtOrBeforeYear(movies, number) {
  let date = [];
  if(!movies.length){
    return date
  }
  for (let movie of movies){
    if(movie.released <= number){
      date.push(movie)
    }if (movie.released !== number || !movie.released === number){
      return date
    }
  }
  return Number(date);
}
  



/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
//returns a string
//string is name of a movie
//make a loop
//check highest box office amount
//box office amount is a string
//convert it to a number
//when highest box office number is found
//return the name of that movie
function getBiggestBoxOfficeMovie() {}

   
      



// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
