import React, { useState, useEffect, useMemo } from "react";
import { MOVIES_DATA } from "./data/moviesData";
import Navbar from "./components/Navbar";
import HeroBillboard from "./components/HeroBillboard";
import QuickHighlights from "./components/QuickHighlights";
import FilterBar from "./components/FilterBar";
import MovieGrid from "./components/MovieGrid";
import ListViewTable from "./components/ListViewTable";
import MovieModal from "./components/MovieModal";
import TrailerModal from "./components/TrailerModal";
import WatchlistDrawer from "./components/WatchlistDrawer";
import ProfileDrawer from "./components/ProfileDrawer";
import CompareModal from "./components/CompareModal";
import MovieRouletteModal from "./components/MovieRouletteModal";
import DirectorModal from "./components/DirectorModal";
import BoxOfficeTrivia from "./components/BoxOfficeTrivia";
import Toast from "./components/Toast";
import Footer from "./components/Footer";

export default function App() {
  const [movies, setMovies] = useState(() => {
    const saved = localStorage.getItem("cineverse_movies_state");
    return saved ? JSON.parse(saved) : MOVIES_DATA;
  });

  const [watchlist, setWatchlist] = useState(() => {
    const saved = localStorage.getItem("cineverse_watchlist");
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { return []; }
    }
    return MOVIES_DATA.slice(0, 2);
  });

  const [watchedMovies, setWatchedMovies] = useState(() => {
    const saved = localStorage.getItem("cineverse_watched");
    return saved ? JSON.parse(saved) : [MOVIES_DATA[0], MOVIES_DATA[1], MOVIES_DATA[5]];
  });

  const [favoriteMovies, setFavoriteMovies] = useState(() => {
    const saved = localStorage.getItem("cineverse_favorites");
    return saved ? JSON.parse(saved) : [MOVIES_DATA[0], MOVIES_DATA[1]];
  });

  const [compareList, setCompareList] = useState([MOVIES_DATA[0], MOVIES_DATA[1]]);

  const [userRatings, setUserRatings] = useState(() => {
    const saved = localStorage.getItem("cineverse_ratings");
    return saved ? JSON.parse(saved) : { "tt0816692": 10, "tt0468569": 10 };
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("Tümü");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDecade, setSelectedDecade] = useState("all");
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState("popular");
  const [viewMode, setViewMode] = useState("grid");

  const [activeMovie, setActiveMovie] = useState(null);
  const [trailerMovie, setTrailerMovie] = useState(null);
  const [activeDirector, setActiveDirector] = useState(null);
  const [isWatchlistOpen, setIsWatchlistOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [isRouletteOpen, setIsRouletteOpen] = useState(false);
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    localStorage.setItem("cineverse_watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  useEffect(() => {
    localStorage.setItem("cineverse_watched", JSON.stringify(watchedMovies));
  }, [watchedMovies]);

  useEffect(() => {
    localStorage.setItem("cineverse_favorites", JSON.stringify(favoriteMovies));
  }, [favoriteMovies]);

  useEffect(() => {
    localStorage.setItem("cineverse_ratings", JSON.stringify(userRatings));
  }, [userRatings]);

  useEffect(() => {
    localStorage.setItem("cineverse_movies_state", JSON.stringify(movies));
  }, [movies]);

  const showToast = (message, type = "success") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3200);
  };

  const handleToggleWatchlist = (movie) => {
    const exists = watchlist.some((m) => m.id === movie.id);
    if (exists) {
      setWatchlist((prev) => prev.filter((m) => m.id !== movie.id));
      showToast(`"${movie.title}" izleme listesinden çıkarıldı.`, "info");
    } else {
      setWatchlist((prev) => [...prev, movie]);
      showToast(`✓ "${movie.title}" izleme listene eklendi!`, "gold");
    }
  };

  const handleRemoveFromWatchlist = (movieId) => {
    const movie = movies.find((m) => m.id === movieId);
    setWatchlist((prev) => prev.filter((m) => m.id !== movieId));
    if (movie) {
      showToast(`"${movie.title}" listeden kaldırıldı.`, "info");
    }
  };

  const handleClearWatchlist = () => {
    setWatchlist([]);
    showToast("İzleme listeniz temizlendi.", "info");
  };

  const handleToggleWatched = (movie) => {
    const exists = watchedMovies.some((m) => m.id === movie.id);
    if (exists) {
      setWatchedMovies((prev) => prev.filter((m) => m.id !== movie.id));
      showToast(`"${movie.title}" izlenenlerden kaldırıldı.`, "info");
    } else {
      setWatchedMovies((prev) => [...prev, movie]);
      showToast(`✓ "${movie.title}" izlendi olarak işaretlendi!`, "success");
    }
  };

  const handleToggleFavorite = (movie) => {
    const exists = favoriteMovies.some((m) => m.id === movie.id);
    if (exists) {
      setFavoriteMovies((prev) => prev.filter((m) => m.id !== movie.id));
      showToast(`"${movie.title}" favorilerden çıkarıldı.`, "info");
    } else {
      setFavoriteMovies((prev) => [...prev, movie]);
      showToast(`❤️ "${movie.title}" favorilerinize eklendi!`, "red");
    }
  };

  const handleToggleCompare = (movie) => {
    const exists = compareList.some((m) => m.id === movie.id);
    if (exists) {
      setCompareList((prev) => prev.filter((m) => m.id !== movie.id));
      showToast(`"${movie.title}" karşılaştırmadan çıkarıldı.`, "info");
    } else {
      if (compareList.length >= 2) {
        setCompareList([compareList[1], movie]);
        showToast(`"${movie.title}" karşılaştırmaya eklendi. (2/2 Hazır)`, "cyan");
      } else {
        setCompareList((prev) => [...prev, movie]);
        showToast(`"${movie.title}" karşılaştırmaya eklendi (${compareList.length + 1}/2).`, "cyan");
      }
    }
  };

  const handleRateMovie = (movieId, ratingValue) => {
    setUserRatings((prev) => ({
      ...prev,
      [movieId]: ratingValue
    }));
    const movie = movies.find((m) => m.id === movieId);
    showToast(`⭐ "${movie?.title}" için ${ratingValue}/10 puanın kaydedildi!`, "gold");
  };

  const handleAddReview = (movieId, reviewObj) => {
    setMovies((prevMovies) =>
      prevMovies.map((m) => {
        if (m.id === movieId) {
          return {
            ...m,
            reviews: [reviewObj, ...(m.reviews || [])]
          };
        }
        return m;
      })
    );

    if (activeMovie && activeMovie.id === movieId) {
      setActiveMovie((prev) => ({
        ...prev,
        reviews: [reviewObj, ...(prev.reviews || [])]
      }));
    }

    showToast("✓ Değerlendirmeniz ve incelemeniz yayınlandı!", "success");
  };

  const handleFilterByDirector = (directorName) => {
    setSearchQuery(directorName);
    setSelectedGenre("Tümü");
    setSelectedCategory("all");
    setSelectedDecade("all");
    const catalogElement = document.getElementById("catalogSection");
    catalogElement?.scrollIntoView({ behavior: "smooth" });
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedGenre("Tümü");
    setSelectedCategory("all");
    setSelectedDecade("all");
    setMinRating(0);
    setSortBy("popular");
  };

  const featuredMovies = useMemo(() => {
    return movies.filter((m) => m.featured);
  }, [movies]);

  const parseBoxOfficeNumber = (str) => {
    if (!str) return 0;
    const num = parseFloat(str.replace(/[^0-9.]/g, ""));
    if (str.includes("Milyar")) return num * 1000;
    return num;
  };

  const filteredMovies = useMemo(() => {
    let result = [...movies];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (m) =>
          m.title.toLowerCase().includes(q) ||
          m.originalTitle.toLowerCase().includes(q) ||
          m.director.toLowerCase().includes(q) ||
          m.stars.some((s) => s.toLowerCase().includes(q)) ||
          m.genres.some((g) => g.toLowerCase().includes(q))
      );
    }

    if (selectedGenre !== "Tümü") {
      result = result.filter((m) => m.genres.includes(selectedGenre));
    }

    if (minRating > 0) {
      result = result.filter((m) => m.rating >= minRating);
    }

    if (selectedDecade === "2020s") {
      result = result.filter((m) => m.year >= 2020);
    } else if (selectedDecade === "2010s") {
      result = result.filter((m) => m.year >= 2010 && m.year < 2020);
    } else if (selectedDecade === "2000s") {
      result = result.filter((m) => m.year >= 2000 && m.year < 2010);
    } else if (selectedDecade === "classics") {
      result = result.filter((m) => m.year < 2000);
    } else if (selectedDecade === "oscars") {
      result = result.filter((m) => (m.oscars || 0) > 0);
    }

    if (selectedCategory === "top250") {
      result = result.filter((m) => m.top250Rank !== null);
    } else if (selectedCategory === "trending") {
      result = result.filter((m) => m.year >= 2020 || m.featured);
    } else if (selectedCategory === "now_playing") {
      result = result.filter((m) => m.year >= 2023);
    } else if (selectedCategory === "highest_rated") {
      result = result.filter((m) => m.rating >= 8.5);
    } else if (selectedCategory === "sci-fi") {
      result = result.filter((m) => m.genres.includes("Bilim Kurgu"));
    } else if (selectedCategory === "action") {
      result = result.filter((m) => m.genres.includes("Aksiyon") || m.genres.includes("Macera"));
    } else if (selectedCategory === "drama") {
      result = result.filter((m) => m.genres.includes("Dram") || m.genres.includes("Suç"));
    }

    if (sortBy === "rating-desc") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "rating-asc") {
      result.sort((a, b) => a.rating - b.rating);
    } else if (sortBy === "year-desc") {
      result.sort((a, b) => b.year - a.year);
    } else if (sortBy === "year-asc") {
      result.sort((a, b) => a.year - b.year);
    } else if (sortBy === "boxoffice-desc") {
      result.sort((a, b) => parseBoxOfficeNumber(b.boxOffice) - parseBoxOfficeNumber(a.boxOffice));
    } else if (sortBy === "oscars-desc") {
      result.sort((a, b) => (b.oscars || 0) - (a.oscars || 0));
    } else if (sortBy === "title-asc") {
      result.sort((a, b) => a.title.localeCompare(b.title, "tr"));
    } else {
      result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || b.rating - a.rating);
    }

    return result;
  }, [movies, searchQuery, selectedGenre, selectedCategory, selectedDecade, minRating, sortBy]);

  return (
    <div className="cineverse-app">
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        movies={movies}
        onSelectMovie={setActiveMovie}
        watchlistCount={watchlist.length}
        onOpenWatchlist={() => setIsWatchlistOpen(true)}
        compareCount={compareList.length}
        onOpenCompare={() => setIsCompareOpen(true)}
        onOpenRoulette={() => setIsRouletteOpen(true)}
        onOpenProfile={() => setIsProfileOpen(true)}
      />

      <HeroBillboard
        featuredMovies={featuredMovies}
        onOpenTrailer={setTrailerMovie}
        onSelectMovie={setActiveMovie}
        watchlist={watchlist}
        onToggleWatchlist={handleToggleWatchlist}
      />

      <QuickHighlights
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          const el = document.getElementById("catalogSection");
          el?.scrollIntoView({ behavior: "smooth" });
        }}
      />

      <main className="main-content section-container" id="catalogSection">
        <FilterBar
          selectedGenre={selectedGenre}
          onSelectGenre={setSelectedGenre}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          selectedDecade={selectedDecade}
          onSelectDecade={setSelectedDecade}
          minRating={minRating}
          onSelectMinRating={setMinRating}
          sortBy={sortBy}
          onSelectSort={setSortBy}
          viewMode={viewMode}
          onSelectViewMode={setViewMode}
          totalResults={filteredMovies.length}
        />

        {viewMode === "grid" ? (
          <MovieGrid
            movies={filteredMovies}
            watchlist={watchlist}
            watchedMovies={watchedMovies}
            favoriteMovies={favoriteMovies}
            compareList={compareList}
            onToggleWatchlist={handleToggleWatchlist}
            onToggleWatched={handleToggleWatched}
            onToggleFavorite={handleToggleFavorite}
            onToggleCompare={handleToggleCompare}
            onOpenTrailer={setTrailerMovie}
            onSelectMovie={setActiveMovie}
            onOpenDirector={setActiveDirector}
            onResetFilters={handleResetFilters}
          />
        ) : (
          <ListViewTable
            movies={filteredMovies}
            watchlist={watchlist}
            watchedMovies={watchedMovies}
            favoriteMovies={favoriteMovies}
            compareList={compareList}
            onToggleWatchlist={handleToggleWatchlist}
            onToggleWatched={handleToggleWatched}
            onToggleFavorite={handleToggleFavorite}
            onToggleCompare={handleToggleCompare}
            onOpenTrailer={setTrailerMovie}
            onSelectMovie={setActiveMovie}
          />
        )}

        <BoxOfficeTrivia
          movies={movies}
          onFilterByDirector={handleFilterByDirector}
          onOpenDirector={setActiveDirector}
          onSelectMovie={setActiveMovie}
        />
      </main>

      {activeMovie && (
        <MovieModal
          movie={activeMovie}
          onClose={() => setActiveMovie(null)}
          onOpenTrailer={setTrailerMovie}
          isInWatchlist={watchlist.some((m) => m.id === activeMovie.id)}
          isWatched={watchedMovies.some((m) => m.id === activeMovie.id)}
          isFavorite={favoriteMovies.some((m) => m.id === activeMovie.id)}
          isComparing={compareList.some((m) => m.id === activeMovie.id)}
          onToggleWatchlist={handleToggleWatchlist}
          onToggleWatched={handleToggleWatched}
          onToggleFavorite={handleToggleFavorite}
          onToggleCompare={handleToggleCompare}
          userRating={userRatings[activeMovie.id]}
          onRateMovie={handleRateMovie}
          onAddReview={handleAddReview}
          onOpenDirector={setActiveDirector}
        />
      )}

      {trailerMovie && (
        <TrailerModal
          movie={trailerMovie}
          onClose={() => setTrailerMovie(null)}
        />
      )}

      {isCompareOpen && (
        <CompareModal
          movieA={compareList[0] || movies[0]}
          movieB={compareList[1] || movies[1]}
          allMovies={movies}
          onSelectMovieA={(m) => setCompareList([m, compareList[1] || movies[1]])}
          onSelectMovieB={(m) => setCompareList([compareList[0] || movies[0], m])}
          onClose={() => setIsCompareOpen(false)}
          onOpenTrailer={setTrailerMovie}
        />
      )}

      <MovieRouletteModal
        allMovies={movies}
        isOpen={isRouletteOpen}
        onClose={() => setIsRouletteOpen(false)}
        onSelectMovie={setActiveMovie}
        onOpenTrailer={setTrailerMovie}
        watchlist={watchlist}
        onToggleWatchlist={handleToggleWatchlist}
      />

      {activeDirector && (
        <DirectorModal
          directorName={activeDirector}
          allMovies={movies}
          onClose={() => setActiveDirector(null)}
          onSelectMovie={setActiveMovie}
        />
      )}

      <WatchlistDrawer
        isOpen={isWatchlistOpen}
        onClose={() => setIsWatchlistOpen(false)}
        watchlist={watchlist}
        onRemoveFromWatchlist={handleRemoveFromWatchlist}
        onClearWatchlist={handleClearWatchlist}
        onSelectMovie={setActiveMovie}
        onShowToast={showToast}
      />

      <ProfileDrawer
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        watchedMovies={watchedMovies}
        favoriteMovies={favoriteMovies}
        userRatings={userRatings}
        allMovies={movies}
        onRemoveWatched={(id) => setWatchedMovies((prev) => prev.filter((m) => m.id !== id))}
        onRemoveFavorite={(id) => setFavoriteMovies((prev) => prev.filter((m) => m.id !== id))}
        onSelectMovie={setActiveMovie}
      />

      <Toast toasts={toasts} />

      <Footer
        onSelectGenre={(genre) => {
          setSelectedGenre(genre);
          const el = document.getElementById("catalogSection");
          el?.scrollIntoView({ behavior: "smooth" });
        }}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          const el = document.getElementById("catalogSection");
          el?.scrollIntoView({ behavior: "smooth" });
        }}
      />
    </div>
  );
}
