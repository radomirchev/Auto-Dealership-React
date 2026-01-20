import { CitiesType } from '../models/CityNames/cities-type';

export async function getCities(): Promise<CitiesType[]> {
  const response = await fetch('../../static-data/city-names-cities-type.json');
  if (!response.ok) {
    return Promise.resolve([]);
  }
  return response.json();
}
