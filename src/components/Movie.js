import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { movieList} from '../features/dbMovies/dbMovies'
const image_url = "https://image.tmdb.org/t/p/original";

const Movie = () => {
  const movies = useSelector(movieList);
    return (
        <Container>
            <h4>Popular TV Shows</h4>
            <Content>
                {movies && movies.map((movie, key) => (
                <Wrap key={key}>
                    <Link to={`/movie-detail/` + movie.id}>
                            <img src={`${image_url}${movie.poster_path}`} alt={movie.name} />
                    </Link>
                 </Wrap>
              ))}
            </Content>

        </Container>
    );

}

const Container = styled.div`
  padding: 0 0 26px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
const Wrap = styled.div`
//   padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  display: flex;
  top: 0;
  left: 0;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  img {
    inset: 0px;
    object-fit: cover;
    opacity: 1;
    display: inline-block;
    width: 100%;
    height: 100%;
    transition: opacity 500ms ease-in-out 0s;
    z-index: 1;
    top: 0;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
export default Movie; 