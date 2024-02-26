import { FavoriteList } from 'components/FavoriteList/FavoriteList';
import { useSelector } from 'react-redux';

export default function Favorites() {
  const listCars = useSelector(state => state.favoritesCars.favorites);

  return (
    <section>
      {listCars.length ? (
        <FavoriteList favoritesCars={listCars} />
      ) : (
        <h4>You didn't choose any car.</h4>
      )}
    </section>
  );
}
