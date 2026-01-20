import { CarManufacturersType } from '../models/CarManufacturers/car-manufacturers-type';

export async function getCarManufacturers(): Promise<CarManufacturersType[]> {
  const response = await fetch('../../static-data/car-manufacturers-car-manufacturers-type.json');
  if (!response.ok) {
    return Promise.resolve([]);
  }
  return response.json();
}
