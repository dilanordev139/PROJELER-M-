import React from "react";

export default function Footer({ onSelectGenre, onSelectCategory }) {
  return (
    <footer className="main-footer">
      <div className="section-container footer-content">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="brand-logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <span className="logo-box">CINE</span>
              <span className="logo-text">VERSE</span>
            </div>
            <p className="footer-desc">
              Dünyanın en kapsamlı ve güncel sinema veritabanı. Filmleri keşfedin, puanlayın, inceleyin ve izleme listenizi oluşturun.
            </p>
          </div>

          <div className="footer-links-group">
            <h4>Kategoriler</h4>
            <ul>
              <li>
                <button onClick={() => onSelectGenre("Aksiyon")}>Aksiyon Filmleri</button>
              </li>
              <li>
                <button onClick={() => onSelectGenre("Bilim Kurgu")}>Bilim Kurgu Klasikleri</button>
              </li>
              <li>
                <button onClick={() => onSelectGenre("Dram")}>Ödüllü Dramlar</button>
              </li>
              <li>
                <button onClick={() => onSelectGenre("Animasyon")}>Animasyon & Aile</button>
              </li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4>Popüler Listeler</h4>
            <ul>
              <li>
                <button onClick={() => onSelectCategory("top250")}>IMDb Top 250 Film</button>
              </li>
              <li>
                <button onClick={() => onSelectCategory("trending")}>Haftanın Trendleri</button>
              </li>
              <li>
                <button onClick={() => onSelectCategory("highest_rated")}>8.5+ Puan Alanlar</button>
              </li>
              <li>
                <button onClick={() => onSelectCategory("all")}>Tüm Arşiv</button>
              </li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4>Topluluk & Destek</h4>
            <ul>
              <li><a href="#reviews">Kullanıcı İncelemeleri</a></li>
              <li><a href="#guide">Puanlama Sistemi Rehberi</a></li>
              <li><a href="#api">CineVerse Açık API</a></li>
              <li><a href="#privacy">Gizlilik & Güvenlik Politikası</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 CineVerse React Inc. IMDb ve sinema verileri referans amaçlıdır. Tüm hakları saklıdır.</p>
          <div className="footer-socials">
            {/* Inline SVGs for brand icons */}
            <a href="#twitter" aria-label="X / Twitter">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#instagram" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="#youtube" aria-label="YouTube">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="#github" aria-label="GitHub">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
