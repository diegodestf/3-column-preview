import { carData } from '../data/carData';

export const Car = () => {
  return (
    <main>
      {carData.map((car) => {
        return (
          <article key={car.carId} className={'card ' + car.carModel}>
            <figure>
              <img src={car.carImage} alt="Card Icon" />
            </figure>
            <section className="card__content">
              <h1 className="card__title">{car.carModel}</h1>
              <p>{car.carPara}</p>
              <button className="card__button">Learn More</button>
            </section>
          </article>
        );
      })}
    </main>
  );
};
