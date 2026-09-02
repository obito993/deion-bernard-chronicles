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
  audioUrl: string;
  coverVisual: string;
}

export const musicData: SongItem[] = [
  {
    id: "cant-help-falling-in-love",
    number: "01",
    title: "Can't Help Falling in Love",
    artist: "Elvis Presley",
    album: "Blue Hawaii",
    year: "1961",
    personalNote:
      "A timeless romantic ballad with tender melody and comforting harmony. As a vocalist, the smooth vocal phrasing and soulfulness of this track resonate deeply with me.",
    spotifyUrl: "https://open.spotify.com/track/44AyOl4qVkzS48vBsbNXaC",
    youtubeUrl: "https://www.youtube.com/watch?v=vGJTaP6anOU",
    audioUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/11/23/69/112369f6-6645-e9ec-8019-e06e3efb160d/mzaf_14601922769880394709.plus.aac.p.m4a",
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
    audioUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/c7/ee/8b/c7ee8b9f-d163-f583-1d95-0e480255a28b/mzaf_16782687670938493222.plus.aac.p.m4a",
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
    audioUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/f8/c5/6b/f8c56ba6-b52a-4cce-3234-f225da838e7d/mzaf_3847569261753735800.plus.aac.p.m4a",
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
    audioUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/12/cd/f8/12cdf81c-f174-cd45-9a56-9b2388df9e63/mzaf_2642298639219088626.plus.aac.p.m4a",
    coverVisual: "i-want-it-that-way",
  },
  {
    id: "let-it-be-me",
    number: "05",
    title: "Let It Be Me",
    artist: "The Everly Brothers",
    album: "The Everly Brothers Show",
    year: "1960",
    personalNote:
      "A soulful classic highlighting acoustic warmth, rich vocal harmonies, and steady emotional sincerity.",
    spotifyUrl: "https://open.spotify.com/track/0Tjdbd83LEAWrA0atsXMDJ",
    youtubeUrl: "https://www.youtube.com/watch?v=lvA-F85C_f0",
    audioUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/12/d8/f6/12d8f6c8-007d-b8d9-5026-192dbdafb5ea/mzaf_5588629988674423957.plus.aac.p.m4a",
    coverVisual: "let-it-be-me",
  },
];
