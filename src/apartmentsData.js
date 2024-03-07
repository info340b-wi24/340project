import { getDatabase, ref, get, push } from 'firebase/database';
import standardImage from './img/standard.jpg';
import hubImage from './img/hub.jpg';
import nolanImage from './img/nolan.jpg';
import kelseyImage from './img/kelsey.jpg';
import twelveImage from './img/twelve.jpg';

const database = getDatabase();

export const fetchApartmentsFromFirebase = async () => {
  const snapshot = await get(ref(database, 'apartments'));
  const data = [];
  if (snapshot.exists()) {
    snapshot.forEach((childSnapshot) => {
      data.push({ id: childSnapshot.key, ...childSnapshot.val() });
    });
  }
  return data;
};

export const saveApartmentDataToFirebase = (apartmentData) => {
  push(ref(database, 'apartments'), apartmentData);
};

export const apartmentsData = [
  { id: 1, name: "1 Bed @ Standard", rent: 1200, duration: "June - August 2024", image: standardImage },
  { id: 2, name: "1 Bed @ Hub Apartments", rent: 1430, duration: "Jan - March 2024", image: hubImage },
  { id: 3, name: "1 Bed @ Nolan Apartments", rent: 1100, duration: "June - August 2024", image: nolanImage },
  { id: 4, name: "1 Bed @ Kelsey", rent: 800, duration: "April - August 2024", image: kelseyImage },
  { id: 5, name: "1 Shared Bedroom @ Twelve Apartments", rent: 1600, duration: "June - August 2024", image: twelveImage },
];
