import { useCallback, useEffect, useState } from 'react';
import { CarModelsType } from '../models/CarModels/car-models-type';
import { getCarModels } from '../services/car-models';

export const useGetCarModels = () => {
  const [carModels, setCarModels] = useState<CarModelsType[]>([]);

  const requestCarModels = useCallback(() => {
    let ignore = false;
    getCarModels()
      .then((data) => {
        if (!ignore) {
          setCarModels(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestCarModels();
  }, [requestCarModels]);

  return { requestCarModelsCarModels: requestCarModels, carModelsCarModels: carModels, setCarModelsCarModels: setCarModels };
}
