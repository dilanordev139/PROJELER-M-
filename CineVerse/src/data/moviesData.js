// CineVerse Pro - Gelişmiş IMDb Sinema Veritabanı
// Zengin film koleksiyonu, gerçek IMDb puanları, oyuncular, yönetmenler, fragmanlar ve ödüller

export const MOVIES_DATA = [
  {
    id: "tt0816692",
    title: "Yıldızlararası",
    originalTitle: "Interstellar",
    year: 2014,
    rating: 8.7,
    ratingCount: "2.1M",
    duration: "2s 49dk",
    durationMinutes: 169,
    age: "13+",
    genres: ["Bilim Kurgu", "Macera", "Dram"],
    director: "Christopher Nolan",
    writers: ["Jonathan Nolan", "Christopher Nolan"],
    stars: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Michael Caine"],
    cast: [
      { name: "Matthew McConaughey", role: "Cooper", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80" },
      { name: "Anne Hathaway", role: "Brand", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" },
      { name: "Jessica Chastain", role: "Murph", photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80" },
      { name: "Michael Caine", role: "Prof. Brand", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80" }
    ],
    synopsis: "Dünya'nın geleceği iklim felaketleri ve kuraklıkla mahvolurken, bir grup cesur astronot insanlığın yeni yuvasını bulmak için Satürn yakınlarında beliren esrarengiz bir solucan deliğinden geçerek bilinmeyen galaksilere doğru tehlikeli bir yolculuğa çıkar.",
    poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    trailerYoutubeId: "zSWdZVtXT7E",
    featured: true,
    top250Rank: 21,
    boxOffice: "$773.9 Milyon",
    oscars: 1,
    awards: "1 Oscar ödülü, 44 farklı ödül ve 148 adaylık",
    reviews: [
      { id: 1, user: "Ahmet Y.", rating: 10, date: "15 Ekim 2024", comment: "Sinema tarihinin en etkileyici bilim kurgu başyapıtı. Hans Zimmer'ın müzikleri insanı büyülüyor." },
      { id: 2, user: "Selin K.", rating: 9, date: "2 Eylül 2024", comment: "Bilim ile insan sevgisinin zaman ve boyutlar ötesi muazzam dansı. Her izleyişte ağlatıyor." }
    ]
  },
  {
    id: "tt0468569",
    title: "Kara Şövalye",
    originalTitle: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    ratingCount: "2.9M",
    duration: "2s 32dk",
    durationMinutes: 152,
    age: "16+",
    genres: ["Aksiyon", "Suç", "Dram", "Gerilim"],
    director: "Christopher Nolan",
    writers: ["Jonathan Nolan", "Christopher Nolan", "David S. Goyer"],
    stars: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Michael Caine"],
    cast: [
      { name: "Christian Bale", role: "Bruce Wayne / Batman", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80" },
      { name: "Heath Ledger", role: "Joker", photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80" },
      { name: "Aaron Eckhart", role: "Harvey Dent", photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80" },
      { name: "Gary Oldman", role: "Jim Gordon", photo: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=200&q=80" }
    ],
    synopsis: "Gotham Şehri'ni organize suçlardan temizlemeye çalışan Batman, Teğmen Gordon ve Savcı Harvey Dent'in karşısına kural tanımayan, kaostan beslenen psikopat dahi Joker çıkar. Batman ahlaki sınırlarının en uç noktalarına kadar sınanacaktır.",
    poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1600&q=80",
    trailerYoutubeId: "EXeTwQWrcwY",
    featured: true,
    top250Rank: 3,
    boxOffice: "$1.006 Milyar",
    oscars: 2,
    awards: "2 Oscar ödülü (Heath Ledger En İyi Yardımcı Erkek Oyuncu), 159 ödül",
    reviews: [
      { id: 1, user: "Mert B.", rating: 10, date: "12 Kasım 2024", comment: "Heath Ledger'ın Joker performansı sinema tarihinde tekrarı olmayacak bir oyunculuk dersi." },
      { id: 2, user: "Burak D.", rating: 10, date: "24 Ağustos 2024", comment: "Sadece süper kahraman filmlerinin değil, tüm zamanların en iyi suç ve gerilim filmlerinden biri." }
    ]
  },
  {
    id: "tt15239678",
    title: "Dune: Çöl Gezegeni Bölüm İki",
    originalTitle: "Dune: Part Two",
    year: 2024,
    rating: 8.5,
    ratingCount: "520K",
    duration: "2s 46dk",
    durationMinutes: 166,
    age: "13+",
    genres: ["Bilim Kurgu", "Macera", "Aksiyon", "Dram"],
    director: "Denis Villeneuve",
    writers: ["Denis Villeneuve", "Jon Spaihts", "Frank Herbert"],
    stars: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson", "Austin Butler"],
    cast: [
      { name: "Timothée Chalamet", role: "Paul Atreides", photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80" },
      { name: "Zendaya", role: "Chani", photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80" },
      { name: "Rebecca Ferguson", role: "Leydi Jessica", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80" },
      { name: "Austin Butler", role: "Feyd-Rautha", photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80" }
    ],
    synopsis: "Paul Atreides, ailesini yok eden komploculara karşı intikam arayışında Chani ve Fremenlerle birleşir. Evrenin kaderi ile hayatının aşkı arasında bir seçim yapmak zorunda kalırken, yalnızca kendisinin öngörebileceği korkunç bir geleceği engellemeye çalışır.",
    poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80",
    trailerYoutubeId: "Way9Dexny3w",
    featured: true,
    top250Rank: 58,
    boxOffice: "$714.4 Milyon",
    oscars: 0,
    awards: "Görsel ve ses dallarında 40+ uluslararası ödül",
    reviews: [
      { id: 1, user: "Kaan T.", rating: 10, date: "1 Mart 2024", comment: "Görsel bir şölen, ses dizaynı sinema salonunu titretti. Denis Villeneuve çağımızın sinema ustası." }
    ]
  },
  {
    id: "tt15398776",
    title: "Oppenheimer",
    originalTitle: "Oppenheimer",
    year: 2023,
    rating: 8.8,
    ratingCount: "810K",
    duration: "3s 00dk",
    durationMinutes: 180,
    age: "16+",
    genres: ["Biyografi", "Dram", "Tarih"],
    director: "Christopher Nolan",
    writers: ["Christopher Nolan", "Kai Bird"],
    stars: ["Cillian Murphy", "Emily Blunt", "Matt Damon", "Robert Downey Jr."],
    cast: [
      { name: "Cillian Murphy", role: "J. Robert Oppenheimer", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80" },
      { name: "Robert Downey Jr.", role: "Lewis Strauss", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80" },
      { name: "Emily Blunt", role: "Kitty Oppenheimer", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80" }
    ],
    synopsis: "Amerikalı bilim insanı J. Robert Oppenheimer'ın atom bombasının geliştirilmesindeki rolü ve Manhattan Projesi sırasındaki çalkantılı ahlaki, politik ve psikolojik serüveni anlatılıyor.",
    poster: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1600&q=80",
    trailerYoutubeId: "uYPbbksJxIg",
    featured: true,
    top250Rank: 28,
    boxOffice: "$976.2 Milyon",
    oscars: 7,
    awards: "7 Oscar ödülü (En İyi Film, Yönetmen, Erkek Oyuncu, Yardımcı Erkek Oyuncu)",
    reviews: [
      { id: 1, user: "Zeynep S.", rating: 9, date: "24 Temmuz 2023", comment: "Trinity test sahnesi ve arkasından gelen sessizlik sinema tarihine kazındı." }
    ]
  },
  {
    id: "tt1375666",
    title: "Başlangıç",
    originalTitle: "Inception",
    year: 2010,
    rating: 8.8,
    ratingCount: "2.6M",
    duration: "2s 28dk",
    durationMinutes: 148,
    age: "13+",
    genres: ["Aksiyon", "Bilim Kurgu", "Macera"],
    director: "Christopher Nolan",
    writers: ["Christopher Nolan"],
    stars: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page", "Tom Hardy"],
    cast: [
      { name: "Leonardo DiCaprio", role: "Dom Cobb", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80" },
      { name: "Joseph Gordon-Levitt", role: "Arthur", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80" },
      { name: "Tom Hardy", role: "Eames", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80" }
    ],
    synopsis: "İnsanların zihinlerine rüya paylaşımı teknolojisiyle sızarak bilinçaltındaki en değerli sırları çalan yetenekli bir hırsıza, çocuklarına dönebilmesi karşılığında imkansız bir görev verilir: Bir fikri çalmak yerine bir zihne ekmek (Inception).",
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    trailerYoutubeId: "YoHD9XEInc0",
    featured: false,
    top250Rank: 14,
    boxOffice: "$839 Milyon",
    oscars: 4,
    awards: "4 Oscar ödülü, 158 ödül ve 220 adaylık",
    reviews: [
      { id: 1, user: "Emre V.", rating: 10, date: "10 Ocak 2024", comment: "Rüya katmanları kurgusu bir senaryo dehası. Son sahnedeki topaç hala dönüyor mu tartışıyoruz." }
    ]
  },
  {
    id: "tt0111161",
    title: "Esaretin Bedeli",
    originalTitle: "The Shawshank Redemption",
    year: 1994,
    rating: 9.3,
    ratingCount: "2.9M",
    duration: "2s 22dk",
    durationMinutes: 142,
    age: "16+",
    genres: ["Dram"],
    director: "Frank Darabont",
    writers: ["Stephen King", "Frank Darabont"],
    stars: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    cast: [
      { name: "Tim Robbins", role: "Andy Dufresne", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80" },
      { name: "Morgan Freeman", role: "Ellis Boyd 'Red' Redding", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80" }
    ],
    synopsis: "Karısını ve sevgilisini öldürmekle haksız yere suçlanan başarılı bankacı Andy Dufresne, ömür boyu hapis cezasına çarptırılır. Shawshank Cezaevi'nde geçen yirmi yıl boyunca umudunu asla kaybetmeyen Andy, kaderini kendi elleriyle yeniden çizecektir.",
    poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    trailerYoutubeId: "PLl99DlL6b4",
    featured: false,
    top250Rank: 1,
    boxOffice: "$58.3 Milyon",
    oscars: 0,
    awards: "IMDb #1 sırada, 7 Oscar adaylığı",
    reviews: [
      { id: 1, user: "Volkan A.", rating: 10, date: "3 Mayıs 2024", comment: "Umudun ve insan iradesinin en yüce manifestosu. IMDb zirvesini sonuna kadar hak ediyor." }
    ]
  },
  {
    id: "tt0068646",
    title: "Baba",
    originalTitle: "The Godfather",
    year: 1972,
    rating: 9.2,
    ratingCount: "2.0M",
    duration: "2s 55dk",
    durationMinutes: 175,
    age: "18+",
    genres: ["Suç", "Dram"],
    director: "Francis Ford Coppola",
    writers: ["Mario Puzo", "Francis Ford Coppola"],
    stars: ["Marlon Brando", "Al Pacino", "James Caan", "Robert Duvall"],
    cast: [
      { name: "Marlon Brando", role: "Don Vito Corleone", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80" },
      { name: "Al Pacino", role: "Michael Corleone", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80" }
    ],
    synopsis: "New York'un en güçlü İtalyan mafya ailesi Corleone'lerin yaşlanan lideri Don Vito Corleone'nin suikast girişimine uğramasıyla, ailesinin karanlık işlerinden hep uzak durmuş olan oğlu Michael kendini kanlı bir güç savaşının ortasında bulur.",
    poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1600&q=80",
    trailerYoutubeId: "sY1S34973zA",
    featured: false,
    top250Rank: 2,
    boxOffice: "$291 Milyon",
    oscars: 3,
    awards: "3 Oscar ödülü (En İyi Film, Erkek Oyuncu, Uyarlama Senaryo)",
    reviews: [
      { id: 1, user: "Can P.", rating: 10, date: "14 Nisan 2024", comment: "Sinemanın kutsal kitabı. Marlon Brando ve Al Pacino devleşiyor." }
    ]
  },
  {
    id: "tt0133093",
    title: "Matrix",
    originalTitle: "The Matrix",
    year: 1999,
    rating: 8.7,
    ratingCount: "2.0M",
    duration: "2s 16dk",
    durationMinutes: 136,
    age: "16+",
    genres: ["Aksiyon", "Bilim Kurgu"],
    director: "Lana & Lilly Wachowski",
    writers: ["Lana Wachowski", "Lilly Wachowski"],
    stars: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss", "Hugo Weaving"],
    cast: [
      { name: "Keanu Reeves", role: "Neo", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80" },
      { name: "Laurence Fishburne", role: "Morpheus", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80" }
    ],
    synopsis: "Sıradan bir yazılımcı ve aynı zamanda Neo takma adlı bir hacker olan Thomas Anderson, gizemli Morpheus ile tanışarak yaşadığı dünyanın aslında insan ırkını köleleştiren yapay zekalar tarafından tasarlanmış bir simülasyon olduğunu keşfeder.",
    poster: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
    trailerYoutubeId: "vKQi3bBA1y8",
    featured: false,
    top250Rank: 16,
    boxOffice: "$467.2 Milyon",
    oscars: 4,
    awards: "4 Oscar ödülü (Görsel Efekt, Ses, Kurgu dallarında)",
    reviews: [
      { id: 1, user: "Deniz Y.", rating: 10, date: "22 Şubat 2024", comment: "Felsefeyi aksiyonla bu denli harmanlayan başka bir film gelmedi." }
    ]
  },
  {
    id: "tt0137523",
    title: "Dövüş Kulübü",
    originalTitle: "Fight Club",
    year: 1999,
    rating: 8.8,
    ratingCount: "2.3M",
    duration: "2s 19dk",
    durationMinutes: 139,
    age: "18+",
    genres: ["Dram"],
    director: "David Fincher",
    writers: ["Chuck Palahniuk", "Jim Uhls"],
    stars: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
    cast: [
      { name: "Brad Pitt", role: "Tyler Durden", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80" },
      { name: "Edward Norton", role: "Anlatıcı", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80" }
    ],
    synopsis: "Uykusuzluk çeken ve tüketim toplumunun tekdüzeliğinde boğulan bir büro çalışanı, karizmatik sabun satıcısı Tyler Durden ile tanışır. İkili, erkeklerin içlerindeki bastırılmış öfkeyi boşalttığı gizli bir yeraltı dövüş kulübü kurarlar; ancak bu kulüp kısa sürede tehlikeli bir anarşik örgüte dönüşecektir.",
    poster: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1600&q=80",
    trailerYoutubeId: "O1nDozs-L1E",
    featured: false,
    top250Rank: 12,
    boxOffice: "$101.2 Milyon",
    oscars: 0,
    awards: "1 Oscar adaylığı, kült sinema başyapıtı",
    reviews: [
      { id: 1, user: "Oğuzhan K.", rating: 10, date: "17 Haziran 2024", comment: "İlk kural: Dövüş kulübü hakkında konuşma! Bir dönemin manifestosu." }
    ]
  },
  {
    id: "tt6751668",
    title: "Parazit",
    originalTitle: "Parasite",
    year: 2019,
    rating: 8.5,
    ratingCount: "950K",
    duration: "2s 12dk",
    durationMinutes: 132,
    age: "16+",
    genres: ["Dram", "Gerilim", "Komedi"],
    director: "Bong Joon Ho",
    writers: ["Bong Joon Ho", "Han Jin-won"],
    stars: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong", "Choi Woo-shik"],
    cast: [
      { name: "Song Kang-ho", role: "Kim Ki-taek", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80" },
      { name: "Choi Woo-shik", role: "Kim Ki-woo", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80" }
    ],
    synopsis: "Yoksul Kim ailesinin tüm fertleri, zengin Park ailesinin evinde farklı kimliklerle hizmetçi, şoför ve öğretmen olarak kurnazca işe girmeyi başarır. Ancak bu parazit ortakyaşam, evin altındaki sarsıcı sırların ortaya çıkmasıyla ölümcül bir kaosa sürüklenir.",
    poster: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    trailerYoutubeId: "5xH0hhJ98Xg",
    featured: false,
    top250Rank: 33,
    boxOffice: "$263.1 Milyon",
    oscars: 4,
    awards: "4 Oscar ödülü (Tarihte ilk kez yabancı dilde En İyi Film Oscar'ı)",
    reviews: [
      { id: 1, user: "Elif B.", rating: 9, date: "9 Eylül 2024", comment: "Sınıf çatışmasını bu kadar zekice ve mizahi bir gerilimle işleyen başka bir film yok." }
    ]
  },
  {
    id: "tt0110912",
    title: "Ucuz Roman",
    originalTitle: "Pulp Fiction",
    year: 1994,
    rating: 8.9,
    ratingCount: "2.2M",
    duration: "2s 34dk",
    durationMinutes: 154,
    age: "18+",
    genres: ["Suç", "Dram"],
    director: "Quentin Tarantino",
    writers: ["Quentin Tarantino", "Roger Avary"],
    stars: ["John Travolta", "Uma Thurman", "Samuel L. Jackson", "Bruce Willis"],
    cast: [
      { name: "John Travolta", role: "Vincent Vega", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80" },
      { name: "Samuel L. Jackson", role: "Jules Winnfield", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80" }
    ],
    synopsis: "İki felsefi tetikçi, bir boksör, bir gangsterin karısı ve bir lokantayı soymaya kalkan iki amatör hırsızın kesişen sıra dışı ve şiddet dolu hikayeleri kronolojik olmayan ustalıklı bir kurguyla aktarılır.",
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1600&q=80",
    trailerYoutubeId: "tGpTpVyI_OQ",
    featured: false,
    top250Rank: 8,
    boxOffice: "$213.9 Milyon",
    oscars: 1,
    awards: "Cannes Altın Palmiye, 1 Oscar ödülü (En İyi Orijinal Senaryo)",
    reviews: [
      { id: 1, user: "Tolga C.", rating: 10, date: "11 Temmuz 2024", comment: "Diyalogları ve ikonik dans sahnesiyle popüler kültürün mihenk taşı." }
    ]
  },
  {
    id: "tt0167260",
    title: "Yüzüklerin Efendisi: Kralın Dönüşü",
    originalTitle: "The Lord of the Rings: The Return of the King",
    year: 2003,
    rating: 9.0,
    ratingCount: "2.0M",
    duration: "3s 21dk",
    durationMinutes: 201,
    age: "13+",
    genres: ["Aksiyon", "Macera", "Dram", "Fantastik"],
    director: "Peter Jackson",
    writers: ["J.R.R. Tolkien", "Fran Walsh", "Philippa Boyens"],
    stars: ["Elijah Wood", "Viggo Mortensen", "Ian McKellen", "Orlando Bloom"],
    cast: [
      { name: "Elijah Wood", role: "Frodo Baggins", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80" },
      { name: "Ian McKellen", role: "Gandalf", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80" }
    ],
    synopsis: "Orta Dünya'nın nihai savaşı Minas Tirith önlerinde başlarken, Aragorn krallık mirasını sahiplenir. Frodo ve Sam ise Tek Yüzük'ü yok etmek için Hüküm Dağı'nın alevlerine doğru ölümcül son adımlarını atar.",
    poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80",
    trailerYoutubeId: "r5X-hFf6Bwo",
    featured: false,
    top250Rank: 7,
    boxOffice: "$1.156 Milyar",
    oscars: 11,
    awards: "11 Oscar Ödülü (Aday gösterildiği 11 kategorinin hepsini kazandı)",
    reviews: [
      { id: 1, user: "Barış G.", rating: 10, date: "30 Ocak 2024", comment: "Sinema tarihinin tartışmasız en epik üçleme finali. 11'de 11 Oscar!" }
    ]
  },
  {
    id: "tt2582802",
    title: "Whiplash",
    originalTitle: "Whiplash",
    year: 2014,
    rating: 8.5,
    ratingCount: "1.0M",
    duration: "1s 46dk",
    durationMinutes: 106,
    age: "16+",
    genres: ["Dram", "Müzik"],
    director: "Damien Chazelle",
    writers: ["Damien Chazelle"],
    stars: ["Miles Teller", "J.K. Simmons", "Paul Reiser"],
    cast: [
      { name: "Miles Teller", role: "Andrew Neiman", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80" },
      { name: "J.K. Simmons", role: "Terence Fletcher", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80" }
    ],
    synopsis: "Ülkenin en prestijli müzik konservatuvarına kabul edilen hırslı genç bir davulcu, öğrencilerini mükemmelliğe zorlamak için acımasız ve psikolojik şiddet dolu yöntemler uygulayan efsanevi eğitmen Terence Fletcher'ın orkestrasına seçilir.",
    poster: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1600&q=80",
    trailerYoutubeId: "7d_jQycdQGo",
    featured: false,
    top250Rank: 41,
    boxOffice: "$49 Milyon",
    oscars: 3,
    awards: "3 Oscar ödülü (J.K. Simmons En İyi Yardımcı Erkek Oyuncu, Kurgu, Ses)",
    reviews: [
      { id: 1, user: "Cem R.", rating: 10, date: "19 Eylül 2024", comment: "Finaldeki davul solosu sırasında nefes almayı unuttum. Saf tutku ve delilik." }
    ]
  },
  {
    id: "tt0114369",
    title: "Yedi",
    originalTitle: "Se7en",
    year: 1995,
    rating: 8.6,
    ratingCount: "1.8M",
    duration: "2s 07dk",
    durationMinutes: 127,
    age: "18+",
    genres: ["Suç", "Dram", "Gizem", "Gerilim"],
    director: "David Fincher",
    writers: ["Andrew Kevin Walker"],
    stars: ["Morgan Freeman", "Brad Pitt", "Kevin Spacey", "Gwyneth Paltrow"],
    cast: [
      { name: "Morgan Freeman", role: "Detektif Somerset", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80" },
      { name: "Brad Pitt", role: "Detektif Mills", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80" }
    ],
    synopsis: "Emekliliğine günler kalmış deneyimli bir dedektif ile onun yerine atanmış hırslı genç ortağı, Hristiyanlığın yedi ölümcül günahını işleyen kurbanları cezalandıran son derece zeki ve acımasız bir seri katilin peşine düşer.",
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1600&q=80",
    trailerYoutubeId: "znmZoVkCjpI",
    featured: false,
    top250Rank: 19,
    boxOffice: "$327.3 Milyon",
    oscars: 0,
    awards: "1 Oscar adaylığı, tüm zamanların en sarsıcı finaline sahip gerilimi",
    reviews: [
      { id: 1, user: "Sinem T.", rating: 10, date: "4 Ağustos 2024", comment: "'Kutuda ne var?!' Sinema tarihinin en karanlık ve kusursuz dedektiflik kurgusu." }
    ]
  },
  {
    id: "tt0482571",
    title: "Prestij",
    originalTitle: "The Prestige",
    year: 2006,
    rating: 8.5,
    ratingCount: "1.5M",
    duration: "2s 10dk",
    durationMinutes: 130,
    age: "13+",
    genres: ["Dram", "Gizem", "Bilim Kurgu"],
    director: "Christopher Nolan",
    writers: ["Jonathan Nolan", "Christopher Nolan", "Christopher Priest"],
    stars: ["Christian Bale", "Hugh Jackman", "Scarlett Johansson", "Michael Caine"],
    cast: [
      { name: "Christian Bale", role: "Alfred Borden", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80" },
      { name: "Hugh Jackman", role: "Robert Angier", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80" }
    ],
    synopsis: "19. yüzyılın sonlarında Londra'da iki genç sihirbaz, trajik bir kazanın ardından birbirlerine ölümcül bir düşmanlık beslemeye başlar. Birbirlerinin sahne sırlarını çözmek ve en üstün 'Işınlanan Adam' illüzyonunu gerçekleştirmek için her şeylerini feda edeceklerdir.",
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    trailerYoutubeId: "o4gHCmTQDVI",
    featured: false,
    top250Rank: 40,
    boxOffice: "$109.7 Milyon",
    oscars: 0,
    awards: "2 Oscar adaylığı, Nikola Tesla sahneleriyle unutulmaz kült eser",
    reviews: [
      { id: 1, user: "Berk A.", rating: 10, date: "15 Şubat 2024", comment: "Her sihir numarası 3 bölümden oluşur: Vaat, Dönüşüm ve Prestij. Tek kelimeyle dahice." }
    ]
  },
  {
    id: "tt4633694",
    title: "Örümcek-Adam: Örümcek Evreninde",
    originalTitle: "Spider-Man: Into the Spider-Verse",
    year: 2018,
    rating: 8.4,
    ratingCount: "700K",
    duration: "1s 57dk",
    durationMinutes: 117,
    age: "7+",
    genres: ["Animasyon", "Aksiyon", "Macera", "Bilim Kurgu"],
    director: "Bob Persichetti, Peter Ramsey, Rodney Rothman",
    writers: ["Phil Lord", "Rodney Rothman"],
    stars: ["Shameik Moore", "Jake Johnson", "Hailee Steinfeld"],
    cast: [
      { name: "Shameik Moore", role: "Miles Morales (ses)", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" },
      { name: "Hailee Steinfeld", role: "Gwen Stacy (ses)", photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80" }
    ],
    synopsis: "Radyoaktif bir örümcek tarafından ısırılan Brooklynli genç Miles Morales, Kingpin'in süper çarpıştırıcıyı açmasıyla alternatif boyutlardan gelen farklı Örümcek kahramanlarıyla tanışır ve kendi gerçek kahramanlık potansiyelini keşfeder.",
    poster: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1600&q=80",
    trailerYoutubeId: "g4Hbz2jLxvQ",
    featured: false,
    top250Rank: 66,
    boxOffice: "$384.3 Milyon",
    oscars: 1,
    awards: "En İyi Animasyon Filmi Oscar ödülü, BAFTA ve Altın Küre ödülü",
    reviews: [
      { id: 1, user: "Ece N.", rating: 10, date: "12 Ekim 2024", comment: "Canlı bir çizgi roman gibi akan devrim niteliğinde bir animasyon stili!" }
    ]
  },
  {
    id: "tt0102926",
    title: "Kuzuların Sessizliği",
    originalTitle: "The Silence of the Lambs",
    year: 1991,
    rating: 8.6,
    ratingCount: "1.6M",
    duration: "1s 58dk",
    durationMinutes: 118,
    age: "18+",
    genres: ["Suç", "Dram", "Gerilim"],
    director: "Jonathan Demme",
    writers: ["Thomas Harris", "Ted Tally"],
    stars: ["Jodie Foster", "Anthony Hopkins", "Lawrence A. Bonney"],
    cast: [
      { name: "Jodie Foster", role: "Clarice Starling", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80" },
      { name: "Anthony Hopkins", role: "Dr. Hannibal Lecter", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80" }
    ],
    synopsis: "Genç FBI akademisi öğrencisi Clarice Starling, kadınların derilerini yüzen 'Buffalo Bill' lakaplı acımasız bir seri katili yakalayabilmek için hapisteki psikiyatr ve yamyam Hannibal Lecter'ın zihninden yardım almak zorundadır.",
    poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1600&q=80",
    trailerYoutubeId: "W6Mm8Sbe__o",
    featured: false,
    top250Rank: 23,
    boxOffice: "$272.7 Milyon",
    oscars: 5,
    awards: "Büyük 5'liyi kazanan 3 filmden biri (En İyi Film, Yönetmen, Erkek Oyuncu, Kadın Oyuncu, Senaryo)",
    reviews: [
      { id: 1, user: "Murat S.", rating: 10, date: "30 Mayıs 2024", comment: "Anthony Hopkins sadece 16 dakikalık ekran süresiyle Oscar kazandı ve tarihin en ikonik kötüsü oldu." }
    ]
  },
  {
    id: "tt0245429",
    title: "Ruhların Kaçışı",
    originalTitle: "Spirited Away",
    year: 2001,
    rating: 8.6,
    ratingCount: "850K",
    duration: "2s 05dk",
    durationMinutes: 125,
    age: "7+",
    genres: ["Animasyon", "Macera", "Aile", "Fantastik"],
    director: "Hayao Miyazaki",
    writers: ["Hayao Miyazaki"],
    stars: ["Rumi Hiiragi", "Miyu Irino", "Mari Natsuki"],
    cast: [
      { name: "Rumi Hiiragi", role: "Chihiro (ses)", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" },
      { name: "Miyu Irino", role: "Haku (ses)", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80" }
    ],
    synopsis: "Ailesiyle yeni bir kasabaya taşınırken gizemli bir eğlence parkına giren 10 yaşındaki Chihiro, ebeveynlerinin domuza dönüştüğünü görür. Onları kurtarmak için ruhların, tanrıların ve büyücü Yubaba'nın işlettiği gizemli hamamda çalışmak zorundadır.",
    poster: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    trailerYoutubeId: "ByXuk9QqQkk",
    featured: false,
    top250Rank: 31,
    boxOffice: "$395.8 Milyon",
    oscars: 1,
    awards: "En İyi Animasyon Oscar'ı, Berlin Film Festivali Altın Ayı",
    reviews: [
      { id: 1, user: "Damla N.", rating: 10, date: "5 Mayıs 2024", comment: "Studio Ghibli'nin ve Miyazaki'nin en büyülü başyapıtı. Her yaştan insanı büyülüyor." }
    ]
  },
  {
    id: "tt0172495",
    title: "Gladyatör",
    originalTitle: "Gladiator",
    year: 2000,
    rating: 8.5,
    ratingCount: "1.6M",
    duration: "2s 35dk",
    durationMinutes: 155,
    age: "16+",
    genres: ["Aksiyon", "Macera", "Dram"],
    director: "Ridley Scott",
    writers: ["David Franzoni", "John Logan"],
    stars: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
    cast: [
      { name: "Russell Crowe", role: "Maximus Decimus Meridius", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80" },
      { name: "Joaquin Phoenix", role: "Commodus", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80" }
    ],
    synopsis: "Roma İmparatoru Marcus Aurelius'un veliahtı olarak seçtiği dürüst general Maximus, tahtı zorla ele geçiren kıskanç prens Commodus'un ihanetine uğrar. Ailesi katledilen Maximus köle olarak satılır ve Roma Kolezyumu'na bir gladyatör olarak intikam için geri döner.",
    poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80",
    trailerYoutubeId: "owK1qxDselE",
    featured: false,
    top250Rank: 36,
    boxOffice: "$503.2 Milyon",
    oscars: 5,
    awards: "5 Oscar ödülü (En İyi Film ve Russell Crowe En İyi Erkek Oyuncu dahil)",
    reviews: [
      { id: 1, user: "Hakan U.", rating: 9, date: "19 Ocak 2024", comment: "'Bu hayatta yaptıklarımız sonsuzlukta yankılanır.' Unutulmaz bir epik destan." }
    ]
  },
  {
    id: "tt1856101",
    title: "Blade Runner 2049",
    originalTitle: "Blade Runner 2049",
    year: 2017,
    rating: 8.0,
    ratingCount: "630K",
    duration: "2s 44dk",
    durationMinutes: 164,
    age: "16+",
    genres: ["Aksiyon", "Dram", "Bilim Kurgu", "Gizem"],
    director: "Denis Villeneuve",
    writers: ["Hampton Fancher", "Michael Green"],
    stars: ["Ryan Gosling", "Harrison Ford", "Ana de Armas"],
    cast: [
      { name: "Ryan Gosling", role: "Memur K", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80" },
      { name: "Ana de Armas", role: "Joi", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" }
    ],
    synopsis: "Los Angeles polis memuru K, toplumun düzenini tehdit edebilecek uzun süredir saklanan bir sırrı gün ışığına çıkarır. K'nın keşfi, onu otuz yıldır kayıp olan eski bir Blade Runner olan Rick Deckard'ı bulmaya yönlendirir.",
    poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
    trailerYoutubeId: "gCcx85zbxz4",
    featured: false,
    top250Rank: null,
    boxOffice: "$267.5 Milyon",
    oscars: 2,
    awards: "2 Oscar ödülü (En İyi Sinematografi - Roger Deakins, Görsel Efekt)",
    reviews: [
      { id: 1, user: "Kerem F.", rating: 9, date: "18 Ağustos 2024", comment: "Roger Deakins'in sinematografisi saf bir sanat eseri. Siberpunk atmosferi kusursuz." }
    ]
  }
];

export const GENRES_LIST = [
  "Tümü",
  "Aksiyon",
  "Bilim Kurgu",
  "Dram",
  "Suç",
  "Macera",
  "Gerilim",
  "Biyografi",
  "Animasyon",
  "Gizem",
  "Fantastik"
];

export const DIRECTORS_DATA = {
  "Christopher Nolan": {
    name: "Christopher Nolan",
    birthYear: 1970,
    nationality: "İngiliz / Amerikan",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    bio: "Pratik efektleri, lineer olmayan karmaşık kurgusu, zaman bükme konseptleri ve IMAX kameralarına olan tutkusuyla çağdaş sinemanın en etkili yönetmenlerinden biridir.",
    awards: "2 Oscar Ödülü (En İyi Yönetmen ve En İyi Film - Oppenheimer), 8 Akademi Adaylığı",
    trademark: "Büyük ölçekli pratik patlamalar, zaman manipülasyonu, Hans Zimmer & Ludwig Göransson müzikleri."
  },
  "Denis Villeneuve": {
    name: "Denis Villeneuve",
    birthYear: 1967,
    nationality: "Kanadalı",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    bio: "Dune, Blade Runner 2049, Arrival ve Sicario gibi modern başyapıtların arkasındaki vizyoner yönetmen. Devasa ölçekteki görsel dili ve derin felsefi alt metinleriyle tanınır.",
    awards: "2 Akademi Ödülü Adaylığı, Venedik ve BAFTA ödülleri",
    trademark: "Minimalist brutalist mimari, monolitik uzay gemileri, derin bas ses tasarımları."
  },
  "David Fincher": {
    name: "David Fincher",
    birthYear: 1962,
    nationality: "Amerikan",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
    bio: "Fight Club, Se7en, The Social Network ve Zodiac ile psikolojik gerilim ve suç sinemasında devrim yaratan, mükemmeliyetçi kamera hareketleri ve karanlık renk paletiyle ünlü usta yönetmen.",
    awards: "3 Akademi Ödülü Adaylığı, 1 Altın Küre ve 1 Emmy Ödülü",
    trademark: "Soğuk yeşil/sarı tonlar, onlarca tekrarla kusursuzlaştırılan sahneler, keskin diyaloglar."
  },
  "Quentin Tarantino": {
    name: "Quentin Tarantino",
    birthYear: 1963,
    nationality: "Amerikan",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
    bio: "Pulp Fiction, Inglourious Basterds ve Django Unchained ile doğrusal olmayan anlatımı, popüler kültür referanslarını ve stilize şiddeti sinemanın en özgün imzalarından birine dönüştürmüştür.",
    awards: "2 Oscar Ödülü (En İyi Orijinal Senaryo), Cannes Altın Palmiye",
    trademark: "Bagaj çekimi (Trunk shot), uzun ve unutulmaz yemek sohbetleri, vintage rock & soul müzikleri."
  }
};

export const TRIVIA_LIST = [
  {
    title: "Interstellar & Astrofizik",
    text: "Interstellar filminde solucan deliği ve kara delik (Gargantua) simülasyonları için Nobel ödüllü astrofizikçi Kip Thorne ile çalışıldı. Hesaplamalar bilim literatürüne yeni astrofizik makaleleri kazandırdı."
  },
  {
    title: "Kara Şövalye & Joker",
    text: "Heath Ledger, Joker rolüne hazırlanmak için bir otel odasına tam 6 hafta kapandı, karakterin psikolojik günlüğünü tuttu ve ses tonunu sıfırdan yarattı."
  },
  {
    title: "Oppenheimer & Trinity",
    text: "Christopher Nolan, Oppenheimer'daki Trinity nükleer patlama sahnesini çekerken hiçbir CGI (bilgisayar efekti) kullanmadı; magnezyum, benzin ve alüminyum tozuyla pratik efektler oluşturdu."
  },
  {
    title: "Kuzuların Sessizliği Rekoru",
    text: "Anthony Hopkins sadece 16 dakikalık ekran süresiyle tarihin en unutulmaz performanslarından birini sergileyerek En İyi Erkek Oyuncu Oscar'ını kazandı."
  },
  {
    title: "Yüzüklerin Efendisi Rekoru",
    text: "Kralın Dönüşü (2003), aday gösterildiği 11 Oscar ödülünün 11'ini de kazanarak Ben-Hur ve Titanic ile birlikte tarihin en çok Oscar kazanan üç filminden biri oldu."
  }
];
