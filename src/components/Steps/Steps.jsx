import { Container } from "./Steps.styled";

export const Steps = () => {
  return (
    <section>
      <Container>
        <h2>Drive away in 3 Simple Steps...</h2>
        <p>
          At RentCars, we make car hire a breeze. Simply choose your vehicle,
          select your dates, and drive away. Our streamlined process ensures a
          hassle-free experience from start to finish.
        </p>

        <ul>
          <li>
            
              <h3>Submit The Form</h3>
              <p>
                Simply fill out the form and our team will be in touch with a
                range of vehicle options tailored to your needs.
              </p>
          
          </li>
          <li>
            <h3>Choose Your Vehicle</h3>
            <p>
              Once you’ve received your personalized options, choose the vehicle
              that best suits your requirements.
            </p>
          </li>
          <li>
            <h3>Drive Away</h3>
            <p>
              Pick up your chosen vehicle, get behind the wheel and hit the
              road!
            </p>
          </li>
        </ul>
      </Container>
    </section>
  );
};
