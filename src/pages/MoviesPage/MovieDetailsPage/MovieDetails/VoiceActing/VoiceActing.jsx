export default function VoiceActing({ movie }) {
  return (
    <>
      {movie &&
        movie.map((language) => (
          <span key={language.iso_639_1}>{language.english_name}</span>
        ))}
    </>
  );
}
