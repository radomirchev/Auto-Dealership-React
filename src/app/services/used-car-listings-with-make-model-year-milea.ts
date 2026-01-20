import { UsedCarListingsType } from '../models/UsedCarListingsWithMakeModelYearMilea/used-car-listings-type';

export async function getUsedCarListings(): Promise<UsedCarListingsType[]> {
  const response = await fetch('../../static-data/used-car-listings-with-make-model-year-milea-used-car-listings-type.json');
  if (!response.ok) {
    return Promise.resolve([]);
  }
  return response.json();
}
