import React from "react";
import { Star, Play, Bookmark, Info, Check, Heart, Scale } from "lucide-react";

export default function MovieCard({
  movie,
  isInWatchlist,
  isWatched,
  isFavorite,
  isComparing,
  onToggleWatchlist,
  onToggleWatched,
  onToggleFavorite,
  onToggleCompare,
  onOpenTrailer,
  onSelectMovie,
  onOpenDirector
}) {
  return (
    <article className={`movie-card ${isWatched ? "is-watched" : ""}`}>
      <div className="card-poster-wrap" onClick={() => onSelectMovie(movie)}>
        <img src={movie.poster} alt={movie.title} className="card-poster" loading="lazy" />

        {/* Top 250 Tag if applicable */}
        {movie.top250Rank && (
          <div className="top250-corner-tag">#{movie.top250Rank} Top 250</div>
        )}

        {/* Top Floating Action Pill */}
        <div className="card-floating-actions" onClick={(e) => e.stopPropagation()}>
          <button
            className={`card-float-btn ${isInWatchlist ? "active-gold" : ""}`}
            onClick={() => onToggleWatchlist(movie)}
            title={isInWatchlist ? "İzleme Listesinden Çıkar" : "İzleme Listesine Ekle"}
          >
            <Bookmark size={14} fill={isInWatchlist ? "#f5c518" : "none"} />
          </button>

          <button
            className={`card-float-btn ${isWatched ? "active-green" : ""}`}
            onClick={() => onToggleWatched(movie)}
            title={isWatched ? "İzlendi (Kaldır)" : "İzlendi Olarak İşaretle"}
          >
            <Check size={14} />
          </button>

          <button
            className={`card-float-btn ${isFavorite ? "active-red" : ""}`}
            onClick={() => onToggleFavorite(movie)}
            title={isFavorite ? "Favorilerden Çıkar" : "Favorilere Ekle"}
          >
            <Heart size={14} fill={isFavorite ? "#f43f5e" : "none"} />
          </button>

          <button
            className={`card-float-btn ${isComparing ? "active-cyan" : ""}`}
            onClick={() => onToggleCompare(movie)}
            title={isComparing ? "Karşılaştırmadan Çıkar" : "Diğer Filmle Karşılaştır"}
          >
            <Scale size={14} />
          </button>
        </div>

        {/* Quick Play Overlay on Hover */}
        <div
          className="poster-play-overlay"
          onClick={(e) => {
            e.stopPropagation();
            onOpenTrailer(movie);
          }}
          title="Fragmanı Oynat"
        >
          <div className="play-circle-icon">
            <Play size={20} fill="#000" />
          </div>
        </div>
      </div>

      <div className="card-body">
        <div className="card-rating-row">
          <div className="card-imdb-score">
            <Star size={15} fill="#f5c518" stroke="#f5c518" />
            <span>{movie.rating}</span>
          </div>

          <button
            className="card-rate-action"
            onClick={(e) => {
              e.stopPropagation();
              onSelectMovie(movie);
            }}
          >
            <Star size={13} /> Puanla
          </button>
        </div>

        <h3 className="card-title" onClick={() => onSelectMovie(movie)}>
          {movie.title}
        </h3>

        <div className="card-meta-row">
          <span>{movie.year}</span>
          <span>•</span>
          <span>{movie.duration}</span>
          {movie.oscars > 0 && (
            <>
              <span>•</span>
              <span className="card-oscar-pill">🏆 {movie.oscars} Oscar</span>
            </>
          )}
        </div>

        <div className="card-director-line">
          <small>Yönetmen:</small>{" "}
          <span
            className="director-link"
            onClick={(e) => {
              e.stopPropagation();
              onOpenDirector(movie.director);
            }}
          >
            {movie.director}
          </span>
        </div>

        <div className="card-genres">
          {movie.genres.slice(0, 2).map((genre) => (
            <span key={genre} className="card-genre-pill">
              {genre}
            </span>
          ))}
        </div>

        <div className="card-actions-row">
          <button
            className="card-btn-trailer"
            onClick={() => onOpenTrailer(movie)}
          >
            <Play size={14} /> Fragman
          </button>

          <button
            className="card-btn-detail"
            onClick={() => onSelectMovie(movie)}
            title="Detaylı Bilgi"
          >
            <Info size={16} />
          </button>
        </div>
      </div>
    </article>
  );
}
