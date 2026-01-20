import { useCallback, useEffect, useState } from 'react';
import { CarBodyTypesType } from '../models/CarBodyTypes/car-body-types-type';
import { getCarBodyTypes } from '../services/car-body-types';

export const useGetCarBodyTypes = () => {
  const [carBodyTypes, setCarBodyTypes] = useState<CarBodyTypesType[]>([]);

  const requestCarBodyTypes = useCallback(() => {
    let ignore = false;
    getCarBodyTypes()
      .then((data) => {
        if (!ignore) {
          setCarBodyTypes(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestCarBodyTypes();
  }, [requestCarBodyTypes]);

  return { requestCarBodyTypesCarBodyTypes: requestCarBodyTypes, carBodyTypesCarBodyTypes: carBodyTypes, setCarBodyTypesCarBodyTypes: setCarBodyTypes };
}
