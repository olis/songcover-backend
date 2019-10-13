export default interface Song {
  id: string;
  title: string;
  artist: string;
  key: string;
  bpm: number;
  wikiTitle: string;
  snippet?: string;
}
