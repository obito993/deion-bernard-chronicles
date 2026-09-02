export interface SongItem {
  id: string;
  number: string;
  title: string;
  artist: string;
  album: string;
  year: string;
  personalNote: string;
  spotifyUrl: string;
  youtubeUrl: string;
  coverVisual: string;
}

export const musicData: SongItem[] = [
  {
    id: "cant-help-falling-in-love",
    number: "01",
    title: "Can't Help Falling in Love",
    artist: "Elvis Presley / Kina Grannis",
    album: "Blue Hawaii / Crazy Rich Asians OST",
    year: "1961 / 2018",
    personalNote:
      "A timeless romantic ballad with tender melody and comforting harmony. As a vocalist, the smooth vocal phrasing and soulfulness of this track resonate deeply with me.",
    spotifyUrl: "https://open.spotify.com/track/44AyOl4qVkzS48vBsbNXaC",
    youtubeUrl: "https://www.youtube.com/watch?v=vGJTaP6anOU",
    coverVisual: "cant-help-falling",
  },
  {
    id: "unchained-melody",
    number: "02",
    title: "Unchained Melody",
    artist: "The Righteous Brothers",
    album: "Just Once in My Life",
    year: "1965",
    personalNote:
      "One of the most vocal-heavy, emotionally soaring tracks ever recorded. The iconic tenor buildup towards the climax demonstrates raw passion and dynamic vocal range.",
    spotifyUrl: "https://open.spotify.com/track/2qhASBzpbFhPRtrnZ5lLnz",
    youtubeUrl: "https://www.youtube.com/watch?v=IYj2hex99gY",
    coverVisual: "unchained-melody",
  },
  {
    id: "heaven",
    number: "03",
    title: "Heaven",
    artist: "Bryan Adams",
    album: "Reckless",
    year: "1984",
    personalNote:
      "An iconic 80s rock ballad filled with heartfelt lyricism, signature rasp, and uplifting melodies that never age.",
    spotifyUrl: "https://open.spotify.com/track/7Ewz6bJ97vUqk5HdkvguFQ",
    youtubeUrl: "https://www.youtube.com/watch?v=s6TtwR2Dbjg",
    coverVisual: "heaven-bryan-adams",
  },
  {
    id: "i-want-it-that-way",
    number: "04",
    title: "I Want It That Way",
    artist: "Backstreet Boys",
    album: "Millennium",
    year: "1999",
    personalNote:
      "The gold standard of pop vocal harmonies. The bridge, modulation, and tight multi-part vocal arrangements make it a vocal masterpiece.",
    spotifyUrl: "https://open.spotify.com/track/47BBI51FKFwOMlIiX6m8ya",
    youtubeUrl: "https://www.youtube.com/watch?v=4fndeDfaWCg",
    coverVisual: "i-want-it-that-way",
  },
  {
    id: "let-it-be-me",
    number: "05",
    title: "Let It Be Me",
    artist: "The Everly Brothers / Ray LaMontagne",
    album: "The Everly Brothers Show",
    year: "1960",
    personalNote:
      "A soulful classic highlighting acoustic warmth, rich vocal harmonies, and steady emotional sincerity.",
    spotifyUrl: "https://open.spotify.com/track/0Tjdbd83LEAWrA0atsXMDJ",
    youtubeUrl: "https://www.youtube.com/watch?v=lvA-F85C_f0",
    coverVisual: "let-it-be-me",
  },
];
