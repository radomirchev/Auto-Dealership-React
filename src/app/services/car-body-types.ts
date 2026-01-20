import { CarBodyTypesType } from '../models/CarBodyTypes/car-body-types-type';

export async function getCarBodyTypes(): Promise<CarBodyTypesType[]> {
  const response = await fetch('../../static-data/car-body-types-car-body-types-type.json');
  if (!response.ok) {
    return Promise.resolve([]);
  }
  return response.json();
}
