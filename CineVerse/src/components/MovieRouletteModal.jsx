import React, { useState, useEffect } from "react";
import { X, Dices, Sparkles, Play, Info, Star, Bookmark, Check } from "lucide-react";
import { GENRES_LIST } from "../data/moviesData";

export default function MovieRouletteModal({
  allMovies,
  isOpen,
  onClose,
  onSelectMovie,
  onOpenTrailer,
  watchlist,
  onToggleWatchlist
}) {
  const [selectedGenre, setSelectedGenre] = useState("Tümü");
  const [minRating, setMinRating] = useState(8.0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [resultMovie, setResultMovie] = useState(null);
  const [reelMovie, setReelMovie] = useState(null);

  useEffect(() => {
    if (isOpen && allMovies.length > 0) {
      setResultMovie(allMovies[Math.floor(Math.random() * allMovies.length)]);
    }
  }, [isOpen, allMovies]);

  if (!isOpen) return null;

  const handleSpin = () => {
    let eligible = allMovies.filter((m) => m.rating >= minRating);
    if (selectedGenre !== "Tümü") {
      eligible = eligible.filter((m) => m.genres.includes(selectedGenre));
    }
    if (eligible.length === 0) {
      eligible = allMovies;
    }

    setIsSpinning(true);
    let counter = 0;
    const interval = setInterval(() => {
      const randomIdx = Math.floor(Math.random() * eligible.length);
      setReelMovie(eligible[randomIdx]);
      counter++;
      if (counter > 16) {
        clearInterval(interval);
        const finalMovie = eligible[Math.floor(Math.random() * eligible.length)];
        setResultMovie(finalMovie);
        setIsSpinning(false);
      }
    }, 90);
  };

  const displayMovie = isSpinning ? (reelMovie || resultMovie) : resultMovie;
  const isInWatchlist = displayMovie && watchlist.some((m) => m.id === displayMovie.id);

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="roulette-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Kapat">
          <X size={20} />
        </button>

        <div className="roulette-header">
          <div className="roulette-icon-badge">
            <Dices size={28} color="#000" />
          </div>
          <h2>🎲 Ne İzlesem? Film Çarkı</h2>
          <p>Kararsız mı kaldınız? Kriterlerinizi belirleyin, sinema çarkı sizin için en uygun filmi seçsin!</p>
        </div>

        {/* Filter Bar inside Roulette */}
        <div className="roulette-filters">
          <div className="roulette-filter-group">
            <label>Tür Tercihi:</label>
            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              disabled={isSpinning}
            >
              {GENRES_LIST.map((g) => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
          </div>

          <div className="roulette-filter-group">
            <label>Min. IMDb: {minRating}</label>
            <input
              type="range"
              min="8.0"
              max="9.0"
              step="0.1"
              value={minRating}
              onChange={(e) => setMinRating(parseFloat(e.target.value))}
              disabled={isSpinning}
            />
          </div>
        </div>

        {/* Reel Display Card */}
        {displayMovie && (
          <div className={`roulette-display-card ${isSpinning ? "spinning" : "revealed"}`}>
            <div className="roulette-poster-area">
              <img src={displayMovie.poster} alt={displayMovie.title} className="roulette-poster" />
              <div className="roulette-rating-chip">
                <Star size={14} fill="#f5c518" stroke="#f5c518" />
                <span>{displayMovie.rating}</span>
              </div>
            </div>

            <div className="roulette-info-area">
              <span className="roulette-eyebrow">
                <Sparkles size={14} /> ŞANSLI FİLMİNİZ
              </span>
              <h3 className="roulette-film-title">{displayMovie.title}</h3>
              <div className="roulette-film-meta">
                <span>{displayMovie.year}</span>
                <span>•</span>
                <span>{displayMovie.duration}</span>
                <span>•</span>
                <span>{displayMovie.director}</span>
              </div>
              <p className="roulette-film-synopsis">{displayMovie.synopsis}</p>

              <div className="roulette-actions-row">
                <button
                  className="btn-primary-play"
                  onClick={() => {
                    onOpenTrailer(displayMovie);
                    onClose();
                  }}
                >
                  <Play size={16} fill="#000" /> Fragmanı Başlat
                </button>

                <button
                  className={`btn-secondary-watchlist ${isInWatchlist ? "in-watchlist" : ""}`}
                  onClick={() => onToggleWatchlist(displayMovie)}
                >
                  {isInWatchlist ? <Check size={16} /> : <Bookmark size={16} />}
                  {isInWatchlist ? "Listende Var" : "Listeye Ekle"}
                </button>

                <button
                  className="btn-info-circle"
                  onClick={() => {
                    onSelectMovie(displayMovie);
                    onClose();
                  }}
                >
                  <Info size={16} /> Detaylar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Spin Action Button */}
        <div className="roulette-spin-footer">
          <button
            className={`btn-spin-now ${isSpinning ? "active" : ""}`}
            onClick={handleSpin}
            disabled={isSpinning}
          >
            <Dices size={20} className={isSpinning ? "rotate-anim" : ""} />
            <span>{isSpinning ? "Seçiliyor..." : "Çarkı Çevir & Yeni Film Bul!"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
