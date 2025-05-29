import React from "react";

function MovieCard({
  movie: { title, vote_average, poster_path, release_date, original_language },
}) {
  return (
    <div>
      <div className="movie-card">
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : "/no-movie.png"
          }
          alt={title}
        />

        <div className="mt-4">
          <h3>{title}</h3>
          <div className="content">
            <div className="rating">
              <img src="star.svg" alt="Start Icon" />
              <p>{vote_average ? vote_average.toFixed(1) : "NN/A"}</p>
              <span>•</span>
              <div className="lang">{original_language}</div>
              <span>•</span>
              <div className="year">
                {release_date ? release_date.split("-")[0] : "N/A"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
