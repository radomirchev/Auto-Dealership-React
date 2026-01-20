import { useCallback, useEffect, useState } from 'react';
import { getPriceRanges } from '../services/price-ranges';
import { PriceRangesType } from '../models/PriceRanges/price-ranges-type';

export const useGetPriceRanges = () => {
  const [priceRanges, setPriceRanges] = useState<PriceRangesType[]>([]);

  const requestPriceRanges = useCallback(() => {
    let ignore = false;
    getPriceRanges()
      .then((data) => {
        if (!ignore) {
          setPriceRanges(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestPriceRanges();
  }, [requestPriceRanges]);

  return { requestPriceRangesPriceRanges: requestPriceRanges, priceRangesPriceRanges: priceRanges, setPriceRangesPriceRanges: setPriceRanges };
}
