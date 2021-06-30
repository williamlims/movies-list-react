import { Link } from "react-router-dom"

export const Movie = ({ movie }) => (
    <div className="movie-item">
        <div>
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="" />
        </div>
        <div className="movie-excerpt">
            <h5>{movie.title}</h5>
            <Link to={`/movie/${movie.id}`} className="btn btn-secondary">Ver detalhes</Link>
        </div>
    </div>
);
