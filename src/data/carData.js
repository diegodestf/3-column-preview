import sedanImage from '../images/icon-sedans.svg';
import suvsImage from '../images/icon-suvs.svg';
import luxuryImage from '../images/icon-luxury.svg';

export const carData = [
  {
    carId: 1,
    carImage: sedanImage,
    carModel: 'sedans',
    carPara:
      'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
    carBg: 'hsl(31, 77%, 52%)',
  },
  {
    carId: 2,
    carImage: suvsImage,
    carModel: 'suvs',
    carPara:
      'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
    carBg: 'hsl(184, 100%, 22%)',
  },
  {
    carId: 3,
    carImage: luxuryImage,
    carModel: 'luxury',
    carPara:
      'Luxury Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
    carBg: 'hsl(179, 100%, 13%)',
  },
];
