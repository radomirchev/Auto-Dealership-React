import { useCallback, useEffect, useState } from 'react';
import { FuelTypesType } from '../models/FuelTypes/fuel-types-type';
import { getFuelTypes } from '../services/fuel-types';

export const useGetFuelTypes = () => {
  const [fuelTypes, setFuelTypes] = useState<FuelTypesType[]>([]);

  const requestFuelTypes = useCallback(() => {
    let ignore = false;
    getFuelTypes()
      .then((data) => {
        if (!ignore) {
          setFuelTypes(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestFuelTypes();
  }, [requestFuelTypes]);

  return { requestFuelTypesFuelTypes: requestFuelTypes, fuelTypesFuelTypes: fuelTypes, setFuelTypesFuelTypes: setFuelTypes };
}
