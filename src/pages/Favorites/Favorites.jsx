import { FavoriteList } from 'components/FavoriteList/FavoriteList';
import { useSelector } from 'react-redux';

export default function Favorites() {
  const listCars = useSelector(state => state.favoritesCars.favorites);

  return (
    <section>
      <h1>Favorites</h1>
      {listCars.length && <FavoriteList favoritesCars={listCars} />}
    </section>
  );
}
// state.favoritesCars.favorites;
