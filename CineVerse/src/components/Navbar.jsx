import React, { useState, useRef, useEffect } from "react";
import { Search, X, Bookmark, Menu, Film, Star, ChevronDown, Sparkles, Dices, Scale } from "lucide-react";

export default function Navbar({
  searchQuery,
  setSearchQuery,
  movies,
  onSelectMovie,
  watchlistCount,
  onOpenWatchlist,
  compareCount,
  onOpenCompare,
  onOpenRoulette,
  onOpenProfile
}) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);

  // Filter matching suggestions
  const suggestions = searchQuery.trim().length > 0
    ? movies.filter(m =>
        m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.originalTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.director.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.stars.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
      ).slice(0, 5)
    : [];

  useEffect(() => {
    function handleClickOutside(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keyboard shortcut '/' to focus search
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "/" && document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA") {
        e.preventDefault();
        const input = searchRef.current?.querySelector("input");
        input?.focus();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Top Ticker Bar */}
      <aside className="top-ticker" aria-label="Sinema Bülteni">
        <div className="ticker-content">
          <span className="ticker-badge">
            <Sparkles size={12} /> CINEVERSE PRO
          </span>
          <span className="ticker-text">
            Yeni Özellik: <strong>Film Karşılaştırma Modu</strong> ve <strong>"Ne İzlesem?" Çarkı</strong> yayında! 🎬
          </span>
        </div>
        <div className="ticker-stats">
          <span><Film size={14} /> 20+ Başyapıt</span>
          <span>⭐ 2.4M Kullanıcı Değerlendirmesi</span>
        </div>
      </aside>

      {/* Main Navbar */}
      <header className="navbar">
        <div className="nav-container">
          {/* Brand Logo */}
          <div className="brand-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="logo-box">CINE</span>
            <span className="logo-text">VERSE</span>
            <span className="logo-pro-badge">PRO</span>
          </div>

          {/* Menu button */}
          <button className="nav-btn discover-btn" onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })} title="Katalog">
            <Menu size={18} />
            <span className="nav-btn-text">Keşfet</span>
          </button>

          {/* Search Omnibox */}
          <div className="search-wrapper" ref={searchRef}>
            <div className="search-box">
              <div className="search-category-select">
                <span>Tümü</span>
                <ChevronDown size={14} />
              </div>
              <input
                type="text"
                placeholder="Film, yönetmen veya oyuncu ara... (Kısayol: /)"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
              />
              {searchQuery && (
                <button
                  className="clear-search-btn"
                  onClick={() => setSearchQuery("")}
                  title="Temizle"
                >
                  <X size={16} />
                </button>
              )}
              <button className="search-submit-btn" title="Ara">
                <Search size={16} />
              </button>
            </div>

            {/* Suggestions Dropdown */}
            {showSuggestions && suggestions.length > 0 && (
              <div className="search-suggestions">
                {suggestions.map((movie) => (
                  <div
                    key={movie.id}
                    className="suggestion-item"
                    onClick={() => {
                      onSelectMovie(movie);
                      setShowSuggestions(false);
                    }}
                  >
                    <img src={movie.poster} alt={movie.title} className="suggestion-poster" />
                    <div className="suggestion-details">
                      <div className="suggestion-title">{movie.title}</div>
                      <div className="suggestion-meta">
                        <span className="suggestion-rating">
                          ★ {movie.rating}
                        </span>
                        <span>{movie.year}</span>
                        <span>{movie.director}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Nav Right Actions */}
          <div className="nav-actions">
            {/* Roulette Button */}
            <button
              className="nav-btn roulette-nav-btn"
              onClick={onOpenRoulette}
              title="Rastgele Film Çarkı"
            >
              <Dices size={18} />
              <span className="nav-btn-text">Ne İzlesem?</span>
            </button>

            {/* Compare Button with Count */}
            <button
              className={`nav-btn compare-nav-btn ${compareCount >= 2 ? "ready-to-compare" : ""}`}
              onClick={onOpenCompare}
              title="Film Karşılaştırma Modu"
            >
              <Scale size={18} />
              <span className="nav-btn-text">Karşılaştır</span>
              <span className="compare-counter">{compareCount}/2</span>
            </button>

            {/* Watchlist Button */}
            <button className="nav-btn watchlist-btn" onClick={onOpenWatchlist} title="İzleme Listem">
              <Bookmark size={18} />
              <span className="nav-btn-text">İzleme Listesi</span>
              <span className="watchlist-counter">{watchlistCount}</span>
            </button>

            {/* User Profile Button */}
            <button className="user-profile-btn" onClick={onOpenProfile} title="Kullanıcı Profili & İstatistikler">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80"
                alt="Profil"
                className="user-avatar"
              />
              <span className="user-name">Can D.</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
