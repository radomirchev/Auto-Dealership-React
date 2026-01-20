import { CarColorsType } from '../models/CarColors/car-colors-type';

export async function getCarColors(): Promise<CarColorsType[]> {
  const response = await fetch('../../static-data/car-colors-car-colors-type.json');
  if (!response.ok) {
    return Promise.resolve([]);
  }
  return response.json();
}
