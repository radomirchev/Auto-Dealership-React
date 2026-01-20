import { CarYearsType } from '../models/CarYearsInfo/car-years-type';

export async function getCarYears(): Promise<CarYearsType[]> {
  const response = await fetch('../../static-data/car-years-info-car-years-type.json');
  if (!response.ok) {
    return Promise.resolve([]);
  }
  return response.json();
}
