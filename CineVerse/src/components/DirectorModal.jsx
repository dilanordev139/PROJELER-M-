import React from "react";
import { X, Award, Clapperboard, Calendar, Globe, Sparkles, Star } from "lucide-react";
import { DIRECTORS_DATA } from "../data/moviesData";

export default function DirectorModal({
  directorName,
  allMovies,
  onClose,
  onSelectMovie
}) {
  if (!directorName) return null;

  const info = DIRECTORS_DATA[directorName] || {
    name: directorName,
    birthYear: "—",
    nationality: "Uluslararası",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    bio: `${directorName}, sinema dünyasında kalıcı izler bırakmış usta bir yönetmendir.`,
    awards: "Çok sayıda uluslararası film festivali ve sinema akademisi ödülleri.",
    trademark: "Kendine özgü sinematografik anlatım ve görsel dil."
  };

  const directorMovies = allMovies.filter((m) =>
    m.director.toLowerCase().includes(directorName.toLowerCase())
  );

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="director-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Kapat">
          <X size={20} />
        </button>

        <div className="director-modal-header">
          <img src={info.photo} alt={info.name} className="director-avatar" />
          <div className="director-header-info">
            <span className="card-tag cyan">YÖNETMEN PROFİLİ</span>
            <h2>{info.name}</h2>
            <div className="director-meta-chips">
              <span><Calendar size={14} /> Doğum: {info.birthYear}</span>
              <span><Globe size={14} /> {info.nationality}</span>
              <span><Clapperboard size={14} /> {directorMovies.length} Film Platformda</span>
            </div>
          </div>
        </div>

        <div className="director-modal-body">
          {/* Bio */}
          <div className="director-section">
            <h4>Biyografi</h4>
            <p>{info.bio}</p>
          </div>

          {/* Awards */}
          <div className="director-section highlight-box">
            <div className="section-title-icon">
              <Award size={18} color="#f5c518" />
              <h4>Ödüller & Başarılar</h4>
            </div>
            <p>{info.awards}</p>
          </div>

          {/* Trademark */}
          <div className="director-section">
            <div className="section-title-icon">
              <Sparkles size={18} color="#38bdf8" />
              <h4>Yönetmen İmzası (Trademark)</h4>
            </div>
            <p>{info.trademark}</p>
          </div>

          {/* Movies by this director */}
          <div className="director-section">
            <h4>Yönettiği Filmler ({directorMovies.length})</h4>
            <div className="director-movies-grid">
              {directorMovies.map((m) => (
                <div
                  key={m.id}
                  className="director-movie-card"
                  onClick={() => {
                    onSelectMovie(m);
                    onClose();
                  }}
                >
                  <img src={m.poster} alt={m.title} className="dir-movie-thumb" />
                  <div className="dir-movie-meta">
                    <span className="dir-movie-title">{m.title}</span>
                    <div className="dir-movie-sub">
                      <span className="dir-movie-score"><Star size={12} fill="#f5c518" stroke="#f5c518" /> {m.rating}</span>
                      <span>{m.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
