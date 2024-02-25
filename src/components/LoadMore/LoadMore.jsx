import { Loader } from './LoadMore.styled';

export const LoadMore = ({ onClick }) => {
  return (
    <Loader type="button" onClick={onClick}>
      Load more
    </Loader>
  );
};
