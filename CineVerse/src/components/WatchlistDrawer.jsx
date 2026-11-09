import React from "react";
import { X, Bookmark, Trash2, Share2, Clock, Film } from "lucide-react";

export default function WatchlistDrawer({
  isOpen,
  onClose,
  watchlist,
  onRemoveFromWatchlist,
  onClearWatchlist,
  onSelectMovie,
  onShowToast
}) {
  // Calculate total minutes
  const totalMinutes = watchlist.reduce((sum, m) => sum + (m.durationMinutes || 120), 0);
  const hours = Math.floor(totalMinutes / 60);
  const mins = totalMinutes % 60;
  const timeString = `${hours} saat ${mins > 0 ? `${mins} dakika` : ""}`;

  const handleShare = () => {
    if (watchlist.length === 0) {
      onShowToast("Listeniz boş olduğu için paylaşılamadı.", "info");
      return;
    }
    const titles = watchlist.map((m, i) => `${i + 1}. ${m.title} (${m.year}) - IMDb ★${m.rating}`).join("\n");
    const shareText = `🎬 CineVerse Film İzleme Listem:\n\n${titles}\n\nToplam: ${timeString}`;
    
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareText);
      onShowToast("İzleme listeniz panoya kopyalandı! Arkadaşlarınızla paylaşabilirsiniz.", "gold");
    } else {
      onShowToast("Liste hazırlandı!", "info");
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="modal-backdrop"
          style={{ zIndex: 2150 }}
          onClick={onClose}
        />
      )}

      <aside className={`watchlist-drawer ${isOpen ? "open" : ""}`} aria-label="İzleme Listem">
        <div className="drawer-header">
          <div className="drawer-title-group">
            <Bookmark size={20} className="gold-icon" fill="#f5c518" />
            <h3>İzleme Listem</h3>
            <span className="drawer-badge">{watchlist.length}</span>
          </div>

          <button className="drawer-close-btn" onClick={onClose} aria-label="Kapat">
            <X size={20} />
          </button>
        </div>

        <div className="drawer-summary">
          <span>
            <Clock size={14} style={{ display: "inline-block", marginRight: "4px" }} />
            Tahmini Süre: <strong>{watchlist.length > 0 ? timeString : "0 dakika"}</strong>
          </span>
        </div>

        <div className="drawer-items-list">
          {watchlist.length === 0 ? (
            <div className="drawer-empty-msg">
              <Film size={44} />
              <p>İzleme listeniz şu an boş.</p>
              <small>Filmlerin üzerindeki kurdele ikonuna tıklayarak listenize ekleyebilirsiniz.</small>
            </div>
          ) : (
            watchlist.map((movie) => (
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
                    <span style={{ color: "#f5c518", fontWeight: 700 }}>★ {movie.rating}</span>
                    <span>{movie.year}</span>
                    <span>{movie.duration}</span>
                  </div>
                </div>

                <button
                  className="drawer-btn-remove"
                  onClick={() => onRemoveFromWatchlist(movie.id)}
                  title="Listeden Çıkar"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))
          )}
        </div>

        {watchlist.length > 0 && (
          <div className="drawer-footer">
            <button className="btn-clear-watchlist" onClick={onClearWatchlist}>
              <Trash2 size={16} /> Temizle
            </button>
            <button className="btn-share-watchlist" onClick={handleShare}>
              <Share2 size={16} /> Paylaş
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
