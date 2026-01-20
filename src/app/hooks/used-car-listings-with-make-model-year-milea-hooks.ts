import { useCallback, useEffect, useState } from 'react';
import { getUsedCarListings } from '../services/used-car-listings-with-make-model-year-milea';
import { UsedCarListingsType } from '../models/UsedCarListingsWithMakeModelYearMilea/used-car-listings-type';

export const useGetUsedCarListings = () => {
  const [usedCarListings, setUsedCarListings] = useState<UsedCarListingsType[]>([]);

  const requestUsedCarListings = useCallback(() => {
    let ignore = false;
    getUsedCarListings()
      .then((data) => {
        if (!ignore) {
          setUsedCarListings(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestUsedCarListings();
  }, [requestUsedCarListings]);

  return { requestUsedCarListingsWithMakeModelYearMileaUsedCarListings: requestUsedCarListings, usedCarListingsWithMakeModelYearMileaUsedCarListings: usedCarListings, setUsedCarListingsWithMakeModelYearMileaUsedCarListings: setUsedCarListings };
}
