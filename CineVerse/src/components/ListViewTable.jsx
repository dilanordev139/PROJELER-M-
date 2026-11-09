import React from "react";
import { Star, Play, Bookmark, Check, Heart, Scale } from "lucide-react";

export default function ListViewTable({
  movies,
  watchlist,
  watchedMovies,
  favoriteMovies,
  compareList,
  onToggleWatchlist,
  onToggleWatched,
  onToggleFavorite,
  onToggleCompare,
  onOpenTrailer,
  onSelectMovie
}) {
  return (
    <div className="list-view-container">
      <table className="imdb-list-table">
        <thead>
          <tr>
            <th style={{ width: "60px" }}>Sıra</th>
            <th style={{ width: "70px" }}>Afiş</th>
            <th>Film Başlığı & Yönetmen</th>
            <th>Yıl</th>
            <th>Süre</th>
            <th>Tür</th>
            <th>IMDb</th>
            <th style={{ textAlign: "right", width: "180px" }}>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, idx) => {
            const inWatchlist = watchlist.some((m) => m.id === movie.id);
            const isWatched = watchedMovies.some((m) => m.id === movie.id);
            const isFav = favoriteMovies.some((m) => m.id === movie.id);
            const isComparing = compareList.some((m) => m.id === movie.id);

            return (
              <tr key={movie.id} className="list-table-row">
                <td className="table-rank">
                  {movie.top250Rank ? `#${movie.top250Rank}` : idx + 1}
                </td>
                <td>
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="table-poster-thumb"
                    onClick={() => onSelectMovie(movie)}
                  />
                </td>
                <td>
                  <div className="table-title-cell">
                    <span className="table-movie-title" onClick={() => onSelectMovie(movie)}>
                      {movie.title}
                    </span>
                    <span className="table-movie-sub">
                      Yön: {movie.director} • {movie.stars.slice(0, 2).join(", ")}
                    </span>
                  </div>
                </td>
                <td className="table-muted-text">{movie.year}</td>
                <td className="table-muted-text">{movie.duration}</td>
                <td>
                  <div className="table-genres-cell">
                    {movie.genres.slice(0, 2).map((g) => (
                      <span key={g} className="table-genre-tag">{g}</span>
                    ))}
                  </div>
                </td>
                <td>
                  <div className="table-score-badge">
                    <Star size={14} fill="#f5c518" stroke="#f5c518" />
                    <strong>{movie.rating}</strong>
                  </div>
                </td>
                <td style={{ textAlign: "right" }}>
                  <div className="table-actions-cell">
                    <button
                      className="table-btn-icon"
                      onClick={() => onOpenTrailer(movie)}
                      title="Fragmanı Oynat"
                    >
                      <Play size={14} />
                    </button>
                    <button
                      className={`table-btn-icon ${inWatchlist ? "active-gold" : ""}`}
                      onClick={() => onToggleWatchlist(movie)}
                      title={inWatchlist ? "İzleme Listesinden Çıkar" : "İzleme Listesine Ekle"}
                    >
                      <Bookmark size={14} fill={inWatchlist ? "#f5c518" : "none"} />
                    </button>
                    <button
                      className={`table-btn-icon ${isWatched ? "active-green" : ""}`}
                      onClick={() => onToggleWatched(movie)}
                      title={isWatched ? "İzlenmedi Olarak İşaretle" : "İzlendi Olarak İşaretle"}
                    >
                      <Check size={14} />
                    </button>
                    <button
                      className={`table-btn-icon ${isFav ? "active-red" : ""}`}
                      onClick={() => onToggleFavorite(movie)}
                      title={isFav ? "Favorilerden Çıkar" : "Favorilere Ekle"}
                    >
                      <Heart size={14} fill={isFav ? "#f43f5e" : "none"} />
                    </button>
                    <button
                      className={`table-btn-icon ${isComparing ? "active-cyan" : ""}`}
                      onClick={() => onToggleCompare(movie)}
                      title={isComparing ? "Karşılaştırmadan Çıkar" : "Karşılaştırmaya Ekle"}
                    >
                      <Scale size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
