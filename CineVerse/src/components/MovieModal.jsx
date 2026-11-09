import React, { useState } from "react";
import { X, Play, Bookmark, Check, Star, Award, Film, Users, Send, Heart, Scale } from "lucide-react";

export default function MovieModal({
  movie,
  onClose,
  onOpenTrailer,
  isInWatchlist,
  isWatched,
  isFavorite,
  isComparing,
  onToggleWatchlist,
  onToggleWatched,
  onToggleFavorite,
  onToggleCompare,
  userRating,
  onRateMovie,
  onAddReview,
  onOpenDirector
}) {
  const [hoverRating, setHoverRating] = useState(0);
  const [authorName, setAuthorName] = useState("");
  const [reviewScore, setReviewScore] = useState(10);
  const [reviewText, setReviewText] = useState("");

  if (!movie) return null;

  const ratingDescriptions = {
    1: "1/10 - Zaman Kaybı",
    2: "2/10 - Kötü",
    3: "3/10 - Zayıf",
    4: "4/10 - Yetersiz",
    5: "5/10 - Ortalama",
    6: "6/10 - İzlenebilir",
    7: "7/10 - İyi",
    8: "8/10 - Çok Başarılı",
    9: "9/10 - Harika",
    10: "10/10 - Kusursuz Başyapıt!"
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!authorName.trim() || !reviewText.trim()) return;

    onAddReview(movie.id, {
      id: Date.now(),
      user: authorName.trim(),
      rating: Number(reviewScore),
      date: "Şimdi",
      comment: reviewText.trim()
    });

    setAuthorName("");
    setReviewText("");
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="movie-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Kapat">
          <X size={20} />
        </button>

        <div className="modal-scrollable-content">
          {/* Header Banner */}
          <div className="modal-header-banner">
            <img src={movie.backdrop} alt={movie.title} className="modal-banner-img" />
            <div className="modal-banner-scrim" />

            <div className="modal-header-content">
              <img src={movie.poster} alt={movie.title} className="modal-poster-thumb" />
              <div className="modal-title-area">
                <h2 className="modal-title">{movie.title}</h2>
                <div className="modal-orig-title">
                  Orijinal Adı: <em>{movie.originalTitle}</em>
                </div>

                <div className="modal-meta-chips">
                  <span className="modal-score-badge">
                    <Star size={16} fill="#f5c518" stroke="#f5c518" />
                    <strong>{movie.rating}</strong> / 10 ({movie.ratingCount})
                  </span>
                  <span>{movie.year}</span>
                  <span>•</span>
                  <span>{movie.duration}</span>
                  <span>•</span>
                  <span>{movie.age}</span>
                  <span>•</span>
                  <span>{movie.genres.join(", ")}</span>
                  {movie.oscars > 0 && (
                    <span className="modal-oscar-tag">
                      🏆 {movie.oscars} Oscar Ödülü
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Modal Body */}
          <div className="modal-body">
            {/* Action Toolbar */}
            <div className="modal-actions-toolbar">
              <button
                className="btn-primary-play"
                onClick={() => onOpenTrailer(movie)}
              >
                <Play size={18} fill="#000" />
                <span>Fragmanı Başlat</span>
              </button>

              <button
                className={`btn-secondary-watchlist ${isInWatchlist ? "in-watchlist" : ""}`}
                onClick={() => onToggleWatchlist(movie)}
              >
                {isInWatchlist ? <Check size={18} /> : <Bookmark size={18} />}
                <span>{isInWatchlist ? "İzleme Listende" : "Listeme Ekle"}</span>
              </button>

              <button
                className={`btn-secondary-action ${isWatched ? "active-green-btn" : ""}`}
                onClick={() => onToggleWatched(movie)}
              >
                <Check size={18} />
                <span>{isWatched ? "İzlendi" : "İzledim Olarak İşaretle"}</span>
              </button>

              <button
                className={`btn-secondary-action ${isFavorite ? "active-red-btn" : ""}`}
                onClick={() => onToggleFavorite(movie)}
              >
                <Heart size={18} fill={isFavorite ? "#f43f5e" : "none"} />
                <span>{isFavorite ? "Favorilerimde" : "Favorilere Ekle"}</span>
              </button>

              <button
                className={`btn-secondary-action ${isComparing ? "active-cyan-btn" : ""}`}
                onClick={() => onToggleCompare(movie)}
              >
                <Scale size={18} />
                <span>{isComparing ? "Karşılaştırmada" : "Karşılaştır"}</span>
              </button>
            </div>

            {/* Storyline */}
            <section className="modal-storyline-section">
              <h3 className="section-label">
                <Film size={18} color="#f5c518" /> Konu Özeti
              </h3>
              <p className="modal-storyline">{movie.synopsis}</p>
            </section>

            {/* Credits Grid */}
            <div className="modal-credits-grid">
              <div className="credit-box">
                <small>Yönetmen</small>
                <span
                  className="director-clickable-name"
                  onClick={() => {
                    onOpenDirector(movie.director);
                    onClose();
                  }}
                  title="Yönetmen Profilini Görüntüle"
                >
                  {movie.director} ↗
                </span>
              </div>
              <div className="credit-box">
                <small>Senaryo</small>
                <span>{movie.writers ? movie.writers.join(", ") : "Belirtilmemiş"}</span>
              </div>
              <div className="credit-box">
                <small>Gişe Hasılatı</small>
                <span>{movie.boxOffice || "Bilinmiyor"}</span>
              </div>
            </div>

            {movie.awards && (
              <div
                style={{
                  background: "rgba(245, 197, 24, 0.08)",
                  border: "1px solid rgba(245, 197, 24, 0.2)",
                  borderRadius: "8px",
                  padding: "0.85rem 1.25rem",
                  marginBottom: "2rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  fontSize: "0.9rem"
                }}
              >
                <Award size={20} color="#f5c518" />
                <span><strong>Ödüller & Başarılar:</strong> {movie.awards}</span>
              </div>
            )}

            {/* Cast Section */}
            {movie.cast && movie.cast.length > 0 && (
              <section style={{ marginBottom: "2rem" }}>
                <h3 className="section-label">
                  <Users size={18} color="#38bdf8" /> Başrol & Oyuncu Kadrosu
                </h3>
                <div className="cast-grid">
                  {movie.cast.map((actor, idx) => (
                    <div key={idx} className="cast-card">
                      <img src={actor.photo} alt={actor.name} className="cast-photo" loading="lazy" />
                      <div className="cast-name">{actor.name}</div>
                      <div className="cast-role">{actor.role}</div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Interactive User Rating Widget */}
            <section className="user-rating-widget">
              <h4>Bu Filmi Puanla</h4>
              <p>IMDb puanlamasına sen de katkıda bulun (1 - 10 Yıldız)</p>

              <div className="stars-picker" onMouseLeave={() => setHoverRating(0)}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((starVal) => {
                  const isActive = (hoverRating || userRating || 0) >= starVal;
                  return (
                    <button
                      key={starVal}
                      className={`star-pick-btn ${isActive ? "active" : ""}`}
                      onMouseEnter={() => setHoverRating(starVal)}
                      onClick={() => onRateMovie(movie.id, starVal)}
                      title={`${starVal} Yıldız`}
                    >
                      <Star
                        size={26}
                        fill={isActive ? "#f5c518" : "none"}
                        stroke={isActive ? "#f5c518" : "currentColor"}
                      />
                    </button>
                  );
                })}
              </div>

              <div className="rating-feedback-text">
                {hoverRating
                  ? ratingDescriptions[hoverRating]
                  : userRating
                  ? `Verdiğin Puan: ${userRating}/10 (${ratingDescriptions[userRating]})`
                  : "Yıldızların üzerine gelerek puan verin"}
              </div>
            </section>

            {/* Reviews Section */}
            <section className="modal-reviews-section">
              <h3 className="section-label">
                <Star size={18} color="#f5c518" /> İzleyici Yorumları & İncelemeler
              </h3>

              <div className="reviews-list">
                {movie.reviews && movie.reviews.length > 0 ? (
                  movie.reviews.map((rev) => (
                    <div key={rev.id} className="review-item">
                      <div className="review-header">
                        <span className="review-author">{rev.user}</span>
                        <div>
                          <span className="review-rating">★ {rev.rating}/10</span>
                          <span className="review-date" style={{ marginLeft: "0.75rem" }}>
                            {rev.date}
                          </span>
                        </div>
                      </div>
                      <p className="review-comment">{rev.comment}</p>
                    </div>
                  ))
                ) : (
                  <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
                    Henüz yorum yapılmamış. İlk yorumu sen bırak!
                  </p>
                )}
              </div>

              {/* Add Review Form */}
              <form className="add-review-box" onSubmit={handleReviewSubmit}>
                <h5>Filmi Değerlendir ve Yorum Yap</h5>
                <div className="review-input-row">
                  <input
                    type="text"
                    className="review-input-name"
                    placeholder="Adınız veya Kullanıcı Adınız"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    required
                  />
                  <select
                    className="review-select-score"
                    value={reviewScore}
                    onChange={(e) => setReviewScore(e.target.value)}
                  >
                    {[10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map((s) => (
                      <option key={s} value={s}>
                        {s} Yıldız {s === 10 ? "⭐ (Başyapıt)" : ""}
                      </option>
                    ))}
                  </select>
                </div>
                <textarea
                  className="review-textarea"
                  placeholder="Film hakkındaki düşüncelerinizi, oyunculukları ve yönetmenliği paylaşın..."
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  required
                />
                <button type="submit" className="btn-submit-review">
                  <Send size={14} style={{ display: "inline-block", marginRight: "6px" }} />
                  Yorumu Gönder
                </button>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
