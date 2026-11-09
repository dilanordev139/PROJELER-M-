import React from "react";
import { Trophy, Flame, Ticket, Star } from "lucide-react";

export default function QuickHighlights({ onSelectCategory }) {
  return (
    <section className="quick-highlights-bar">
      <div className="section-container highlights-grid">
        <div
          className="highlight-item"
          onClick={() => onSelectCategory("top250")}
          role="button"
          tabIndex={0}
        >
          <div className="highlight-icon gold">
            <Trophy size={20} />
          </div>
          <div className="highlight-info">
            <h4>IMDb Top 250</h4>
            <p>Tüm zamanların en iyi sinema başyapıtları</p>
          </div>
        </div>

        <div
          className="highlight-item"
          onClick={() => onSelectCategory("trending")}
          role="button"
          tabIndex={0}
        >
          <div className="highlight-icon red">
            <Flame size={20} />
          </div>
          <div className="highlight-info">
            <h4>Trend Filmler</h4>
            <p>Şu an en çok konuşulan ve izlenenler</p>
          </div>
        </div>

        <div
          className="highlight-item"
          onClick={() => onSelectCategory("now_playing")}
          role="button"
          tabIndex={0}
        >
          <div className="highlight-icon blue">
            <Ticket size={20} />
          </div>
          <div className="highlight-info">
            <h4>Vizyondakiler</h4>
            <p>Sinemalarda gösterilen popüler yapımlar</p>
          </div>
        </div>

        <div
          className="highlight-item"
          onClick={() => onSelectCategory("highest_rated")}
          role="button"
          tabIndex={0}
        >
          <div className="highlight-icon purple">
            <Star size={20} />
          </div>
          <div className="highlight-info">
            <h4>8.5+ Puan Alanlar</h4>
            <p>Eleştirmenlerden tam not alan seçki</p>
          </div>
        </div>
      </div>
    </section>
  );
}
