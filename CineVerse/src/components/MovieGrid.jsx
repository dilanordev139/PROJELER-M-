import React from "react";
import MovieCard from "./MovieCard";
import { Film } from "lucide-react";

export default function MovieGrid({
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
  onSelectMovie,
  onOpenDirector,
  onResetFilters
}) {
  if (movies.length === 0) {
    return (
      <div className="empty-state">
        <Film size={48} />
        <h3>Aradığınız kriterlere uygun film bulunamadı</h3>
        <p>Arama kelimesini değiştirmeyi veya filtreleri temizlemeyi deneyin.</p>
        <button className="reset-filters-btn" onClick={onResetFilters}>
          Filtreleri Sıfırla
        </button>
      </div>
    );
  }

  return (
    <section className="movies-grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isInWatchlist={watchlist.some((m) => m.id === movie.id)}
          isWatched={watchedMovies.some((m) => m.id === movie.id)}
          isFavorite={favoriteMovies.some((m) => m.id === movie.id)}
          isComparing={compareList.some((m) => m.id === movie.id)}
          onToggleWatchlist={onToggleWatchlist}
          onToggleWatched={onToggleWatched}
          onToggleFavorite={onToggleFavorite}
          onToggleCompare={onToggleCompare}
          onOpenTrailer={onOpenTrailer}
          onSelectMovie={onSelectMovie}
          onOpenDirector={onOpenDirector}
        />
      ))}
    </section>
  );
}
