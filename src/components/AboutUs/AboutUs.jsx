import { AboutUsList, ItemListAboutUs, H2 } from './AboutUs.styled';

export const AboutUs = () => {
  return (
    <section>
      <H2>About us</H2>
      <AboutUsList>
        <ItemListAboutUs>
          <h2>Profile of Rent a Car</h2>
          <p>
            Ready Rent a Car is a large independent vehicle rental company with
            in excess of 1000 vehicles on fleet. Providing the full rental
            service from daily, weekly, or long-term rental. We provide a full
            range of cars, vans, minibuses, lorries, 4x4 vehicles and we also
            specialise in commercial vehicles. We have over 30 years' experience
            in the industry, with our aim being to provide both the private and
            business sectors with a comprehensive rental service. Please browse
            our vehicles to learn more about our fleet and the different ways
            you can hire vehicles. Use our on-line booking forms or send us an
            enquiry for a quick response
          </p>
        </ItemListAboutUs>
        <ItemListAboutUs>
          <h2>Our Commitment to Customer Service</h2>
          <p>
            We supply a superb and accessible after-care service to all of our
            customers. Which means any queries, any information you may need or
            any concerns you may have, can be answered quickly and easily simply
            by picking-up the phone and speaking with one of our team - who are
            always happy to answer any questions you may have. Similarly, if
            you're thinking of contacting Ready Rent a Car for the first time,
            we're always happy to advise you on the best way forward with your
            vehicle selection.
          </p>
        </ItemListAboutUs>
      </AboutUsList>
    </section>
  );
};
