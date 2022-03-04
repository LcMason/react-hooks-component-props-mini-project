import React from "react"
import MovieCard from "./MovieCard"

const MoviesContainer = ({movies}) => {
    const renderMovies = movies.map(movie => <MovieCard movie={movie}/>)
    return (
        <div>
            Movies Container
            {renderMovies}
        </div>

    )
}






export default MoviesContainer