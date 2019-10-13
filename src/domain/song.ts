export default interface Song {
  id: string;
  title: string;
  artist: string;
  key: string;
  bpm: number;
  snippet?: string;
}
