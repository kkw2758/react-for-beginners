import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ coverImg, title, summary, genres }) {
  return (
    <div>
      <img alt={title} src={coverImg} />
      <h2>
        <Link to="/movie">{title}</Link>
      </h2>
      <p>{summary}</p>
      {genres !== null ? (
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
