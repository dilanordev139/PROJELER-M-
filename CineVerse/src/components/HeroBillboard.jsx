import React, { useState, useEffect } from "react";
import { Play, Bookmark, Check, Info, Star, ChevronLeft, ChevronRight, Award } from "lucide-react";

export default function HeroBillboard({
  featuredMovies,
  onOpenTrailer,
  onSelectMovie,
  watchlist,
  onToggleWatchlist
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto rotation every 7 seconds
  useEffect(() => {
    if (!featuredMovies || featuredMovies.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredMovies.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [featuredMovies]);

  if (!featuredMovies || featuredMovies.length === 0) return null;

  const currentMovie = featuredMovies[currentIndex];
  const isInWatchlist = watchlist.some((m) => m.id === currentMovie.id);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredMovies.length) % featuredMovies.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredMovies.length);
  };

  return (
    <section className="hero-carousel-section">
      {featuredMovies.map((movie, idx) => {
        const active = idx === currentIndex;
        return (
          <div key={movie.id} className={`hero-slide ${active ? "active" : ""}`}>
            <img src={movie.backdrop} alt={movie.title} className="hero-backdrop-img" />
            <div className="hero-overlay-scrim" />

            <div className="section-container" style={{ position: "relative", zIndex: 5, width: "100%" }}>
              <div className="hero-content">
                <div className="hero-tag-row">
                  {movie.top250Rank && (
                    <span className="top250-badge">
                      <Award size={14} /> IMDb Top 250: #{movie.top250Rank}
                    </span>
                  )}
                  <span className="featured-label">ÖNE ÇIKAN SİNEMA ŞÖLENİ</span>
                </div>

                <h1 className="hero-title">{movie.title}</h1>

                <div className="hero-meta-row">
                  <div className="hero-rating-box">
                    <Star size={18} fill="#f5c518" stroke="#f5c518" />
                    <span>{movie.rating}</span>
                    <small>({movie.ratingCount})</small>
                  </div>
                  <span className="hero-chip">{movie.year}</span>
                  <span className="hero-chip">{movie.duration}</span>
                  <span className="hero-chip">{movie.age}</span>
                  <span className="hero-chip">{movie.genres.join(" • ")}</span>
                </div>

                <p className="hero-synopsis">{movie.synopsis}</p>

                <div className="hero-actions-row">
                  <button
                    className="btn-primary-play"
                    onClick={() => onOpenTrailer(movie)}
                  >
                    <Play size={18} fill="#000" />
                    <span>Fragmanı İzle</span>
                  </button>

                  <button
                    className={`btn-secondary-watchlist ${isInWatchlist ? "in-watchlist" : ""}`}
                    onClick={() => onToggleWatchlist(movie)}
                  >
                    {isInWatchlist ? <Check size={18} /> : <Bookmark size={18} />}
                    <span>{isInWatchlist ? "Listede Var" : "Listeme Ekle"}</span>
                  </button>

                  <button
                    className="btn-info-circle"
                    onClick={() => onSelectMovie(movie)}
                  >
                    <Info size={18} />
                    <span>Detaylı İncele</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Controls */}
      <div className="carousel-nav-arrows">
        <button className="carousel-arrow" onClick={prevSlide} aria-label="Önceki">
          <ChevronLeft size={22} />
        </button>
        <button className="carousel-arrow" onClick={nextSlide} aria-label="Sonraki">
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="carousel-dots">
        {featuredMovies.map((_, idx) => (
          <div
            key={idx}
            className={`carousel-dot ${idx === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </section>
  );
}
