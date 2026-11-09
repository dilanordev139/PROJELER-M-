import React from "react";
import { X, Trophy, Star, DollarSign, Clock, Film, Award, Check } from "lucide-react";

export default function CompareModal({
  movieA,
  movieB,
  allMovies,
  onSelectMovieA,
  onSelectMovieB,
  onClose,
  onOpenTrailer
}) {
  if (!movieA || !movieB) return null;

  // Rating comparison
  const aScore = movieA.rating;
  const bScore = movieB.rating;

  // Box office number parse
  const parseBoxOffice = (str) => {
    if (!str) return 0;
    const num = parseFloat(str.replace(/[^0-9.]/g, ""));
    if (str.includes("Milyar")) return num * 1000;
    return num;
  };

  const aBO = parseBoxOffice(movieA.boxOffice);
  const bBO = parseBoxOffice(movieB.boxOffice);

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="compare-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Kapat">
          <X size={20} />
        </button>

        <div className="compare-header">
          <div className="compare-title-row">
            <span className="card-tag gold">BİREBİR KARŞILAŞTIRMA</span>
            <h2>⚖️ Sinema Düellosu</h2>
            <p>İki başyapıtı puanları, gişe rekorları, ödülleri ve kadrosuyla yan yana kıyaslayın.</p>
          </div>
        </div>

        <div className="compare-scroll-body">
          {/* Movie Selectors Row */}
          <div className="compare-selectors-grid">
            <div className="compare-selector-box">
              <label>1. Film Seçin:</label>
              <select
                value={movieA.id}
                onChange={(e) => {
                  const m = allMovies.find((mov) => mov.id === e.target.value);
                  if (m) onSelectMovieA(m);
                }}
              >
                {allMovies.map((m) => (
                  <option key={m.id} value={m.id} disabled={m.id === movieB.id}>
                    {m.title} ({m.year})
                  </option>
                ))}
              </select>
            </div>

            <div className="compare-vs-badge">VS</div>

            <div className="compare-selector-box">
              <label>2. Film Seçin:</label>
              <select
                value={movieB.id}
                onChange={(e) => {
                  const m = allMovies.find((mov) => mov.id === e.target.value);
                  if (m) onSelectMovieB(m);
                }}
              >
                {allMovies.map((m) => (
                  <option key={m.id} value={m.id} disabled={m.id === movieA.id}>
                    {m.title} ({m.year})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Side by side Posters & Titles */}
          <div className="compare-sides-grid">
            {/* Film A */}
            <div className="compare-side-card">
              <div className="compare-poster-wrap">
                <img src={movieA.poster} alt={movieA.title} className="compare-poster" />
                {aScore >= bScore && (
                  <div className="winner-crown-badge">
                    <Trophy size={14} /> Daha Yüksek Puan
                  </div>
                )}
              </div>
              <h3 className="compare-film-title">{movieA.title}</h3>
              <div className="compare-film-sub">{movieA.originalTitle} • {movieA.year}</div>
              <button
                className="btn-trailer-mini"
                onClick={() => onOpenTrailer(movieA)}
              >
                Fragmanı İzle
              </button>
            </div>

            {/* Film B */}
            <div className="compare-side-card">
              <div className="compare-poster-wrap">
                <img src={movieB.poster} alt={movieB.title} className="compare-poster" />
                {bScore >= aScore && (
                  <div className="winner-crown-badge">
                    <Trophy size={14} /> Daha Yüksek Puan
                  </div>
                )}
              </div>
              <h3 className="compare-film-title">{movieB.title}</h3>
              <div className="compare-film-sub">{movieB.originalTitle} • {movieB.year}</div>
              <button
                className="btn-trailer-mini"
                onClick={() => onOpenTrailer(movieB)}
              >
                Fragmanı İzle
              </button>
            </div>
          </div>

          {/* Comparison Metric Rows */}
          <div className="compare-metrics-table">
            {/* Metric 1: IMDb Puanı */}
            <div className="metric-row">
              <div className={`metric-val left ${aScore >= bScore ? "highlight-winner" : ""}`}>
                <Star size={16} fill="#f5c518" stroke="#f5c518" />
                <strong>{movieA.rating}</strong> / 10
                <span className="votes-count">({movieA.ratingCount} oy)</span>
              </div>
              <div className="metric-label">IMDb Puanı</div>
              <div className={`metric-val right ${bScore >= aScore ? "highlight-winner" : ""}`}>
                <Star size={16} fill="#f5c518" stroke="#f5c518" />
                <strong>{movieB.rating}</strong> / 10
                <span className="votes-count">({movieB.ratingCount} oy)</span>
              </div>
            </div>

            {/* Metric 2: Gişe Hasılatı */}
            <div className="metric-row">
              <div className={`metric-val left ${aBO >= bBO ? "highlight-winner" : ""}`}>
                <DollarSign size={16} color="#22c55e" />
                <span>{movieA.boxOffice || "Belirtilmemiş"}</span>
              </div>
              <div className="metric-label">Dünya Gişesi</div>
              <div className={`metric-val right ${bBO >= aBO ? "highlight-winner" : ""}`}>
                <DollarSign size={16} color="#22c55e" />
                <span>{movieB.boxOffice || "Belirtilmemiş"}</span>
              </div>
            </div>

            {/* Metric 3: Oscar Sayısı */}
            <div className="metric-row">
              <div className={`metric-val left ${(movieA.oscars || 0) >= (movieB.oscars || 0) ? "highlight-winner" : ""}`}>
                <Award size={16} color="#f5c518" />
                <span>{movieA.oscars || 0} Oscar Ödülü</span>
              </div>
              <div className="metric-label">Oscar Başarısı</div>
              <div className={`metric-val right ${(movieB.oscars || 0) >= (movieA.oscars || 0) ? "highlight-winner" : ""}`}>
                <Award size={16} color="#f5c518" />
                <span>{movieB.oscars || 0} Oscar Ödülü</span>
              </div>
            </div>

            {/* Metric 4: Süre */}
            <div className="metric-row">
              <div className="metric-val left">
                <Clock size={16} />
                <span>{movieA.duration} ({movieA.durationMinutes} dk)</span>
              </div>
              <div className="metric-label">Film Süresi</div>
              <div className="metric-val right">
                <Clock size={16} />
                <span>{movieB.duration} ({movieB.durationMinutes} dk)</span>
              </div>
            </div>

            {/* Metric 5: Yönetmen */}
            <div className="metric-row">
              <div className="metric-val left">
                <Film size={16} />
                <strong>{movieA.director}</strong>
              </div>
              <div className="metric-label">Yönetmen</div>
              <div className="metric-val right">
                <Film size={16} />
                <strong>{movieB.director}</strong>
              </div>
            </div>

            {/* Metric 6: Türler */}
            <div className="metric-row">
              <div className="metric-val left pills">
                {movieA.genres.map((g) => (
                  <span key={g} className="compare-pill">{g}</span>
                ))}
              </div>
              <div className="metric-label">Türler</div>
              <div className="metric-val right pills">
                {movieB.genres.map((g) => (
                  <span key={g} className="compare-pill">{g}</span>
                ))}
              </div>
            </div>

            {/* Metric 7: Başroller */}
            <div className="metric-row">
              <div className="metric-val left cast-names">
                {movieA.stars.slice(0, 3).join(", ")}
              </div>
              <div className="metric-label">Başroller</div>
              <div className="metric-val right cast-names">
                {movieB.stars.slice(0, 3).join(", ")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
