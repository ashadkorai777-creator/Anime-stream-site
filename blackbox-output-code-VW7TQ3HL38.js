// data.js - Dummy anime data for the website
const animeData = [
    {
        id: 1,
        title: "Naruto",
        poster: "assets/images/naruto.jpg",
        rating: 8.5,
        genres: ["Action", "Adventure"],
        description: "A young ninja dreams of becoming the strongest in his village.",
        episodes: [
            { id: 1, title: "Episode 1: Enter Naruto", video: "assets/videos/naruto_ep1.mp4" },
            { id: 2, title: "Episode 2: My Name is Konohamaru", video: "assets/videos/naruto_ep2.mp4" }
        ],
        isAdult: false,
        trending: true,
        latest: true,
        category: "Action"
    },
    {
        id: 2,
        title: "One Piece",
        poster: "assets/images/one_piece.jpg",
        rating: 9.0,
        genres: ["Adventure", "Comedy"],
        description: "Pirates search for the ultimate treasure.",
        episodes: [
            { id: 1, title: "Episode 1: I'm Luffy! The Man Who's Gonna Be King of the Pirates!", video: "assets/videos/one_piece_ep1.mp4" }
        ],
        isAdult: false,
        trending: true,
        latest: false,
        category: "Adventure"
    },
    {
        id: 3,
        title: "Attack on Titan",
        poster: "assets/images/aot.jpg",
        rating: 9.2,
        genres: ["Action", "Drama"],
        description: "Humans fight giant Titans in a dystopian world.",
        episodes: [
            { id: 1, title: "Episode 1: To You, in 2000 Years", video: "assets/videos/aot_ep1.mp4" }
        ],
        isAdult: true,  // Marked as 18+ for blur system
        trending: false,
        latest: true,
        category: "Action"
    },
    {
        id: 4,
        title: "Death Note",
        poster: "assets/images/death_note.jpg",
        rating: 8.8,
        genres: ["Thriller", "Mystery"],
        description: "A student finds a notebook that kills anyone whose name is written in it.",
        episodes: [
            { id: 1, title: "Episode 1: Rebirth", video: "assets/videos/death_note_ep1.mp4" }
        ],
        isAdult: false,
        trending: false,
        latest: false,
        category: "Thriller"
    },
    {
        id: 5,
        title: "My Hero Academia",
        poster: "assets/images/mha.jpg",
        rating: 8.7,
        genres: ["Action", "Superhero"],
        description: "A boy without powers dreams of becoming a hero.",
        episodes: [
            { id: 1, title: "Episode 1: Izuku Midoriya: Origin", video: "assets/videos/mha_ep1.mp4" }
        ],
        isAdult: false,
        trending: true,
        latest: true,
        category: "Action"
    },
    {
        id: 6,
        title: "Demon Slayer",
        poster: "assets/images/demon_slayer.jpg",
        rating: 8.9,
        genres: ["Action", "Fantasy"],
        description: "A boy becomes a demon slayer to save his sister.",
        episodes: [
            { id: 1, title: "Episode 1: Cruelty", video: "assets/videos/demon_slayer_ep1.mp4" }
        ],
        isAdult: false,
        trending: false,
        latest: true,
        category: "Fantasy"
    },
    {
        id: 7,
        title: "Tokyo Ghoul",
        poster: "assets/images/tokyo_ghoul.jpg",
        rating: 7.8,
        genres: ["Horror", "Action"],
        description: "A human becomes a ghoul after an organ transplant.",
        episodes: [
            { id: 1, title: "Episode 1: Tragedy", video: "assets/videos/tokyo_ghoul_ep1.mp4" }
        ],
        isAdult: true,  // 18+
        trending: false,
        latest: false,
        category: "Horror"
    },
    {
        id: 8,
        title: "Your Lie in April",
        poster: "assets/images/your_lie.jpg",
        rating: 8.6,
        genres: ["Romance", "Drama"],
        description: "A pianist and a violinist inspire each other.",
        episodes: [
            { id: 1, title: "Episode 1: Monotone/Colorful", video: "assets/videos/your_lie_ep1.mp4" }
        ],
        isAdult: false,
        trending: false,
        latest: false,
        category: "Romance"
    },
    {
        id: 9,
        title: "Spy x Family",
        poster: "assets/images/spy_family.jpg",
        rating: 8.4,
        genres: ["Comedy", "Action"],
        description: "A spy forms a fake family for a mission.",
        episodes: [
            { id: 1, title: "Episode 1: Operation Strix", video: "assets/videos/spy_family_ep1.mp4" }
        ],
        isAdult: false,
        trending: true,
        latest: true,
        category: "Comedy"
    },
    {
        id: 10,
        title: "Fullmetal Alchemist",
        poster: "assets/images/fma.jpg",
        rating: 9.1,
        genres: ["Adventure", "Fantasy"],
        description: "Brothers use alchemy to restore their bodies.",
        episodes: [
            { id: 1, title: "Episode 1: Those Who Challenge the Sun", video: "assets/videos/fma_ep1.mp4" }
        ],
        isAdult: false,
        trending: false,
        latest: false,
        category: "Adventure"
    }
];

// Helper functions for data access
function getAnimeById(id) {
    return animeData.find(anime => anime.id === parseInt(id));
}

function getTrendingAnime() {
    return animeData.filter(anime => anime.trending);
}

function getLatestEpisodes() {
    return animeData.filter(anime => anime.latest);
}

function getAnimeByCategory(category) {
    return animeData.filter(anime => anime.genres.includes(category));
}