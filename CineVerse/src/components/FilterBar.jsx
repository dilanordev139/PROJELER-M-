import React from "react";
import { Film, ArrowDownWideNarrow, LayoutGrid, List, SlidersHorizontal, Award } from "lucide-react";
import { GENRES_LIST } from "../data/moviesData";

export default function FilterBar({
  selectedGenre,
  onSelectGenre,
  selectedCategory,
  onSelectCategory,
  selectedDecade,
  onSelectDecade,
  minRating,
  onSelectMinRating,
  sortBy,
  onSelectSort,
  viewMode,
  onSelectViewMode,
  totalResults
}) {
  return (
    <>
      <section className="catalog-header">
        <div className="catalog-title-wrap">
          <div className="title-with-bar">
            <span className="yellow-bar" />
            <h2>Keşfet & İzle</h2>
          </div>
          <p className="catalog-subtitle">
            IMDb puanları, gişe rekorları ve derinlemesine sinema istatistikleri
          </p>
        </div>

        <div className="header-right-tools">
          <div className="results-stats-pill">
            <Film size={16} />
            <span>{totalResults} film listeleniyor</span>
          </div>

          {/* Grid vs List View Mode Toggle */}
          <div className="view-mode-toggle">
            <button
              className={`view-mode-btn ${viewMode === "grid" ? "active" : ""}`}
              onClick={() => onSelectViewMode("grid")}
              title="Kart Görünümü"
            >
              <LayoutGrid size={16} />
            </button>
            <button
              className={`view-mode-btn ${viewMode === "list" ? "active" : ""}`}
              onClick={() => onSelectViewMode("list")}
              title="Kompakt Liste Görünümü (IMDb Tablo)"
            >
              <List size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Genre Pills */}
      <nav className="genres-scroll-nav" aria-label="Tür Filtreleri">
        <div className="genres-scroll-container">
          {GENRES_LIST.map((genre) => (
            <button
              key={genre}
              className={`genre-pill ${selectedGenre === genre ? "active" : ""}`}
              onClick={() => onSelectGenre(genre)}
            >
              {genre}
            </button>
          ))}
        </div>
      </nav>

      {/* Decade / Period Quick Selector */}
      <div className="decades-bar">
        <span className="filter-inline-label">
          <SlidersHorizontal size={14} /> Dönem:
        </span>
        <button
          className={`decade-chip ${selectedDecade === "all" ? "active" : ""}`}
          onClick={() => onSelectDecade("all")}
        >
          Tüm Yıllar
        </button>
        <button
          className={`decade-chip ${selectedDecade === "2020s" ? "active" : ""}`}
          onClick={() => onSelectDecade("2020s")}
        >
          2020'ler
        </button>
        <button
          className={`decade-chip ${selectedDecade === "2010s" ? "active" : ""}`}
          onClick={() => onSelectDecade("2010s")}
        >
          2010'lar
        </button>
        <button
          className={`decade-chip ${selectedDecade === "2000s" ? "active" : ""}`}
          onClick={() => onSelectDecade("2000s")}
        >
          2000'ler
        </button>
        <button
          className={`decade-chip ${selectedDecade === "classics" ? "active" : ""}`}
          onClick={() => onSelectDecade("classics")}
        >
          90'lar & Klasikler
        </button>
        <button
          className={`decade-chip oscar-filter ${selectedDecade === "oscars" ? "active" : ""}`}
          onClick={() => onSelectDecade("oscars")}
        >
          <Award size={13} /> Oscar Kazananlar
        </button>
      </div>

      {/* Refine & Sort Toolbar */}
      <div className="refine-toolbar">
        <div className="quick-tags">
          <button
            className={`tag-chip ${selectedCategory === "all" ? "active" : ""}`}
            onClick={() => onSelectCategory("all")}
          >
            Tüm Filmler
          </button>
          <button
            className={`tag-chip ${selectedCategory === "top250" ? "active" : ""}`}
            onClick={() => onSelectCategory("top250")}
          >
            ⭐ Top 250
          </button>
          <button
            className={`tag-chip ${selectedCategory === "sci-fi" ? "active" : ""}`}
            onClick={() => onSelectCategory("sci-fi")}
          >
            🚀 Bilim Kurgu
          </button>
          <button
            className={`tag-chip ${selectedCategory === "action" ? "active" : ""}`}
            onClick={() => onSelectCategory("action")}
          >
            💥 Aksiyon
          </button>
          <button
            className={`tag-chip ${selectedCategory === "drama" ? "active" : ""}`}
            onClick={() => onSelectCategory("drama")}
          >
            🎭 Dram & Suç
          </button>
        </div>

        <div className="toolbar-sliders-sort">
          {/* Min Rating Slider */}
          <div className="min-rating-control">
            <span className="slider-label">Min. IMDb: <strong>{minRating > 0 ? minRating : "Tümü"}</strong></span>
            <input
              type="range"
              min="0"
              max="9.0"
              step="0.5"
              value={minRating}
              onChange={(e) => onSelectMinRating(parseFloat(e.target.value))}
              className="rating-slider"
            />
          </div>

          <div className="sort-controls">
            <label htmlFor="sortSelect" className="sort-label">
              <ArrowDownWideNarrow size={16} /> Sırala:
            </label>
            <select
              id="sortSelect"
              className="sort-select"
              value={sortBy}
              onChange={(e) => onSelectSort(e.target.value)}
            >
              <option value="popular">Popülerlik (Varsayılan)</option>
              <option value="rating-desc">IMDb Puanı (En Yüksek)</option>
              <option value="rating-asc">IMDb Puanı (En Düşük)</option>
              <option value="year-desc">Çıkış Yılı (En Yeni)</option>
              <option value="year-asc">Çıkış Yılı (En Eski)</option>
              <option value="boxoffice-desc">Gişe Rekoru (En Çok)</option>
              <option value="oscars-desc">Oscar Ödül Sayısı</option>
              <option value="title-asc">Film Adı (A - Z)</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
