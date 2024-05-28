import { List, FooterWrapper, Span } from './Footer.styled';

export const Footer = () => {
  return (
    <FooterWrapper>
      <List>
        <li>
          <p>
            <Span>Email: </Span> rentCars@mail.com
          </p>
        </li>
        <li>
          <p>
            <Span>Tel: </Span> +111-00-11-111
          </p>
        </li>
        <li>
          <p>
            <Span>Address: </Span> Sturry Rd, Canterbury CT1 1XX
          </p>
        </li>
      </List>
    </FooterWrapper>
  );
};
