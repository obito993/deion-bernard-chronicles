export interface MovieItem {
  id: string;
  number: string;
  title: string;
  year: string;
  director: string;
  genre: string[];
  description: string;
  whyILikeIt: string;
  rating: string;
  posterVisual: string; // Theme key or image path
}

export const moviesData: MovieItem[] = [
  {
    id: "interstellar",
    number: "01",
    title: "INTERSTELLAR",
    year: "2014",
    director: "Christopher Nolan",
    genre: ["Sci-Fi", "Adventure", "Drama"],
    description:
      "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
    whyILikeIt:
      "The breathtaking scale, Hans Zimmer's unforgettable organ score, and the emotional core of love transcending time and space make this Nolan's masterpiece. The scientific ambition combined with raw human emotion never fails to give me chills.",
    rating: "10 / 10",
    posterVisual: "interstellar",
  },
  {
    id: "titanic",
    number: "02",
    title: "TITANIC",
    year: "1997",
    director: "James Cameron",
    genre: ["Romance", "Drama", "History"],
    description:
      "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    whyILikeIt:
      "A cinematic monument in production design, storytelling, and emotional power. Cameron's attention to detail, historical authenticity, and the timeless romance between Jack and Rose make it an unforgettable cinematic journey.",
    rating: "9.8 / 10",
    posterVisual: "titanic",
  },
  {
    id: "inception",
    number: "03",
    title: "INCEPTION",
    year: "2010",
    director: "Christopher Nolan",
    genre: ["Sci-Fi", "Action", "Thriller"],
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    whyILikeIt:
      "An exhilarating heist within the subconscious mind. The multi-layered dream architecture, rotating corridor stunts, and complex narrative construction showcase pure filmmaking ingenuity at its highest level.",
    rating: "9.9 / 10",
    posterVisual: "inception",
  },
  {
    id: "avengers-endgame",
    number: "04",
    title: "AVENGERS: ENDGAME",
    year: "2019",
    director: "Anthony & Joe Russo",
    genre: ["Action", "Sci-Fi", "Adventure"],
    description:
      "After the devastating events of Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more to reverse Thanos' actions and restore balance.",
    whyILikeIt:
      "The culmination of over a decade of cinematic storytelling. The emotional payoff, iconic battle scenes ('Portals'), and satisfying character arcs deliver an unparalleled theatrical experience for comic and film fans alike.",
    rating: "9.7 / 10",
    posterVisual: "endgame",
  },
  {
    id: "shutter-island",
    number: "05",
    title: "SHUTTER ISLAND",
    year: "2010",
    director: "Martin Scorsese",
    genre: ["Psychological Thriller", "Mystery"],
    description:
      "In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane on a isolated island.",
    whyILikeIt:
      "Scorsese's masterclass in psychological tension and atmospheric dread. Leonardo DiCaprio's performance paired with the twisting narrative architecture keeps you questioning reality until the chilling final line.",
    rating: "9.6 / 10",
    posterVisual: "shutter-island",
  },
  {
    id: "spiderman-no-way-home",
    number: "06",
    title: "SPIDER-MAN: NO WAY HOME",
    year: "2021",
    director: "Jon Watts",
    genre: ["Action", "Adventure", "Sci-Fi"],
    description:
      "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
    whyILikeIt:
      "A brilliant celebration of three generations of Spider-Man cinema. Beyond the nostalgia and multiverse crossovers, it carries real emotional weight and character growth for Peter Parker.",
    rating: "9.5 / 10",
    posterVisual: "spiderman",
  },
];
