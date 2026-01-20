import { useCallback, useEffect, useState } from 'react';
import { CarYearsType } from '../models/CarYearsInfo/car-years-type';
import { getCarYears } from '../services/car-years-info';

export const useGetCarYears = () => {
  const [carYears, setCarYears] = useState<CarYearsType[]>([]);

  const requestCarYears = useCallback(() => {
    let ignore = false;
    getCarYears()
      .then((data) => {
        if (!ignore) {
          setCarYears(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestCarYears();
  }, [requestCarYears]);

  return { requestCarYearsInfoCarYears: requestCarYears, carYearsInfoCarYears: carYears, setCarYearsInfoCarYears: setCarYears };
}
