import { CarModelsType } from '../models/CarModels/car-models-type';

export async function getCarModels(): Promise<CarModelsType[]> {
  const response = await fetch('../../static-data/car-models-car-models-type.json');
  if (!response.ok) {
    return Promise.resolve([]);
  }
  return response.json();
}
