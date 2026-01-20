import { PriceRangesType } from '../models/PriceRanges/price-ranges-type';

export async function getPriceRanges(): Promise<PriceRangesType[]> {
  const response = await fetch('../../static-data/price-ranges-price-ranges-type.json');
  if (!response.ok) {
    return Promise.resolve([]);
  }
  return response.json();
}
