import { FavoriteList } from 'components/FavoriteList/FavoriteList';
import { useSelector } from 'react-redux';
import { selectFavCars } from 'redux/favorites/favoritesSelectors';

export default function Favorites() {
  const listCars = useSelector(selectFavCars);

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
