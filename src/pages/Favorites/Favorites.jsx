import { FavoriteList } from 'components/FavoriteList/FavoriteList';
import { useSelector } from 'react-redux';
import { selectFavCars } from 'redux/favorites/favoritesSelectors';
import { Section } from './Favorites.styled';
import img from "../../images/search.png"

export default function Favorites() {
  const listCars = useSelector(selectFavCars);

  return (
    <Section>
      {listCars.length ? (
        <FavoriteList favoritesCars={listCars} />
      ) : (
        <h4>You didn't choose any car.</h4>
      )}
      <img src={img} alt="emoji" width={'100px'} />
    </Section>
  );
}
