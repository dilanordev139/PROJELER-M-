import React, { useState } from "react";
import { X, CheckCircle2, Heart, Star, Clock, Film, Trash2, Award } from "lucide-react";

export default function ProfileDrawer({
  isOpen,
  onClose,
  watchedMovies,
  favoriteMovies,
  userRatings,
  allMovies,
  onRemoveWatched,
  onRemoveFavorite,
  onSelectMovie
}) {
  const [activeTab, setActiveTab] = useState("watched");

  if (!isOpen) return null;

  // Calculate total watched hours
  const totalWatchedMinutes = watchedMovies.reduce((sum, m) => sum + (m.durationMinutes || 120), 0);
  const watchedHours = Math.floor(totalWatchedMinutes / 60);
  const watchedMins = totalWatchedMinutes % 60;

  // Average rating calculated
  const ratingVals = Object.values(userRatings);
  const avgRating = ratingVals.length > 0
    ? (ratingVals.reduce((a, b) => a + b, 0) / ratingVals.length).toFixed(1)
    : "—";

  const ratedMoviesList = Object.entries(userRatings).map(([id, rating]) => {
    const movie = allMovies.find((m) => m.id === id);
    return movie ? { ...movie, myRating: rating } : null;
  }).filter(Boolean);

  return (
    <>
      <div className="modal-backdrop" style={{ zIndex: 2150 }} onClick={onClose} />

      <aside className={`watchlist-drawer ${isOpen ? "open" : ""}`} aria-label="Kullanıcı Profili">
        <div className="drawer-header">
          <div className="drawer-title-group">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80"
              alt="Profil"
              className="user-avatar"
              style={{ width: "36px", height: "36px" }}
            />
            <div>
              <h3>Can D.</h3>
              <span style={{ fontSize: "0.75rem", color: "#f5c518", fontWeight: 700 }}>
                CineVerse Sinemasever Üye
              </span>
            </div>
          </div>

          <button className="drawer-close-btn" onClick={onClose} aria-label="Kapat">
            <X size={20} />
          </button>
        </div>

        {/* Profile Statistics Cards */}
        <div className="profile-stats-grid">
          <div className="profile-stat-box">
            <CheckCircle2 size={16} color="#22c55e" />
            <strong>{watchedMovies.length}</strong>
            <small>İzlendi</small>
          </div>
          <div className="profile-stat-box">
            <Heart size={16} color="#f43f5e" />
            <strong>{favoriteMovies.length}</strong>
            <small>Favori</small>
          </div>
          <div className="profile-stat-box">
            <Star size={16} color="#f5c518" />
            <strong>{ratingVals.length}</strong>
            <small>Puanlandı</small>
          </div>
          <div className="profile-stat-box">
            <Clock size={16} color="#38bdf8" />
            <strong>{watchedHours}s {watchedMins}d</strong>
            <small>İzleme Süresi</small>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="profile-tabs-row">
          <button
            className={`profile-tab-btn ${activeTab === "watched" ? "active" : ""}`}
            onClick={() => setActiveTab("watched")}
          >
            İzlenenler ({watchedMovies.length})
          </button>
          <button
            className={`profile-tab-btn ${activeTab === "favorites" ? "active" : ""}`}
            onClick={() => setActiveTab("favorites")}
          >
            Favoriler ({favoriteMovies.length})
          </button>
          <button
            className={`profile-tab-btn ${activeTab === "ratings" ? "active" : ""}`}
            onClick={() => setActiveTab("ratings")}
          >
            Puanlarım ({ratingVals.length})
          </button>
        </div>

        {/* Tab Items List */}
        <div className="drawer-items-list">
          {activeTab === "watched" && (
            watchedMovies.length === 0 ? (
              <div className="drawer-empty-msg">
                <CheckCircle2 size={44} />
                <p>Henüz izlediğiniz film işaretlemediniz.</p>
                <small>Film kartlarındaki onay tikine basarak izlediklerinizi arşivleyin.</small>
              </div>
            ) : (
              watchedMovies.map((movie) => (
                <div key={movie.id} className="drawer-item">
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="drawer-thumb"
                    onClick={() => {
                      onSelectMovie(movie);
                      onClose();
                    }}
                  />
                  <div className="drawer-info">
                    <div
                      className="drawer-movie-title"
                      onClick={() => {
                        onSelectMovie(movie);
                        onClose();
                      }}
                    >
                      {movie.title}
                    </div>
                    <div className="drawer-movie-meta">
                      <span style={{ color: "#f5c518" }}>★ {movie.rating}</span>
                      <span>{movie.year}</span>
                      <span>{movie.duration}</span>
                    </div>
                  </div>
                  <button
                    className="drawer-btn-remove"
                    onClick={() => onRemoveWatched(movie.id)}
                    title="İzlenenlerden Çıkar"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))
            )
          )}

          {activeTab === "favorites" && (
            favoriteMovies.length === 0 ? (
              <div className="drawer-empty-msg">
                <Heart size={44} />
                <p>Favori filminiz bulunmuyor.</p>
                <small>En sevdiğiniz başyapıtları kalp ikonuna basarak buraya ekleyin.</small>
              </div>
            ) : (
              favoriteMovies.map((movie) => (
                <div key={movie.id} className="drawer-item">
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="drawer-thumb"
                    onClick={() => {
                      onSelectMovie(movie);
                      onClose();
                    }}
                  />
                  <div className="drawer-info">
                    <div
                      className="drawer-movie-title"
                      onClick={() => {
                        onSelectMovie(movie);
                        onClose();
                      }}
                    >
                      {movie.title}
                    </div>
                    <div className="drawer-movie-meta">
                      <span style={{ color: "#f5c518" }}>★ {movie.rating}</span>
                      <span>{movie.year}</span>
                    </div>
                  </div>
                  <button
                    className="drawer-btn-remove"
                    onClick={() => onRemoveFavorite(movie.id)}
                    title="Favorilerden Çıkar"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))
            )
          )}

          {activeTab === "ratings" && (
            ratedMoviesList.length === 0 ? (
              <div className="drawer-empty-msg">
                <Star size={44} />
                <p>Henüz hiçbir filmi puanlamadınız.</p>
                <small>Film detay sayfasından 1-10 arası yıldız vererek kendi puan listenizi oluşturun.</small>
              </div>
            ) : (
              ratedMoviesList.map((movie) => (
                <div key={movie.id} className="drawer-item">
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="drawer-thumb"
                    onClick={() => {
                      onSelectMovie(movie);
                      onClose();
                    }}
                  />
                  <div className="drawer-info">
                    <div
                      className="drawer-movie-title"
                      onClick={() => {
                        onSelectMovie(movie);
                        onClose();
                      }}
                    >
                      {movie.title}
                    </div>
                    <div className="drawer-movie-meta">
                      <span style={{ color: "#38bdf8", fontWeight: 700 }}>
                        Senin Puanın: ★ {movie.myRating}/10
                      </span>
                      <span>IMDb: ★ {movie.rating}</span>
                    </div>
                  </div>
                </div>
              ))
            )
          )}
        </div>
      </aside>
    </>
  );
}
