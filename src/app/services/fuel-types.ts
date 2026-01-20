import { FuelTypesType } from '../models/FuelTypes/fuel-types-type';

export async function getFuelTypes(): Promise<FuelTypesType[]> {
  const response = await fetch('../../static-data/fuel-types-fuel-types-type.json');
  if (!response.ok) {
    return Promise.resolve([]);
  }
  return response.json();
}
