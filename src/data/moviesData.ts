export interface MovieItem {
  id: string;
  title: string;
  year: string;
  genre: string;
  description: string;
  whyILikeIt: string;
  image: string;
  color: "red" | "dark" | "yellow";
  imdbUrl: string;
}

export const moviesData: MovieItem[] = [
  {
    id: "interstellar",
    title: "INTERSTELLAR",
    year: "2014",
    genre: "Sci-Fi / Adventure / Drama",
    description:
      "When Earth becomes uninhabitable, a team of ex-NASA pilots and researchers undertake an interstellar voyage through a wormhole to find a new home for humanity.",
    whyILikeIt:
      "A masterpiece of scientific curiosity, space exploration, emotion, and Hans Zimmer's incredible score. It inspires my passion for science and pushing boundaries.",
    image: "/media/interstellar.jpg",
    color: "dark",
    imdbUrl: "https://www.imdb.com/title/tt0816692/?ref_=nv_sr_srsg_0_tt_7_nm_1_in_0_q_int",
  },
  {
    id: "titanic",
    title: "TITANIC",
    year: "1997",
    genre: "Romance / Drama / Epic",
    description:
      "A seventeen-year-old aristocrat falls in love with a kind-hearted but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    whyILikeIt:
      "Unmatched cinematic scale, timeless storytelling, and brilliant production design. A classic example of storytelling that touches generations.",
    image: "/media/titanic.jpg",
    color: "red",
    imdbUrl: "https://www.imdb.com/title/tt0120338/?ref_=nv_sr_srsg_3_tt_5_nm_3_in_0_q_tit",
  },
  {
    id: "inception",
    title: "INCEPTION",
    year: "2010",
    genre: "Sci-Fi / Action / Mystery",
    description:
      "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    whyILikeIt:
      "Mind-bending logical architecture, layered dream levels, and precision pacing. It feels like watching complex algorithm design rendered visually.",
    image: "/media/inception.jpg",
    color: "dark",
    imdbUrl: "https://www.imdb.com/title/tt1375666/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_inception",
  },
  {
    id: "avengers-endgame",
    title: "AVENGERS: ENDGAME",
    year: "2019",
    genre: "Superhero / Action / Sci-Fi",
    description:
      "After devastating events, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more to reverse Thanos' actions.",
    whyILikeIt:
      "The ultimate comic book climax! Over a decade of interconnected storytelling coming together with epic stakes, heart, and iconic comic-book battles.",
    image: "/media/endgame.jpg",
    color: "red",
    imdbUrl: "https://www.imdb.com/title/tt4154796/?ref_=nv_sr_srsg_0_tt_7_nm_1_in_0_q_avengers%20",
  },
  {
    id: "shutter-island",
    title: "SHUTTER ISLAND",
    year: "2010",
    genre: "Psychological Thriller / Mystery",
    description:
      "In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.",
    whyILikeIt:
      "Atmospheric noir mystery, incredible plot twists, and deep psychological storytelling that keeps you thinking long after the credits roll.",
    image: "/media/shutter-island.jpg",
    color: "dark",
    imdbUrl: "https://www.imdb.com/title/tt1130884/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_shutter",
  },
  {
    id: "spiderman-no-way-home",
    title: "SPIDER-MAN: NO WAY HOME",
    year: "2021",
    genre: "Superhero / Action / Adventure",
    description:
      "With Spider-Man's identity revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear.",
    whyILikeIt:
      "Pure comic book joy! Multiverse storytelling, nostalgic character team-ups, and emotional growth for the ultimate relatable superhero.",
    image: "/media/spiderman.jpg",
    color: "yellow",
    imdbUrl: "https://www.imdb.com/title/tt10872600/?ref_=nv_sr_srsg_3_tt_8_nm_0_in_0_q_spider%20man%20n",
  },
];
