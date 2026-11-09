import React, { useState } from "react";
import { TrendingUp, Clapperboard, Lightbulb, RotateCw } from "lucide-react";
import { TRIVIA_LIST } from "../data/moviesData";

export default function BoxOfficeTrivia({ movies, onFilterByDirector, onOpenDirector, onSelectMovie }) {
  const [triviaIndex, setTriviaIndex] = useState(0);

  // Top 5 by box office
  const boxOfficeTop = [
    { title: "Yüzüklerin Efendisi: Kralın Dönüşü", year: 2003, amount: "$1.156 Milyar", id: "tt0167260" },
    { title: "Kara Şövalye", year: 2008, amount: "$1.006 Milyar", id: "tt0468569" },
    { title: "Oppenheimer", year: 2023, amount: "$976.2 Milyon", id: "tt15398776" },
    { title: "Başlangıç (Inception)", year: 2010, amount: "$839 Milyon", id: "tt1375666" },
    { title: "Yıldızlararası", year: 2014, amount: "$773.9 Milyon", id: "tt0816692" }
  ];

  const nextTrivia = () => {
    setTriviaIndex((prev) => (prev + 1) % TRIVIA_LIST.length);
  };

  const currentTrivia = TRIVIA_LIST[triviaIndex];

  return (
    <section className="cinema-extras-section">
      <div className="extras-grid">
        {/* Box Office Card */}
        <div className="extra-card">
          <div className="extra-card-header">
            <span className="card-tag gold">GİŞE LİDERLERİ</span>
            <h3>
              <TrendingUp size={20} color="#f5c518" /> Tüm Zamanlar Gişe Rekorları
            </h3>
          </div>
          <ul className="box-office-list">
            {boxOfficeTop.map((item, idx) => (
              <li
                key={idx}
                className="box-office-item"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  const m = movies.find((mov) => mov.id === item.id);
                  if (m) onSelectMovie(m);
                }}
              >
                <span className="bo-rank">#{idx + 1}</span>
                <div className="bo-info">
                  <div className="bo-title">{item.title}</div>
                  <div className="bo-year">{item.year}</div>
                </div>
                <span className="bo-amount">{item.amount}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Spotlight Director */}
        <div className="extra-card">
          <div className="extra-card-header">
            <span className="card-tag cyan">AYIN YÖNETMENİ</span>
            <h3 style={{ cursor: "pointer" }} onClick={() => onOpenDirector("Christopher Nolan")}>
              <Clapperboard size={20} color="#38bdf8" /> Christopher Nolan ↗
            </h3>
          </div>
          <div className="spotlight-body">
            <p className="spotlight-text">
              Zaman kavramını, insan psikolojisini ve karmaşık bilim kurgu teorilerini sinema salonlarında nefes kesici görsel ve işitsel deneyimlere dönüştüren vizyoner yönetmen.
            </p>
            <div className="spotlight-films-tags">
              <span>Interstellar</span>
              <span>Oppenheimer</span>
              <span>Inception</span>
              <span>The Dark Knight</span>
            </div>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <button
                className="spotlight-action-btn"
                onClick={() => onFilterByDirector("Christopher Nolan")}
              >
                Nolan Filmlerini Listele
              </button>
              <button
                className="spotlight-action-btn"
                style={{ background: "rgba(245, 197, 24, 0.15)", borderColor: "#f5c518", color: "#f5c518" }}
                onClick={() => onOpenDirector("Christopher Nolan")}
              >
                Profili Gör
              </button>
            </div>
          </div>
        </div>

        {/* Trivia Card */}
        <div className="extra-card">
          <div className="extra-card-header">
            <span className="card-tag purple">BİLİYOR MUYDUNUZ?</span>
            <h3>
              <Lightbulb size={20} color="#a855f7" /> Sinema Dünyasından İnciler
            </h3>
          </div>
          <div className="trivia-body">
            <div>
              <h4 style={{ fontSize: "1rem", color: "#a855f7", marginBottom: "0.5rem" }}>
                {currentTrivia.title}
              </h4>
              <p>{currentTrivia.text}</p>
            </div>
            <button className="trivia-next-btn" onClick={nextTrivia}>
              <RotateCw size={15} /> Başka Bir Bilgi
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
