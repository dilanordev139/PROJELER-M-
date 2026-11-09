import React, { useEffect } from "react";
import { X } from "lucide-react";

export default function TrailerModal({ movie, onClose }) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!movie) return null;

  return (
    <div className="modal-backdrop trailer-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="trailer-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Fragmanı Kapat">
          <X size={20} />
        </button>

        <div className="trailer-header">
          <h3>{movie.title} — Resmi Tanıtım Fragmanı</h3>
        </div>

        <div className="trailer-iframe-container">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${movie.trailerYoutubeId}?autoplay=1&rel=0`}
            title={`${movie.title} Fragmanı`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
