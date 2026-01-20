import { useCallback, useEffect, useState } from 'react';
import { CarManufacturersType } from '../models/CarManufacturers/car-manufacturers-type';
import { getCarManufacturers } from '../services/car-manufacturers';

export const useGetCarManufacturers = () => {
  const [carManufacturers, setCarManufacturers] = useState<CarManufacturersType[]>([]);

  const requestCarManufacturers = useCallback(() => {
    let ignore = false;
    getCarManufacturers()
      .then((data) => {
        if (!ignore) {
          setCarManufacturers(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestCarManufacturers();
  }, [requestCarManufacturers]);

  return { requestCarManufacturersCarManufacturers: requestCarManufacturers, carManufacturersCarManufacturers: carManufacturers, setCarManufacturersCarManufacturers: setCarManufacturers };
}
