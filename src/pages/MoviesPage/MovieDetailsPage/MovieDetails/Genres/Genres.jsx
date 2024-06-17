export default function Genres({ movie }) {
  return (
    <div>
      {movie.genres.map((genres) => (
        <span key={genres.id}> {genres.name}</span>
      ))}
    </div>
  );
}
