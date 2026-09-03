export interface MusicItem {
  id: string;
  number: string;
  title: string;
  artist: string;
  album: string;
  personalNote: string;
  image: string;
  searchUrl: string; // Official Spotify Track URL
  color: "violet" | "yellow" | "red";
}

export const musicData: MusicItem[] = [
  {
    id: "cant-help-falling",
    number: "TRACK #01",
    title: "CAN'T HELP FALLING IN LOVE",
    artist: "Elvis Presley",
    album: "Blue Hawaii (1961)",
    personalNote:
      "A timeless vocal masterpiece. As a Tenor & Bass vocalist with the Shamrocks music ensemble, singing and listening to classic vocal harmonies inspires my musical dynamics.",
    image: "/media/cant-help-falling.jpg",
    searchUrl: "https://open.spotify.com/track/44AyOl4qVkzS48vBsbNXaC",
    color: "violet",
  },
  {
    id: "unchained-melody",
    number: "TRACK #02",
    title: "UNCHAINED MELODY",
    artist: "The Righteous Brothers",
    album: "Just Once in My Life (1965)",
    personalNote:
      "One of the greatest vocal performances in recorded history. The build up and crescendo demonstrate extraordinary vocal control and passion.",
    image: "/media/unchained-melody.jpg",
    searchUrl: "https://open.spotify.com/track/2qhASBzpbFhPRtrnZ5lLnz",
    color: "yellow",
  },
  {
    id: "heaven",
    number: "TRACK #03",
    title: "HEAVEN",
    artist: "Bryan Adams",
    album: "Reckless (1984)",
    personalNote:
      "Classic 80s rock ballad with unforgettable melodies and soaring vocal hooks. High energy rock enthusiasm that gets me into creative mode.",
    image: "/media/heaven.jpg",
    searchUrl: "https://open.spotify.com/track/7Ewz6bJ97vUqk5HdkvguFQ",
    color: "red",
  },
  {
    id: "i-want-it-that-way",
    number: "TRACK #04",
    title: "I WANT IT THAT WAY",
    artist: "Backstreet Boys",
    album: "Millennium (1999)",
    personalNote:
      "Iconic pop vocal arrangements and multi-part harmony structure. Perfect arrangement study for choir and ensemble harmony arrangements.",
    image: "/media/i-want-it-that-way.jpg",
    searchUrl: "https://open.spotify.com/track/47BBI51FKFwOMlIiX6m8ya",
    color: "violet",
  },
  {
    id: "let-it-be-me",
    number: "TRACK #05",
    title: "LET IT BE ME",
    artist: "The Everly Brothers",
    album: "It's Everly Time (1960)",
    personalNote:
      "Beautiful acoustic guitar work paired with smooth duo harmonies. Reminds me of acoustic jam sessions and vocal discipline.",
    image: "/media/let-it-be-me.jpg",
    searchUrl: "https://open.spotify.com/track/0Tjdbd83LEAWrA0atsXMDJ",
    color: "yellow",
  },
];
